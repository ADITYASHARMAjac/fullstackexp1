import { useMemo, useState } from 'react'
import './App.css'

const rates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
  INR: 83.1,
  JPY: 155.6,
  AUD: 1.49,
}

const currencyOptions = Object.keys(rates)

function App() {
  const [amount, setAmount] = useState('100')
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('INR')

  const convertedAmount = useMemo(() => {
    const numericAmount = Number(amount)
    if (Number.isNaN(numericAmount)) {
      return '0.00'
    }

    const usdValue = numericAmount / rates[fromCurrency]
    return (usdValue * rates[toCurrency]).toFixed(2)
  }, [amount, fromCurrency, toCurrency])

  const swapCurrencies = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  return (
    <main className="shell currency-shell">
      <section className="panel currency-panel">
        <p className="eyebrow">Mini Project 5</p>
        <h1>Currency Converter</h1>
        <p className="lead">
          Convert between common currencies with a quick, clean rate card.
        </p>

        <div className="converter-grid">
          <label>
            <span>Amount</span>
            <input
              type="number"
              min="0"
              step="0.01"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            />
          </label>

          <label>
            <span>From</span>
            <select value={fromCurrency} onChange={(event) => setFromCurrency(event.target.value)}>
              {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </label>

          <button type="button" className="swap-button" onClick={swapCurrencies}>
            Swap
          </button>

          <label>
            <span>To</span>
            <select value={toCurrency} onChange={(event) => setToCurrency(event.target.value)}>
              {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="result-card" aria-live="polite">
          <span>Converted amount</span>
          <strong>
            {convertedAmount} {toCurrency}
          </strong>
          <p>
            1 {fromCurrency} = {(rates[toCurrency] / rates[fromCurrency]).toFixed(4)} {toCurrency}
          </p>
        </div>
      </section>
    </main>
  )
}

export default App
