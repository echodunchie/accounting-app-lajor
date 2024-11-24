import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ExpenseForm from './TransactionForms/ExpenseForm'
import IncomeForm from './TransactionForms/IncomeForm';

const AddTransactionPage = ({ addRawDataSubmit }) => {
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
  const [siReference, setSiReference] = useState('');
  const [withholdingTax, setWithholdingTax] = useState('');
  const [netIncome, setNetIncome] = useState('');
  const [invoice, setInvoice] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [companyName, setCompanyName] = useState('');

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const newTransactionData = {
      transactionType,
      accountTitle,
      date,
      amount,
      description,
      supplier: { name: supplierName, tin, address },
      payee: { name: payeeName },
      checkNumber,
      invoiceAmount,
      vatableAmount,
      vat,
      ...(transactionType === 'income' && {
        incomeDetails: {
          siReference,
          withholdingTax,
          netIncome,
          invoice,
          customerName,
          companyName,
        },
      }),
    };

    addTransactionDataSubmit(newTransactionData);
    toast.success('Raw Data Added Successfully');
    navigate('/transactions');
  };

  return (
    <section className="bg-slate-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Transaction</h2>

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

            <hr className="my-8 border-gray-300" />

            {transactionType === 'expense' && (
              <ExpenseForm
                {...{
                  accountTitle,
                  setAccountTitle,
                  date,
                  setDate,
                  amount,
                  setAmount,
                  description,
                  setDescription,
                  supplierName,
                  setSupplierName,
                  payeeName,
                  setPayeeName,
                  checkNumber,
                  setCheckNumber,
                  tin,
                  setTin,
                  invoiceAmount,
                  setInvoiceAmount,
                  vatableAmount,
                  setVatableAmount,
                  vat,
                  setVat,
                  particular,
                  setParticular,
                  address,
                  setAddress,
                }}
              />
            )}

            {transactionType === 'income' && (
              <IncomeForm
                {...{
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
                }}
              />
            )}

            <div>
              <button
                type="submit"
                className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-full w-full"
              >
                {transactionType === 'expense' ? 'Add Expense' : 'Add Income'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddTransactionPage;
