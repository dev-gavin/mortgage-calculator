function App() {
  return (
    <>
      <h1>Mortgage payment calculator</h1>

      <div>
        <label htmlFor="purchase-price">Purchase price: </label>
        <input
          id="purchase-price"
          type="range"
          min={50_000}
          max={1_000_000}
          step={10_000}
          onChange={(e) => console.log(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="down-payment">Down payment: </label>
        <input
          id="down-payment"
          type="range"
          min={0}
          max={500_000}
          step={1_000}
          onChange={(e) => console.log(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="repayment-term">Repayment term: </label>
        <input
          id="repayment-term"
          type="range"
          min={1}
          max={30}
          step={1}
          onChange={(e) => console.log(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="interest-rate">Interest rate: </label>
        <input
          id="interest-rate"
          type="range"
          min={1}
          max={15}
          step={0.1}
          onChange={(e) => console.log(e.target.value)}
        />
      </div>

      <section>
        <p>Loan amount</p>
        <p id="loan-amount"></p>

        <p>Estimated monthly payment: </p>
        <p id="monthly-payment"></p>
      </section>

      <button> Get a mortgage quote</button>
    </>
  );
}

export default App;
