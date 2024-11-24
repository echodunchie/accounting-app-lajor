import React from 'react';

const IncomeForm = ({
  siReference,
  setSiReference,
  date,
  setDate,
  amount,
  setAmount,
  withholdingTax,
  setWithholdingTax,
  netIncome,
  setNetIncome,
  invoice,
  setInvoice,
  customerName,
  setCustomerName,
  companyName,
  setCompanyName,
}) => {
  return (
    <>
      {/* Collections Title */}
      <h3 className="text-xl font-semibold text-gray-800 my-8">Collections</h3>

      {/* Collections Section */}
      <div className="mb-4">
        <label htmlFor="siReference" className="block text-gray-700 font-bold mb-2">
          SI Reference
        </label>
        <input
          type="number"
          id="siReference"
          name="siReference"
          className="border rounded w-full py-2 px-3"
          value={siReference}
          onChange={(e) => setSiReference(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          className="border rounded w-full py-2 px-3"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="amount" className="block text-gray-700 font-bold mb-2">
          Amount
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          className="border rounded w-full py-2 px-3"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="withholdingTax" className="block text-gray-700 font-bold mb-2">
          Withholding Tax
        </label>
        <input
          type="number"
          id="withholdingTax"
          name="withholdingTax"
          className="border rounded w-full py-2 px-3"
          value={withholdingTax}
          onChange={(e) => setWithholdingTax(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="netIncome" className="block text-gray-700 font-bold mb-2">
          Net Income
        </label>
        <input
          type="number"
          id="netIncome"
          name="netIncome"
          className="border rounded w-full py-2 px-3"
          value={netIncome}
          onChange={(e) => setNetIncome(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="invoice" className="block text-gray-700 font-bold mb-2">
          Invoice
        </label>
        <input
          type="number"
          id="invoice"
          name="invoice"
          className="border rounded w-full py-2 px-3"
          value={invoice}
          onChange={(e) => setInvoice(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="customerName" className="block text-gray-700 font-bold mb-2">
          Customer Name
        </label>
        <input
          type="text"
          id="customerName"
          name="customerName"
          className="border rounded w-full py-2 px-3"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="companyName" className="block text-gray-700 font-bold mb-2">
          Company Name
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          className="border rounded w-full py-2 px-3"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>

      {/* Sales Invoice Section */}
      <h3 className="text-xl font-semibold text-gray-800 mt-10 mb-8">Sales Invoice</h3>

      <div className="mb-4">
        <label htmlFor="siReference" className="block text-gray-700 font-bold mb-2">
          ID (Pre-number from BIR)
        </label>
        <input
          type="text"
          id="siReference"
          name="siReference"
          className="border rounded w-full py-2 px-3"
          placeholder="Enter Sales Invoice ID"
          value={siReference}
          onChange={(e) => setSiReference(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          className="border rounded w-full py-2 px-3"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="amount" className="block text-gray-700 font-bold mb-2">
          Amount
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          className="border rounded w-full py-2 px-3"
          placeholder="₱ (e.g., 1,000.00)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="border rounded w-full py-2 px-3"
          rows="3"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="customerName" className="block text-gray-700 font-bold mb-2">
          Customer Name
        </label>
        <input
          type="text"
          id="customerName"
          name="customerName"
          className="border rounded w-full py-2 px-3"
          placeholder="Enter Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
        />
      </div>

    </>
  );
};

export default IncomeForm;
