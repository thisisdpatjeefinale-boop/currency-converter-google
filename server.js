import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const CACHE_TTL_MS = 60 * 1000; // one minute cache window to reduce Google hits
const rateCache = new Map(); // key: pair string, value: { rate, timestamp }

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/convert', async (req, res) => {
  try {
    const from = (req.query.from || 'USD').toUpperCase();
    const to = (req.query.to || 'EUR').toUpperCase();

    if (from === to) {
      return res.json({ rate: 1, from, to, source: 'google-finance', timestamp: Date.now() });
    }

    const cacheKey = `${from}-${to}`;
    const cached = rateCache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < CACHE_TTL_MS) {
      return res.json({ rate: cached.rate, from, to, source: 'google-finance', timestamp: cached.timestamp, cached: true });
    }

    const rate = await fetchGoogleRate(from, to);
    rateCache.set(cacheKey, { rate, timestamp: Date.now() });

    res.json({ rate, from, to, source: 'google-finance', timestamp: Date.now() });
  } catch (error) {
    console.error('Conversion error', error.message);
    res.status(500).json({ error: 'Unable to fetch live rate from Google Finance. Try again shortly.' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Currency converter server running on http://localhost:${PORT}`);
});

async function fetchGoogleRate(from, to) {
  const pair = `${from}-${to}`;
  const url = `https://www.google.com/finance/quote/${pair}`;
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (CurrencyConverterBot)',
      Accept: 'text/html,application/xhtml+xml',
      'Accept-Language': 'en-US,en;q=0.9',
    },
  });

  if (!response.ok) {
    throw new Error(`Google Finance request failed with status ${response.status}`);
  }

  const html = await response.text();

  const attrMatch = html.match(/data-last-price="([\d.,]+)"/i);
  const divMatch = html.match(/class="YMlKec fxKbKc">[^\\d]*([\\d.,]+)/i);

  const price = attrMatch?.[1] || divMatch?.[1];
  if (!price) {
    throw new Error('Could not parse conversion rate from Google response.');
  }

  const numeric = parseFloat(price.replace(/,/g, ''));
  if (Number.isNaN(numeric)) {
    throw new Error('Parsed rate is not a valid number');
  }

  return numeric;
}
