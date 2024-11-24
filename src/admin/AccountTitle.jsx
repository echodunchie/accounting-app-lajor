import React, { useState } from 'react';

const AccountTitlePage = () => {
  const [accountTitles, setAccountTitles] = useState([
    "Fuel",
    "Oil",
    "Salaries",
    "Utilities",
  ]);
  const [newAccountTitle, setNewAccountTitle] = useState('');

  // Handle adding a new account title
  const handleAddTitle = (e) => {
    e.preventDefault();
    if (newAccountTitle.trim()) {
      setAccountTitles([...accountTitles, newAccountTitle.trim()]);
      setNewAccountTitle('');
    } else {
      alert("Please enter a valid title.");
    }
  };

  // Handle editing an account title
  const handleEditTitle = (index, newTitle) => {
    const updatedTitles = accountTitles.map((title, idx) =>
      idx === index ? newTitle : title
    );
    setAccountTitles(updatedTitles);
  };

  // Handle deleting an account title
  const handleDeleteTitle = (index) => {
    const updatedTitles = accountTitles.filter((_, idx) => idx !== index);
    setAccountTitles(updatedTitles);
  };

  return (
    <section className="bg-slate-50 py-24">
      <div className="flex justify-center">
        <div className="container max-w-2xl px-6 py-8 bg-white shadow-md rounded-md border m-4">
          <h2 className="text-3xl font-semibold mb-6 text-center">Account Titles</h2>

          {/* Add Account Title Form */}
          <form onSubmit={handleAddTitle} className="mb-6">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Enter Account Title"
                value={newAccountTitle}
                onChange={(e) => setNewAccountTitle(e.target.value)}
                className="border rounded w-full py-2 px-3"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-full w-full"
            >
              Add Account Title
            </button>
          </form>

          {/* Account Titles List */}
          <h3 className="text-xl font-semibold mb-4">List of Account Titles</h3>
          <ul>
            {accountTitles.map((title, index) => (
              <li key={index} className="flex items-center justify-between bg-gray-100 rounded-lg py-2 px-4 mb-2">
                <span>{title}</span>

                <div className="flex items-center space-x-2">
                  <button
                    className="text-yellow-600 hover:text-yellow-800"
                    onClick={() => {
                      const newTitle = prompt("Edit Account Title:", title);
                      if (newTitle && newTitle.trim() !== "") {
                        handleEditTitle(index, newTitle);
                      }
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDeleteTitle(index)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Horizontal Divider */}
          <div className="border-t my-6"></div>
        </div>
      </div>
    </section>
  );
};

export default AccountTitlePage;
