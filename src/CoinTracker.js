import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [amount, setAmount] = useState(0);
  const [selecting, setSelecting] = useState(0);
  // const selectChange = (event) => {
  //   console.log(event.target.selectedIndex);
  //   console.log(event.target.value);
  //   console.log(event);
  // };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  useEffect(() => {}, []);
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const selectOption = (event) => {
    console.log(event.target.selectedIndex);
    setSelecting(event.target.selectedIndex);
    console.log(selecting);
  };
  const reset = () => {
    setAmount(0);
  };
  const convert = () => {};

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      <div>
        <label htmlFor="wallet">Wallet</label>
        <input
          value={amount}
          id="wallet"
          placeholder="Wallet"
          type="number"
          onChange={onChange}
        />
        USD
      </div>
      <div>
        {loading ? (
          <strong>Loading...</strong>
        ) : (
          <select onChange={selectOption}>
            {coins.map((coin) => (
              <option key={coin.rank}>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}
              </option>
            ))}
          </select>
        )}
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={convert}>convert</button>
    </div>
  );
}

export default App;
