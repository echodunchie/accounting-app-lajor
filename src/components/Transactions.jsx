import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';

const Transactions = ({ isHome = false }) => {
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isTable, setTable] = useState(true);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });

  useEffect(() => {
    const fetchjobs = async () => {
      setLoading(true);
      try {
        // Fetch Expenses and Incomes from the respective endpoints
        const expensesRes = await fetch('/api/expenses');
        const expensesData = await expensesRes.json();
        setExpenses(expensesData);

        const incomesRes = await fetch('/api/incomes');
        const incomesData = await incomesRes.json();
        setIncomes(incomesData);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchjobs();
  }, []);

  const sortedjobs = (transactions, sortKey) => {
    let sortable = [...transactions];
    if (sortKey !== '') {
      sortable.sort((a, b) => {
        if (a[sortKey] < b[sortKey]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortKey] > b[sortKey]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortable;
  };

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortArrow = (key) => {
    if (sortConfig.key !== key) {
      return '';
    }
    return sortConfig.direction === 'ascending' ? ' ↑' : ' ↓';
  };

  // Calculate the total net income (sum of all income amounts)
  const calculateTotalNetIncome = () => {
    return incomes.reduce((total, income) => total + income.amount, 0).toFixed(2);
  };

  return (
    <section className='bg-slate-50 px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-slate-500 mb-6 text-center'>
          {isHome ? 'Recent transactions' : 'Browse transactions'}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className='grid grid-cols-1 gap-6'>
            {/* Income Table */}
            <h3 className="text-2xl font-bold text-slate-500 mb-4 text-center">Income transactions</h3>
            {incomes.length > 0 ? (
              <table className="table-auto w-full border-collapse border border-gray-300 mb-8">
                <thead>
                  <tr className="bg-slate-500 text-white">
                    <th onClick={() => requestSort('transactionType')} className="border border-gray-300 px-4 py-2 cursor-pointer">
                      Income Type {getSortArrow('transactionType')}
                    </th>
                    <th onClick={() => requestSort('accountTitle')} className="border border-gray-300 px-4 py-2 cursor-pointer">
                      Account Title {getSortArrow('accountTitle')}
                    </th>
                    <th onClick={() => requestSort('date')} className="border border-gray-300 px-4 py-2 cursor-pointer">
                      Date {getSortArrow('date')}
                    </th>
                    <th onClick={() => requestSort('amount')} className="border border-gray-300 px-4 py-2 cursor-pointer">
                      Amount {getSortArrow('amount')}
                    </th>
                    <th className="border border-gray-300 px-4 py-2">Description</th>
                    <th className="border border-gray-300 px-4 py-2">Source</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedjobs(incomes, sortConfig.key).map((income) => (
                    <tr key={income.id} className="hover:bg-gray-100">
                      <td className="border border-gray-300 px-4 py-2">{income.transactionType}</td>
                      <td className="border border-gray-300 px-4 py-2">{income.accountTitle}</td>
                      <td className="border border-gray-300 px-4 py-2">{income.date}</td>
                      <td className="border border-gray-300 px-4 py-2">{income.amount}</td>
                      <td className="border border-gray-300 px-4 py-2">{income.description}</td>
                      <td className="border border-gray-300 px-4 py-2">{income.source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-center text-gray-500">No Income Data Available</p>
            )}

            {/* Expense Table */}
            <h3 className="text-2xl font-bold text-slate-500 mb-4 text-center">Expense transactions</h3>
            {expenses.length > 0 ? (
              <table className="table-auto w-full border-collapse border border-gray-300 mb-8">
                <thead>
                  <tr className="bg-slate-500 text-white">
                    <th onClick={() => requestSort('transactionType')} className="border border-gray-300 px-4 py-2 cursor-pointer">
                      Expense Type {getSortArrow('transactionType')}
                    </th>
                    <th onClick={() => requestSort('accountTitle')} className="border border-gray-300 px-4 py-2 cursor-pointer">
                      Account Title {getSortArrow('accountTitle')}
                    </th>
                    <th onClick={() => requestSort('date')} className="border border-gray-300 px-4 py-2 cursor-pointer">
                      Date {getSortArrow('date')}
                    </th>
                    <th onClick={() => requestSort('amount')} className="border border-gray-300 px-4 py-2 cursor-pointer">
                      Amount {getSortArrow('amount')}
                    </th>
                    <th className="border border-gray-300 px-4 py-2">Description</th>
                    <th className="border border-gray-300 px-4 py-2">Supplier's Name</th>
                    <th className="border border-gray-300 px-4 py-2">Payee's Name</th>
                    <th className="border border-gray-300 px-4 py-2">Check Number</th>
                    <th className="border border-gray-300 px-4 py-2">TIN of Supplier</th>
                    <th className="border border-gray-300 px-4 py-2">Invoice Amount</th>
                    <th className="border border-gray-300 px-4 py-2">Vatable Amount</th>
                    <th className="border border-gray-300 px-4 py-2">VAT</th>
                    <th className="border border-gray-300 px-4 py-2">Particular</th>
                    <th className="border border-gray-300 px-4 py-2">Address of Supplier</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedjobs(expenses, sortConfig.key).map((expense) => (
                    <tr key={expense.id} className="hover:bg-gray-100">
                      <td className="border border-gray-300 px-4 py-2">{expense.transactionType}</td>
                      <td className="border border-gray-300 px-4 py-2">{expense.accountTitle}</td>
                      <td className="border border-gray-300 px-4 py-2">{expense.date}</td>
                      <td className="border border-gray-300 px-4 py-2">{expense.amount}</td>
                      <td className="border border-gray-300 px-4 py-2">{expense.description}</td>
                      <td className="border border-gray-300 px-4 py-2">{expense.supplierName}</td>
                      <td className="border border-gray-300 px-4 py-2">{expense.payeeName}</td>
                      <td className="border border-gray-300 px-4 py-2">{expense.checkNumber}</td>
                      <td className="border border-gray-300 px-4 py-2">{expense.tinOfSupplier}</td>
                      <td className="border border-gray-300 px-4 py-2">{expense.invoiceAmount}</td>
                      <td className="border border-gray-300 px-4 py-2">{expense.vatableAmount}</td>
                      <td className="border border-gray-300 px-4 py-2">{expense.vat}</td>
                      <td className="border border-gray-300 px-4 py-2">{expense.particular}</td>
                      <td className="border border-gray-300 px-4 py-2">{expense.addressOfSupplier}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-center text-gray-500">No Expense Data Available</p>
            )}

            {/* Total Net Income */}
            <div className="mt-8 text-center font-bold text-xl">
              <h4>Total Net Income: ₱{calculateTotalNetIncome()}</h4>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Transactions;
