import React from 'react';

const ExpenseForm = ({
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
    address,
    setAddress,
}) => {
    return (
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
    );
};

export default ExpenseForm;
