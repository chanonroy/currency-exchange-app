const rates = {
  'USD': {
    'GBP': 0.7925201485,
    'EUR': 0.9055510278,
    'USD': 1
  },
  'GBP': {
    'GBP': 1,
    'EUR': 1.1426220892,
    'USD': 1.2617975731
  },
  'EUR': {
    'GBP': 0.87518,
    'EUR': 1,
    'USD': 1.1043
  }
};

export default function handle(req, res) {
  res.end(JSON.stringify(rates))
}
