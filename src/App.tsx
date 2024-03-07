import { useState } from "react";

const calculatorParameters = {
  purchasePrice: {
    min: 50_000,
    max: 1_000_000,
    step: 10_000,
  },
  downPayment: {
    min: 0,
    max: 500_000,
    step: 1_000,
  },
  repaymentTerm: {
    min: 1,
    max: 30,
    step: 1,
  },
  interestRate: {
    min: 1,
    max: 15,
    step: 0.1,
  },
};

function App() {
  const [formData, setFormData] = useState({
    purchasePrice: calculatorParameters.purchasePrice.min,
    downPayment: calculatorParameters.downPayment.min,
    repaymentTerm: calculatorParameters.repaymentTerm.min,
    interestRate: calculatorParameters.interestRate.min,
  });

  const [monthlyPayment, setMonthlyPayment] = useState();

  function handleFormChange({ target }) {
    setFormData((previous) => ({
      ...previous,
      [target.id]: Number(target.value),
    }));
  }

  function handleClick(event) {
    const loanAmount = formData.purchasePrice - formData.downPayment;
    const monthlyRate = formData.interestRate / 100 / 12;
    const periods = formData.repaymentTerm * 12;
    const paymentAmount =
      loanAmount *
      ((monthlyRate * Math.pow(1 + monthlyRate, periods)) /
        (Math.pow(1 + monthlyRate, periods) - 1));
    setMonthlyPayment(paymentAmount);
  }

  return (
    <div className="mx-auto w-2/3 bg-violet-200 py-10 px-7 text-nowrap">
      <h1 className="text-2xl font-bold mb-8">Mortgage payment calculator</h1>

      <section className="flex flex-wrap gap-6 justify-between [&>*]:w-full">
        <div>
          <label htmlFor="purchasePrice" className="text-gray-700">
            Purchase price:
            <span className="text-gray-900 text-xl pl-7 align-middle">
              ${formData.purchasePrice.toLocaleString()}
            </span>
          </label>
          <input
            id="purchasePrice"
            className="accent-violet-600 block w-full mt-2"
            type="range"
            min={calculatorParameters.purchasePrice.min}
            max={calculatorParameters.purchasePrice.max}
            step={calculatorParameters.purchasePrice.step}
            onChange={handleFormChange}
          />
        </div>

        <div>
          <label htmlFor="downPayment" className="text-gray-700">
            Down payment:
            <span className="text-gray-900 text-xl pl-7 align-middle">
              ${formData.downPayment.toLocaleString()}
            </span>
          </label>
          <input
            className="accent-violet-600 block w-full"
            id="downPayment"
            type="range"
            min={calculatorParameters.downPayment.min}
            max={calculatorParameters.downPayment.max}
            step={calculatorParameters.downPayment.step}
            onChange={handleFormChange}
          />
        </div>

        <div>
          <label htmlFor="repaymentTerm text-gray-700">
            Repayment term:
            <span className="text-gray-900 text-xl pl-7 align-middle">
              {formData.repaymentTerm.toLocaleString()}
            </span>
          </label>
          <input
            className="accent-violet-600 block w-full"
            id="repaymentTerm"
            type="range"
            min={calculatorParameters.repaymentTerm.min}
            max={calculatorParameters.repaymentTerm.max}
            step={calculatorParameters.repaymentTerm.step}
            onChange={handleFormChange}
          />
        </div>

        <div>
          <label htmlFor="interestRate">
            Interest rate:
            <span className="text-gray-900 text-xl pl-7 align-middle">
              {formData.interestRate.toLocaleString()} %
            </span>
          </label>
          <input
            className="accent-violet-600 block w-full"
            id="interestRate"
            type="range"
            min={calculatorParameters.interestRate.min}
            max={calculatorParameters.interestRate.max}
            step={calculatorParameters.interestRate.step}
            onChange={handleFormChange}
          />
        </div>

        <p>
          Loan amount{" "}
          <span>
            ${(formData.purchasePrice - formData.downPayment).toLocaleString()}
          </span>
        </p>

        <p className="text-wrap">
          Estimated monthly payment:{" "}
          <span>${Math.round(monthlyPayment).toLocaleString()}</span>
        </p>
      </section>

      <button onClick={handleClick}> Get a mortgage quote</button>
    </div>
  );
}

export default App;
