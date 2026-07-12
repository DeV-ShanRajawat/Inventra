import React from 'react'

export default function Home() {
  const features = [
    {
      title: 'Track Stock',
      text: 'Monitor item availability and keep inventory movement easy to scan.',
      color: 'bg-[#f3f2ff] text-[#7367f0] border-[#dedbff]',
    },
    {
      title: 'Manage Orders',
      text: 'Organize incoming and outgoing orders from one clean workspace.',
      color: 'bg-[#e9fbff] text-[#00bad1] border-[#c8f4fb]',
    },
    {
      title: 'Quick Reports',
      text: 'Get a simple overview of activity, suppliers, and stock health.',
      color: 'bg-[#fff8e6] text-[#ff9f43] border-[#ffe7b8]',
    },
  ];

  return (
    <div className="mx-auto flex w-full max-w-none flex-col items-stretch px-0 py-4 sm:py-6 lg:py-8">
      <section
        id="Herosection"
        className="w-full rounded-2xl border border-[#dbdade] bg-gradient-to-br from-white via-white to-[#f3f2ff] p-[clamp(1.5rem,4vw,4rem)] text-center shadow-[0_4px_18px_rgba(47,43,61,0.08)]"
      >
        <div className="mb-5 inline-flex rounded-full border border-[#dedbff] bg-[#f3f2ff] px-4 py-2 text-sm font-medium text-[#7367f0]">
          Modern inventory dashboard
        </div>

        <h1 className="mx-auto max-w-5xl text-[clamp(2rem,3.4vw,4.5rem)] font-bold leading-tight text-[#2f2b3d]">
          The Inventory Management System{' '}
          <span className="text-[#7367f0]">by Inventra</span>
        </h1>

        <h2 className="mt-4 text-[clamp(1.05rem,1vw+0.8rem,1.6rem)] font-medium text-[#6f6b7d]">
          Your one-stop solution for inventory management
        </h2>

        <p className="mx-auto mt-5 max-w-4xl text-[clamp(0.98rem,0.45vw+0.85rem,1.18rem)] leading-relaxed text-[#6f6b7d]">
          Inventra helps businesses track inventory, manage products,
          monitor stock levels, and simplify operations with a modern dashboard.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-4">
          <button className="rounded-xl bg-[#7367f0] px-5 py-2.5 text-white shadow-[0_4px_14px_rgba(115,103,240,0.35)] transition-all duration-300 hover:bg-[#655bd3]">
            Get Started
          </button>

          <button className="rounded-xl border border-[#dbdade] bg-white px-5 py-2.5 text-[#6f6b7d] transition-all duration-300 hover:border-[#7367f0] hover:text-[#7367f0]">
            Learn More
          </button>
        </div>
      </section>

      <section className="mt-8 grid w-full gap-5 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-[#dbdade] bg-white p-5 shadow-[0_4px_18px_rgba(47,43,61,0.06)]"
          >
            <div className={`mb-4 inline-flex rounded-xl border px-3 py-2 text-sm font-semibold ${feature.color}`}>
              {feature.title}
            </div>
            <p className="text-sm leading-relaxed text-[#6f6b7d]">{feature.text}</p>
          </div>
        ))}
      </section>

      <section className="mt-6 grid w-full gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-[#dbdade] bg-white p-6 shadow-[0_4px_18px_rgba(47,43,61,0.06)]">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#a5a3ae]">
            Workflow
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-[#2f2b3d]">
            Keep daily inventory work organized
          </h3>
          <p className="mt-3 leading-relaxed text-[#6f6b7d]">
            Use Inventra to keep products, orders, stock updates, and supplier
            details in one place with a dashboard that stays simple and easy to read.
          </p>
        </div>

        <div className="rounded-2xl border border-[#dbdade] bg-[#f8f7fa] p-6 shadow-[0_4px_18px_rgba(47,43,61,0.06)]">
          <p className="text-sm font-semibold text-[#7367f0]">Today</p>
          <ul className="mt-4 space-y-3 text-sm text-[#6f6b7d]">
            <li className="rounded-xl bg-white px-4 py-3">Review low stock items</li>
            <li className="rounded-xl bg-white px-4 py-3">Update product quantities</li>
            <li className="rounded-xl bg-white px-4 py-3">Check supplier activity</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
