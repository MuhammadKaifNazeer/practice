"use client";

import { useState } from "react";
import Invoice from "./Invoice/Invoice";

interface Item {
  description: string;
  quantity: number;
  price: number;
}

interface InvoiceDetails {
  invoiceNumber: string;
  date: string;
  clientName: string;
  clientAddress: string;
  items: Item[];
}

export default function InvoiceGenerator() {
  const [details, setDetails] = useState<InvoiceDetails>({
    invoiceNumber: "",
    date: "",
    clientName: "",
    clientAddress: "",
    items: [{ description: "", quantity: 0, price: 0 }],
  });
  const [showInvoice, setShowInvoice] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleItemChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    const items = [...details.items];
    items[index][name as keyof Item] = value;
    setDetails((prev) => ({ ...prev, items }));
  };

  const addItem = () => {
    setDetails((prev) => ({
      ...prev,
      items: [...prev.items, { description: "", quantity: 0, price: 0 }],
    }));
  };

  const generateInvoice = () => {
    setShowInvoice(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Invoice Generator</h1>
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Invoice Number
          </label>
          <input
            className="w-full px-3 py-2 border rounded"
            type="text"
            name="invoiceNumber"
            value={details.invoiceNumber}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Date</label>
          <input
            className="w-full px-3 py-2 border rounded"
            type="date"
            name="date"
            value={details.date}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Client Name
          </label>
          <input
            className="w-full px-3 py-2 border rounded"
            type="text"
            name="clientName"
            value={details.clientName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Client Address
          </label>
          <input
            className="w-full px-3 py-2 border rounded"
            type="text"
            name="clientAddress"
            value={details.clientAddress}
            onChange={handleChange}
          />
        </div>
        {details.items.map((item, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Description
            </label>
            <input
              className="w-full px-3 py-2 border rounded mb-2"
              type="text"
              name="description"
              value={item.description}
              onChange={(e) => handleItemChange(index, e)}
            />
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-gray-700 font-bold mb-2">
                  Quantity
                </label>
                <input
                  className="w-full px-3 py-2 border rounded"
                  type="number"
                  name="quantity"
                  value={item.quantity}
                  onChange={(e) => handleItemChange(index, e)}
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700 font-bold mb-2">
                  Price
                </label>
                <input
                  className="w-full px-3 py-2 border rounded"
                  type="number"
                  name="price"
                  value={item.price}
                  onChange={(e) => handleItemChange(index, e)}
                />
              </div>
            </div>
          </div>
        ))}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
          type="button"
          onClick={addItem}
        >
          Add Item
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600 ml-4"
          type="button"
          onClick={generateInvoice}
        >
          Generate Invoice
        </button>
      </form>
      {showInvoice && <Invoice details={details} />}
    </div>
  );
}
