import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddRawDataPage = ({ addRawDataSubmit }) => {
  const [transactionType, setTransactionType] = useState('expense');
  const [accountTitle, setAccountTitle] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [supplierName, setSupplierName] = useState('');
  const [payeeName, setPayeeName] = useState('');
  const [checkNumber, setCheckNumber] = useState('');
  const [tin, setTin] = useState('');
  const [invoiceAmount, setInvoiceAmount] = useState('');
  const [vatableAmount, setVatableAmount] = useState('');
  const [vat, setVat] = useState('');
  const [particular, setParticular] = useState('');
  const [address, setAddress] = useState('');

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const newRawData = {
      transactionType,
      accountTitle,
      date,
      amount,
      description,
      supplier: {
        name: supplierName,
        tin,
        address,
      },
      payee: {
        name: payeeName,
      },
      checkNumber,
      invoiceAmount,
      vatableAmount,
      vat,
      particular,
    };

    addRawDataSubmit(newRawData);

    toast.success('Raw Data Added Successfully');
    navigate('/raw-data');
  };

  return (
    <section className="bg-slate-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">
              Add Transaction
            </h2>

            {/* Transaction Type */}
            <div className="mb-4">
              <label htmlFor="transactionType" className="block text-gray-700 font-bold mb-2">
                Transaction Type
              </label>
              <select
                id="transactionType"
                name="transactionType"
                className="border rounded w-full py-2 px-3"
                required
                value={transactionType}
                onChange={(e) => setTransactionType(e.target.value)}
              >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
            </div>

            {/* Expense Form */}
            {transactionType === 'expense' && (
              <>
                <div className="mb-4">
                  <label htmlFor="accountTitle" className="block text-gray-700 font-bold mb-2">
                    Account Title
                  </label>
                  <select
                    id="accountTitle"
                    name="accountTitle"
                    className="border rounded w-full py-2 px-3"
                    required
                    value={accountTitle}
                    onChange={(e) => setAccountTitle(e.target.value)}
                  >
                    <option value="Fuel">Fuel</option>
                    <option value="Oil">Oil</option>
                    <option value="Salaries">Salaries</option>
                    <option value="Utilities">Utilities</option>
                  </select>
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
                    required
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
                    required
                    placeholder="₱ (e.g., 1,000.00)"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                    Description or Particular Feed
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    className="border rounded w-full py-2 px-3"
                    rows="4"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label htmlFor="supplierName" className="block text-gray-700 font-bold mb-2">
                    Supplier's Name
                  </label>
                  <input
                    type="text"
                    id="supplierName"
                    name="supplierName"
                    className="border rounded w-full py-2 px-3"
                    value={supplierName}
                    onChange={(e) => setSupplierName(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="payeeName" className="block text-gray-700 font-bold mb-2">
                    Payee's Name
                  </label>
                  <input
                    type="text"
                    id="payeeName"
                    name="payeeName"
                    className="border rounded w-full py-2 px-3"
                    value={payeeName}
                    onChange={(e) => setPayeeName(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="checkNumber" className="block text-gray-700 font-bold mb-2">
                    Check Number
                  </label>
                  <input
                    type="text"
                    id="checkNumber"
                    name="checkNumber"
                    className="border rounded w-full py-2 px-3"
                    value={checkNumber}
                    onChange={(e) => setCheckNumber(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="tin" className="block text-gray-700 font-bold mb-2">
                    TIN of Supplier
                  </label>
                  <input
                    type="text"
                    id="tin"
                    name="tin"
                    className="border rounded w-full py-2 px-3"
                    placeholder="000-000-000"
                    value={tin}
                    onChange={(e) => setTin(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="invoiceAmount" className="block text-gray-700 font-bold mb-2">
                    Invoice Amount
                  </label>
                  <input
                    type="number"
                    id="invoiceAmount"
                    name="invoiceAmount"
                    className="border rounded w-full py-2 px-3"
                    value={invoiceAmount}
                    onChange={(e) => setInvoiceAmount(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="vatableAmount" className="block text-gray-700 font-bold mb-2">
                    Vatable Amount
                  </label>
                  <input
                    type="number"
                    id="vatableAmount"
                    name="vatableAmount"
                    className="border rounded w-full py-2 px-3"
                    value={vatableAmount}
                    onChange={(e) => setVatableAmount(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="vat" className="block text-gray-700 font-bold mb-2">
                    VAT
                  </label>
                  <input
                    type="number"
                    id="vat"
                    name="vat"
                    className="border rounded w-full py-2 px-3"
                    value={vat}
                    onChange={(e) => setVat(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="particular" className="block text-gray-700 font-bold mb-2">
                    Particular
                  </label>
                  <textarea
                    id="particular"
                    name="particular"
                    className="border rounded w-full py-2 px-3"
                    rows="2"
                    value={particular}
                    onChange={(e) => setParticular(e.target.value)}
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
                    Address of Supplier
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="border rounded w-full py-2 px-3"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </>
            )}

            {/* Income Form */}
            {transactionType === 'income' && (
              <div className="mb-4">
                <p className="text-gray-700">
                  Income-specific fields will go here (currently left empty as per your request).
                </p>
              </div>
            )}

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-full w-full"
              >
                Add Transaction
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddRawDataPage;
