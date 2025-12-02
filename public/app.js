// Extended ISO‑4217 currency list (major and many minor currencies)
const currencyList = [
  { code: 'AED', name: 'UAE Dirham' },
  { code: 'AFN', name: 'Afghan Afghani' },
  { code: 'ALL', name: 'Albanian Lek' },
  { code: 'AMD', name: 'Armenian Dram' },
  { code: 'ANG', name: 'Netherlands Antillean Guilder' },
  { code: 'AOA', name: 'Angolan Kwanza' },
  { code: 'ARS', name: 'Argentine Peso' },
  { code: 'AUD', name: 'Australian Dollar' },
  { code: 'AWG', name: 'Aruban Florin' },
  { code: 'AZN', name: 'Azerbaijani Manat' },
  { code: 'BAM', name: 'Bosnia and Herzegovina Convertible Mark' },
  { code: 'BBD', name: 'Barbadian Dollar' },
  { code: 'BDT', name: 'Bangladeshi Taka' },
  { code: 'BGN', name: 'Bulgarian Lev' },
  { code: 'BHD', name: 'Bahraini Dinar' },
  { code: 'BIF', name: 'Burundian Franc' },
  { code: 'BMD', name: 'Bermudan Dollar' },
  { code: 'BND', name: 'Brunei Dollar' },
  { code: 'BOB', name: 'Bolivian Boliviano' },
  { code: 'BRL', name: 'Brazilian Real' },
  { code: 'BSD', name: 'Bahamian Dollar' },
  { code: 'BTN', name: 'Bhutanese Ngultrum' },
  { code: 'BWP', name: 'Botswanan Pula' },
  { code: 'BYN', name: 'Belarusian Ruble' },
  { code: 'BZD', name: 'Belize Dollar' },
  { code: 'CAD', name: 'Canadian Dollar' },
  { code: 'CDF', name: 'Congolese Franc' },
  { code: 'CHF', name: 'Swiss Franc' },
  { code: 'CLP', name: 'Chilean Peso' },
  { code: 'CNY', name: 'Chinese Yuan' },
  { code: 'COP', name: 'Colombian Peso' },
  { code: 'CRC', name: 'Costa Rican Colón' },
  { code: 'CUP', name: 'Cuban Peso' },
  { code: 'CVE', name: 'Cape Verdean Escudo' },
  { code: 'CZK', name: 'Czech Koruna' },
  { code: 'DJF', name: 'Djiboutian Franc' },
  { code: 'DKK', name: 'Danish Krone' },
  { code: 'DOP', name: 'Dominican Peso' },
  { code: 'DZD', name: 'Algerian Dinar' },
  { code: 'EGP', name: 'Egyptian Pound' },
  { code: 'ERN', name: 'Eritrean Nakfa' },
  { code: 'ETB', name: 'Ethiopian Birr' },
  { code: 'EUR', name: 'Euro' },
  { code: 'FJD', name: 'Fijian Dollar' },
  { code: 'FKP', name: 'Falkland Islands Pound' },
  { code: 'GBP', name: 'British Pound Sterling' },
  { code: 'GEL', name: 'Georgian Lari' },
  { code: 'GHS', name: 'Ghanaian Cedi' },
  { code: 'GIP', name: 'Gibraltar Pound' },
  { code: 'GMD', name: 'Gambian Dalasi' },
  { code: 'GNF', name: 'Guinean Franc' },
  { code: 'GTQ', name: 'Guatemalan Quetzal' },
  { code: 'GYD', name: 'Guyanaese Dollar' },
  { code: 'HKD', name: 'Hong Kong Dollar' },
  { code: 'HNL', name: 'Honduran Lempira' },
  { code: 'HRK', name: 'Croatian Kuna' },
  { code: 'HTG', name: 'Haitian Gourde' },
  { code: 'HUF', name: 'Hungarian Forint' },
  { code: 'IDR', name: 'Indonesian Rupiah' },
  { code: 'ILS', name: 'Israeli New Shekel' },
  { code: 'INR', name: 'Indian Rupee' },
  { code: 'IQD', name: 'Iraqi Dinar' },
  { code: 'IRR', name: 'Iranian Rial' },
  { code: 'ISK', name: 'Icelandic Króna' },
  { code: 'JMD', name: 'Jamaican Dollar' },
  { code: 'JOD', name: 'Jordanian Dinar' },
  { code: 'JPY', name: 'Japanese Yen' },
  { code: 'KES', name: 'Kenyan Shilling' },
  { code: 'KGS', name: 'Kyrgystani Som' },
  { code: 'KHR', name: 'Cambodian Riel' },
  { code: 'KMF', name: 'Comorian Franc' },
  { code: 'KPW', name: 'North Korean Won' },
  { code: 'KRW', name: 'South Korean Won' },
  { code: 'KWD', name: 'Kuwaiti Dinar' },
  { code: 'KYD', name: 'Cayman Islands Dollar' },
  { code: 'KZT', name: 'Kazakhstani Tenge' },
  { code: 'LAK', name: 'Laotian Kip' },
  { code: 'LBP', name: 'Lebanese Pound' },
  { code: 'LKR', name: 'Sri Lankan Rupee' },
  { code: 'LRD', name: 'Liberian Dollar' },
  { code: 'LSL', name: 'Lesotho Loti' },
  { code: 'LYD', name: 'Libyan Dinar' },
  { code: 'MAD', name: 'Moroccan Dirham' },
  { code: 'MDL', name: 'Moldovan Leu' },
  { code: 'MGA', name: 'Malagasy Ariary' },
  { code: 'MKD', name: 'Macedonian Denar' },
  { code: 'MMK', name: 'Myanma Kyat' },
  { code: 'MNT', name: 'Mongolian Tugrik' },
  { code: 'MOP', name: 'Macanese Pataca' },
  { code: 'MRU', name: 'Mauritanian Ouguiya' },
  { code: 'MUR', name: 'Mauritian Rupee' },
  { code: 'MVR', name: 'Maldivian Rufiyaa' },
  { code: 'MWK', name: 'Malawian Kwacha' },
  { code: 'MXN', name: 'Mexican Peso' },
  { code: 'MYR', name: 'Malaysian Ringgit' },
  { code: 'MZN', name: 'Mozambican Metical' },
  { code: 'NAD', name: 'Namibian Dollar' },
  { code: 'NGN', name: 'Nigerian Naira' },
  { code: 'NIO', name: 'Nicaraguan Córdoba' },
  { code: 'NOK', name: 'Norwegian Krone' },
  { code: 'NPR', name: 'Nepalese Rupee' },
  { code: 'NZD', name: 'New Zealand Dollar' },
  { code: 'OMR', name: 'Omani Rial' },
  { code: 'PAB', name: 'Panamanian Balboa' },
  { code: 'PEN', name: 'Peruvian Sol' },
  { code: 'PGK', name: 'Papua New Guinean Kina' },
  { code: 'PHP', name: 'Philippine Peso' },
  { code: 'PKR', name: 'Pakistani Rupee' },
  { code: 'PLN', name: 'Polish Zloty' },
  { code: 'PYG', name: 'Paraguayan Guarani' },
  { code: 'QAR', name: 'Qatari Rial' },
  { code: 'RON', name: 'Romanian Leu' },
  { code: 'RSD', name: 'Serbian Dinar' },
  { code: 'RUB', name: 'Russian Ruble' },
  { code: 'RWF', name: 'Rwandan Franc' },
  { code: 'SAR', name: 'Saudi Riyal' },
  { code: 'SBD', name: 'Solomon Islands Dollar' },
  { code: 'SCR', name: 'Seychellois Rupee' },
  { code: 'SDG', name: 'Sudanese Pound' },
  { code: 'SEK', name: 'Swedish Krona' },
  { code: 'SGD', name: 'Singapore Dollar' },
  { code: 'SHP', name: 'St. Helena Pound' },
  { code: 'SLL', name: 'Sierra Leonean Leone' },
  { code: 'SOS', name: 'Somali Shilling' },
  { code: 'SRD', name: 'Surinamese Dollar' },
  { code: 'SSP', name: 'South Sudanese Pound' },
  { code: 'STN', name: 'São Tomé and Príncipe Dobra' },
  { code: 'SYP', name: 'Syrian Pound' },
  { code: 'SZL', name: 'Swazi Lilangeni' },
  { code: 'THB', name: 'Thai Baht' },
  { code: 'TJS', name: 'Tajikistani Somoni' },
  { code: 'TMT', name: 'Turkmenistani Manat' },
  { code: 'TND', name: 'Tunisian Dinar' },
  { code: 'TOP', name: "Tongan Paʻanga" },
  { code: 'TRY', name: 'Turkish Lira' },
  { code: 'TTD', name: 'Trinidad and Tobago Dollar' },
  { code: 'TWD', name: 'New Taiwan Dollar' },
  { code: 'TZS', name: 'Tanzanian Shilling' },
  { code: 'UAH', name: 'Ukrainian Hryvnia' },
  { code: 'UGX', name: 'Ugandan Shilling' },
  { code: 'USD', name: 'US Dollar' },
  { code: 'UYU', name: 'Uruguayan Peso' },
  { code: 'UZS', name: 'Uzbekistan Som' },
  { code: 'VES', name: 'Venezuelan Bolívar Soberano' },
  { code: 'VND', name: 'Vietnamese Dong' },
  { code: 'VUV', name: 'Vanuatu Vatu' },
  { code: 'WST', name: 'Samoan Tala' },
  { code: 'XAF', name: 'CFA Franc BEAC' },
  { code: 'XCD', name: 'East Caribbean Dollar' },
  { code: 'XOF', name: 'CFA Franc BCEAO' },
  { code: 'XPF', name: 'CFP Franc' },
  { code: 'YER', name: 'Yemeni Rial' },
  { code: 'ZAR', name: 'South African Rand' },
  { code: 'ZMW', name: 'Zambian Kwacha' },
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

  els.amountFrom.addEventListener('input', (event) => handleAmountInput(event, 'from'));
  els.amountTo.addEventListener('input', (event) => handleAmountInput(event, 'to'));

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
    els.amountTo.value = converted ? formatNumber(converted, 6, { useGrouping: false }) : '';
  } else if (changed === 'to') {
    const converted = toValue / currentRate;
    els.amountFrom.value = converted ? formatNumber(converted, 6, { useGrouping: false }) : '';
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

function formatNumber(value, maximumFractionDigits = 4, options = {}) {
  const { useGrouping = true } = options;
  return Number(value).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits,
    useGrouping,
  });
}

function handleAmountInput(event, changedField) {
  const sanitized = sanitizeNumericInput(event.target.value);
  event.target.value = sanitized;

  if (!sanitized) {
    if (changedField === 'from') {
      els.amountTo.value = '';
    } else {
      els.amountFrom.value = '';
    }
    return;
  }

  updateOppositeField(changedField);
}

function sanitizeNumericInput(rawValue) {
  if (!rawValue) return '';
  let sanitized = rawValue.replace(/[^0-9.]/g, '');
  const parts = sanitized.split('.');
  if (parts.length > 2) {
    sanitized = `${parts.shift()}.${parts.join('')}`;
  }
  return sanitized;
}
