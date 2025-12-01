const currencyList = [
  { code: 'USD', name: 'US Dollar' },
  { code: 'EUR', name: 'Euro' },
  { code: 'INR', name: 'Indian Rupee' },
  { code: 'GBP', name: 'British Pound' },
  { code: 'JPY', name: 'Japanese Yen' },
  { code: 'AUD', name: 'Australian Dollar' },
  { code: 'CAD', name: 'Canadian Dollar' },
  { code: 'CHF', name: 'Swiss Franc' },
  { code: 'CNY', name: 'Chinese Yuan' },
  { code: 'SGD', name: 'Singapore Dollar' },
  { code: 'ZAR', name: 'South African Rand' },
  { code: 'AED', name: 'UAE Dirham' },
  { code: 'SAR', name: 'Saudi Riyal' },
  { code: 'SEK', name: 'Swedish Krona' },
  { code: 'NZD', name: 'New Zealand Dollar' },
];

const els = {
  currencyFrom: document.getElementById('currencyFrom'),
  currencyTo: document.getElementById('currencyTo'),
  amountFrom: document.getElementById('amountFrom'),
  amountTo: document.getElementById('amountTo'),
  rateLabel: document.getElementById('rateLabel'),
  timestamp: document.getElementById('timestampLabel'),
  heroRate: document.getElementById('heroRate'),
  swapButton: document.getElementById('swapButton'),
  addFavorite: document.getElementById('addFavorite'),
  favoriteList: document.getElementById('favoriteList'),
  favoriteTemplate: document.getElementById('favoriteTemplate'),
  historyTemplate: document.getElementById('historyItemTemplate'),
  historyList: document.getElementById('historyList'),
  clearHistory: document.getElementById('clearHistory'),
};

const storageKeys = {
  favorites: 'cc-favorites',
  history: 'cc-history',
};

let currentRate = null;
let lastFetchedPair = '';
let fetchingPromise = null;

init();

function init() {
  populateSelects();
  restoreState();
  bindEvents();
  refreshRate();
}

function populateSelects() {
  const fragment = document.createDocumentFragment();
  currencyList.forEach(({ code, name }) => {
    const option = document.createElement('option');
    option.value = code;
    option.textContent = `${code} · ${name}`;
    fragment.appendChild(option);
  });

  els.currencyFrom.appendChild(fragment.cloneNode(true));
  els.currencyTo.appendChild(fragment.cloneNode(true));

  els.currencyFrom.value = 'USD';
  els.currencyTo.value = 'INR';
}

function bindEvents() {
  els.currencyFrom.addEventListener('change', () => refreshRate());
  els.currencyTo.addEventListener('change', () => refreshRate());

  els.amountFrom.addEventListener('input', () => updateOppositeField('from'));
  els.amountTo.addEventListener('input', () => updateOppositeField('to'));

  els.swapButton.addEventListener('click', () => {
    const fromValue = els.currencyFrom.value;
    els.currencyFrom.value = els.currencyTo.value;
    els.currencyTo.value = fromValue;
    refreshRate();
  });

  els.addFavorite.addEventListener('click', saveFavoritePair);
  els.clearHistory.addEventListener('click', clearHistory);
}

async function refreshRate() {
  const from = els.currencyFrom.value;
  const to = els.currencyTo.value;
  lastFetchedPair = `${from}-${to}`;
  els.rateLabel.textContent = 'Fetching live Google Finance rate…';

  try {
    fetchingPromise = fetch(`/api/convert?from=${from}&to=${to}`);
    const response = await fetchingPromise;
    if (!response.ok) throw new Error('Failed to fetch rate');

    const data = await response.json();
    if (`${from}-${to}` !== lastFetchedPair) {
      return; // outdated response
    }

    currentRate = data.rate;
    const timestamp = new Date(data.timestamp || Date.now());

    els.rateLabel.textContent = `1 ${from} = ${formatNumber(currentRate)} ${to}`;
    els.timestamp.textContent = `Source: Google Finance · Updated ${timestamp.toLocaleTimeString()}`;
    els.heroRate.textContent = `1 ${from} = ${formatNumber(currentRate)} ${to}`;

    updateOppositeField('from');
    pushHistoryEntry({ from, to, rate: currentRate, timestamp });
  } catch (error) {
    console.error(error);
    currentRate = null;
    els.rateLabel.textContent = 'Unable to fetch rate from Google right now.';
    els.timestamp.textContent = 'Check your connection or try again shortly.';
  }
}

function updateOppositeField(changed) {
  if (!currentRate) return;

  const fromValue = parseFloat(els.amountFrom.value) || 0;
  const toValue = parseFloat(els.amountTo.value) || 0;

  if (changed === 'from') {
    const converted = fromValue * currentRate;
    els.amountTo.value = converted ? formatNumber(converted, 4) : '';
  } else if (changed === 'to') {
    const converted = toValue / currentRate;
    els.amountFrom.value = converted ? formatNumber(converted, 4) : '';
  }
}

function saveFavoritePair() {
  const pair = `${els.currencyFrom.value}-${els.currencyTo.value}`;
  const favorites = getFavorites();
  if (!favorites.includes(pair)) {
    favorites.unshift(pair);
    localStorage.setItem(storageKeys.favorites, JSON.stringify(favorites.slice(0, 8)));
    renderFavorites();
  }
}

function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem(storageKeys.favorites)) || [];
  } catch (e) {
    return [];
  }
}

function renderFavorites() {
  const favorites = getFavorites();
  els.favoriteList.innerHTML = '';

  favorites.forEach((pair) => {
    const btn = els.favoriteTemplate.content.firstElementChild.cloneNode(true);
    btn.textContent = pair.replace('-', ' → ');
    btn.addEventListener('click', () => {
      const [from, to] = pair.split('-');
      els.currencyFrom.value = from;
      els.currencyTo.value = to;
      refreshRate();
    });
    els.favoriteList.appendChild(btn);
  });
}

function pushHistoryEntry(entry) {
  const existing = getHistory();
  existing.unshift(entry);
  localStorage.setItem(storageKeys.history, JSON.stringify(existing.slice(0, 6)));
  renderHistory();
}

function getHistory() {
  try {
    return JSON.parse(localStorage.getItem(storageKeys.history)) || [];
  } catch (error) {
    return [];
  }
}

function renderHistory() {
  const history = getHistory();
  els.historyList.innerHTML = '';

  history.forEach(({ from, to, rate, timestamp }) => {
    const item = els.historyTemplate.content.firstElementChild.cloneNode(true);
    item.querySelector('.history-pair').textContent = `${from} → ${to}`;
    item.querySelector('.history-rate').textContent = `${formatNumber(rate)} ${to}`;
    item.querySelector('.history-time').textContent = new Date(timestamp).toLocaleTimeString();
    els.historyList.appendChild(item);
  });
}

function clearHistory() {
  localStorage.removeItem(storageKeys.history);
  renderHistory();
}

function restoreState() {
  renderFavorites();
  renderHistory();
}

function formatNumber(value, maximumFractionDigits = 4) {
  return Number(value).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits,
  });
}
