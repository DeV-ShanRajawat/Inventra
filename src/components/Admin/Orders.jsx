import React from "react";
import "react-tabs/style/react-tabs.css";

export default function Orders({ orders, setOrders }) {
  function handleSubmit(e) {
    e.preventDefault();
    let data = {
      customerName: e.target[0].value,
      productName: e.target[1].value,
      Quantity: e.target[2].value,
      orderdate: e.target[3].value,
    };
    setOrders([...orders, data]);
    
    e.target.reset();
  }
  return (
    <div className="space-y-5">
      <div
        id="ordersheader"
        className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#dbdade]/80 bg-white/90 px-5 py-4 shadow-[0_8px_24px_rgba(47,43,61,0.08)] backdrop-blur"
      >
        <div>
          <h2 className="text-xl font-extrabold tracking-[0.02em] text-[#2f2b3d]">
            Orders Management
          </h2>
          <p className="mt-1 text-sm font-medium text-[#6f6b7d]">
            Add and review inventory orders
          </p>
        </div>
        <span className="rounded-xl bg-[#7367f0]/10 px-3 py-1.5 text-sm font-bold text-[#7367f0]">
          {orders.length} Orders
        </span>
      </div>
      <div className="grid overflow-hidden rounded-2xl border border-[#dbdade]/80 bg-white shadow-[0_8px_24px_rgba(47,43,61,0.08)] lg:grid-cols-[20rem_minmax(0,1fr)] xl:grid-cols-[22rem_minmax(0,1fr)]">
        <div
          id="ordersForm"
          className="border-b border-[#dbdade] bg-white/80 p-5 lg:border-b-0 lg:border-r"
        >
          <div className="mb-5">
            <h3 className="text-base font-bold text-[#2f2b3d]">Add Orders</h3>
            <p className="mt-1 text-sm font-medium text-[#6f6b7d]">
              Fill Order details
            </p>
          </div>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <label className="flex flex-col gap-2 text-sm font-semibold text-[#5d596c]">
              <span className="text-xs uppercase tracking-[0.08em] text-[#6f6b7d]">
                Customer Name
              </span>
              <input
                className="min-h-11 rounded-xl border border-[#dbdade]/80 bg-white/70 px-4 py-2.5 text-sm font-medium text-[#2f2b3d] outline-none transition-all duration-300 placeholder:text-[#a5a3ae] hover:border-[#7367f0]/40 focus:border-[#7367f0] focus:bg-white focus:shadow-[0_0_0_3px_rgba(115,103,240,0.14)]"
                type="text"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-[#5d596c]">
              <span className="text-xs uppercase tracking-[0.08em] text-[#6f6b7d]">
                Product Name
              </span>
              <input
                className="min-h-11 rounded-xl border border-[#dbdade]/80 bg-white/70 px-4 py-2.5 text-sm font-medium text-[#2f2b3d] outline-none transition-all duration-300 placeholder:text-[#a5a3ae] hover:border-[#7367f0]/40 focus:border-[#7367f0] focus:bg-white focus:shadow-[0_0_0_3px_rgba(115,103,240,0.14)]"
                type="text"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-[#5d596c]">
              <span className="text-xs uppercase tracking-[0.08em] text-[#6f6b7d]">
                Quantity
              </span>
              <input
                className="min-h-11 rounded-xl border border-[#dbdade]/80 bg-white/70 px-4 py-2.5 text-sm font-medium text-[#2f2b3d] outline-none transition-all duration-300 placeholder:text-[#a5a3ae] hover:border-[#7367f0]/40 focus:border-[#7367f0] focus:bg-white focus:shadow-[0_0_0_3px_rgba(115,103,240,0.14)]"
                type="number"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-[#5d596c]">
              <span className="text-xs uppercase tracking-[0.08em] text-[#6f6b7d]">
                Date
              </span>
              <div className="relative">
               <input
                className="min-h-11 w-full rounded-xl border border-[#dbdade]/80 bg-white/70 px-4 py-2.5 pr-11 text-sm font-medium text-[#2f2b3d] outline-none transition-all duration-300 placeholder:text-[#a5a3ae] hover:border-[#7367f0]/40 focus:border-[#7367f0] focus:bg-white focus:shadow-[0_0_0_3px_rgba(115,103,240,0.14)]"
                type="date"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 grid h-6 w-6 -translate-y-1/2 place-items-center rounded-lg bg-[#7367f0]/10 text-[#7367f0]">
                  <svg
                    className="h-4 w-4"
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </label>

            <button className="min-h-11 rounded-xl bg-[#7367f0] px-4 py-2.5 text-sm font-bold text-white shadow-[0_4px_14px_rgba(115,103,240,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#675dd8] hover:shadow-[0_8px_20px_rgba(115,103,240,0.32)]">
              Add this order
            </button>
          </form>
        </div>

        <div id="ordersList" className="min-w-0 overflow-hidden bg-white">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#dbdade] px-5 py-4">
            <h3 className="text-base font-bold text-[#2f2b3d]">Orders List</h3>
            <span className="text-sm font-medium text-[#6f6b7d]">
              Inventory overview
            </span>
          </div>
          <div className="overflow-hidden">
            <table className="w-full table-fixed border-collapse text-left text-sm">
              <thead>
                <tr className="bg-[#f8f7fa] text-xs uppercase tracking-[0.08em] text-[#6f6b7d]">
                  <th className="w-[22%] px-3 py-3 font-bold">Customer Name</th>
                  <th className="w-[22%] px-3 py-3 font-bold">Product Name</th>
                  <th className="w-[13%] px-3 py-3 font-bold">Quantity</th>
                  <th className="w-[17%] px-3 py-3 font-bold">Order Date</th>
                  <th className="w-[26%] px-3 py-3 font-bold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr
                    className="border-t border-[#dbdade] text-[#2f2b3d] transition-colors duration-300 hover:bg-[#f8f7fa]"
                    key={index}
                  >
                    <td className="truncate px-3 py-4 font-semibold">{order.customerName}</td>
                    <td className="truncate px-3 py-4 font-medium text-[#5d596c]">
                      {order.productName}
                    </td>
                    <td className="px-3 py-4">
                      <span className="rounded-lg bg-[#7367f0]/10 px-2.5 py-1 text-xs font-bold text-[#7367f0]">
                        {order.Quantity}
                      </span>
                    </td>
                    <td className="px-3 py-4">
                      <span className="rounded-lg bg-[#f8f7fa] px-2.5 py-1 text-xs font-bold text-[#5d596c]">
                        {order.orderdate}
                      </span>
                    </td >
                    <td className="px-3 py-4">
                      <div className="flex flex-nowrap items-center gap-1.5">
                      <button className="rounded-lg border border-[#7367f0]/30 bg-white px-2.5 py-1.5 text-xs font-bold text-[#7367f0] transition-all duration-300 hover:bg-[#7367f0]/10">
                        Edit
                      </button>
                      <button className="rounded-lg border border-red-200 bg-white px-2.5 py-1.5 text-xs font-bold text-red-500 transition-all duration-300 hover:bg-red-50">
                        Delete
                      </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

