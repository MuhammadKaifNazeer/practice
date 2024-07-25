import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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

interface InvoiceProps {
  details: InvoiceDetails;
}

const Invoice: React.FC<InvoiceProps> = ({ details }) => {
  const invoiceRef = useRef<HTMLDivElement>(null);

  const downloadAsPNG = () => {
    if (invoiceRef.current) {
      html2canvas(invoiceRef.current).then((canvas) => {
        const link = document.createElement("a");
        link.download = "invoice.png";
        link.href = canvas.toDataURL();
        link.click();
      });
    }
  };

  const printInvoice = () => {
    if (invoiceRef.current) {
      const printContents = invoiceRef.current.innerHTML;
      const originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
      window.location.reload();
    }
  };

  return (
    <div className="mt-8">
      <div
        ref={invoiceRef}
        className="bg-white p-8 rounded-lg shadow-md border border-gray-300"
      >
        <h2 className="text-2xl font-bold mb-4">Invoice</h2>
        <p className="mb-2">
          <span className="font-bold">Invoice Number:</span>{" "}
          {details.invoiceNumber}
        </p>
        <p className="mb-2">
          <span className="font-bold">Date:</span> {details.date}
        </p>
        <p className="mb-2">
          <span className="font-bold">Client Name:</span> {details.clientName}
        </p>
        <p className="mb-2">
          <span className="font-bold">Client Address:</span>{" "}
          {details.clientAddress}
        </p>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Quantity</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {details.items.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{item.description}</td>
                <td className="border px-4 py-2">{item.quantity}</td>
                <td className="border px-4 py-2">{item.price}</td>
                <td className="border px-4 py-2">
                  {item.quantity * item.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex space-x-4 mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
          onClick={downloadAsPNG}
        >
          Download as PNG
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600"
          onClick={printInvoice}
        >
          Print Invoice
        </button>
      </div>
    </div>
  );
};

export default Invoice;
