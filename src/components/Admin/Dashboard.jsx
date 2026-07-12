import React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Boxes,
  CircleDollarSign,
  ClipboardList,
  TrendingUp,
} from "lucide-react";

const salesData = [
  { name: "Jan", sales: 4200, orders: 32 },
  { name: "Feb", sales: 5100, orders: 38 },
  { name: "Mar", sales: 4600, orders: 35 },
  { name: "Apr", sales: 6800, orders: 49 },
  { name: "May", sales: 7400, orders: 56 },
  { name: "Jun", sales: 8900, orders: 64 },
  { name: "Jul", sales: 9600, orders: 71 },
];

const weeklyOrders = [
  { day: "Mon", orders: 24 },
  { day: "Tue", orders: 38 },
  { day: "Wed", orders: 30 },
  { day: "Thu", orders: 48 },
  { day: "Fri", orders: 42 },
  { day: "Sat", orders: 58 },
  { day: "Sun", orders: 35 },
];

const fallbackCategories = [
  { name: "Electronics", value: 38 },
  { name: "Accessories", value: 27 },
  { name: "Lifestyle", value: 21 },
  { name: "Other", value: 14 },
];

const chartColors = ["#7367f0", "#00bad1", "#ff9f43", "#ea5455"];

const tooltipStyle = {
  border: "1px solid #dbdade",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(47,43,61,0.12)",
  color: "#2f2b3d",
};

const formatINR = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

export default function Dashboard({ product = [], orders = [] }) {
  const inventoryValue = product.reduce(
    (total, item) => total + (Number(item.price) || 0),
    0,
  );

  const categoryTotals = product.reduce((totals, item) => {
    const category = item.category || "Other";
    totals[category] = (totals[category] || 0) + 1;
    return totals;
  }, {});

  const categoryData = Object.keys(categoryTotals).length
    ? Object.entries(categoryTotals).map(([name, value]) => ({ name, value }))
    : fallbackCategories;

  const stats = [
    {
      label: "Total Products",
      value: product.length,
      change: "+12.5%",
      caption: "from last month",
      icon: Boxes,
      iconClass: "bg-[#7367f0]/10 text-[#7367f0]",
    },
    {
      label: "Total Orders",
      value: orders.length,
      change: "+8.2%",
      caption: "from last month",
      icon: ClipboardList,
      iconClass: "bg-[#00bad1]/10 text-[#00bad1]",
    },
    {
      label: "Inventory Value",
      value: formatINR(inventoryValue),
      change: "+6.4%",
      caption: "current value",
      icon: CircleDollarSign,
      iconClass: "bg-[#ff9f43]/10 text-[#ff9f43]",
    },
    {
      label: "Growth Rate",
      value: "24.8%",
      change: "+4.1%",
      caption: "this quarter",
      icon: TrendingUp,
      iconClass: "bg-[#28c76f]/10 text-[#28c76f]",
    },
  ];

  return (
    <div className="space-y-5">
      <div className="relative overflow-hidden rounded-2xl border border-[#dbdade]/80 bg-gradient-to-br from-white via-white to-[#eeecff] px-5 py-5 shadow-[0_8px_24px_rgba(47,43,61,0.08)] sm:px-6">
        <div className="absolute -right-12 -top-16 h-44 w-44 rounded-full bg-[#7367f0]/10 blur-2xl" />
        <div className="relative flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="mb-2 inline-flex rounded-lg bg-[#7367f0]/10 px-2.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#7367f0]">
              Overview
            </span>
            <h2 className="text-2xl font-extrabold tracking-[0.01em] text-[#2f2b3d]">
              Welcome back to Inventra
            </h2>
            <p className="mt-1.5 text-sm font-medium text-[#6f6b7d]">
              Track inventory performance, orders, and business growth.
            </p>
          </div>
          <div className="rounded-xl border border-[#7367f0]/15 bg-white/80 px-4 py-3 text-right shadow-sm backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#a5a3ae]">
              Monthly Revenue
            </p>
            <p className="mt-1 text-2xl font-extrabold text-[#7367f0]">
              {formatINR(9600)}
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="group rounded-2xl border border-[#dbdade]/80 bg-white p-5 shadow-[0_8px_24px_rgba(47,43,61,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#7367f0]/25 hover:shadow-[0_12px_28px_rgba(47,43,61,0.1)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-[#6f6b7d]">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-2xl font-extrabold text-[#2f2b3d]">
                    {stat.value}
                  </p>
                </div>
                <span
                  className={`grid h-11 w-11 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${stat.iconClass}`}
                >
                  <Icon size={21} />
                </span>
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-xs">
                <span className="font-bold text-[#28c76f]">{stat.change}</span>
                <span className="font-medium text-[#a5a3ae]">
                  {stat.caption}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.65fr)_minmax(18rem,0.85fr)]">
        <section className="min-w-0 rounded-2xl border border-[#dbdade]/80 bg-white p-5 shadow-[0_8px_24px_rgba(47,43,61,0.08)]">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-[#2f2b3d]">
                Revenue Overview
              </h3>
              <p className="mt-1 text-sm font-medium text-[#6f6b7d]">
                Monthly sales performance
              </p>
            </div>
            <span className="rounded-lg bg-[#28c76f]/10 px-2.5 py-1 text-xs font-bold text-[#28c76f]">
              +18.4% growth
            </span>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesData}>
                <defs>
                  <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7367f0" stopOpacity={0.32} />
                    <stop offset="95%" stopColor="#7367f0" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  stroke="#eceaf0"
                  strokeDasharray="4 4"
                  vertical={false}
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6f6b7d", fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6f6b7d", fontSize: 12 }}
                  tickFormatter={(value) => `₹${value / 1000}k`}
                />
                <Tooltip
                  contentStyle={tooltipStyle}
                  formatter={(value) => [formatINR(value), "Sales"]}
                />
                <Area
                  type="monotone"
                  dataKey="sales"
                  stroke="#7367f0"
                  strokeWidth={3}
                  fill="url(#salesGradient)"
                  activeDot={{ r: 6, fill: "#7367f0", stroke: "#fff", strokeWidth: 3 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="rounded-2xl border border-[#dbdade]/80 bg-white p-5 shadow-[0_8px_24px_rgba(47,43,61,0.08)]">
          <div>
            <h3 className="text-base font-bold text-[#2f2b3d]">
              Product Categories
            </h3>
            <p className="mt-1 text-sm font-medium text-[#6f6b7d]">
              Inventory distribution
            </p>
          </div>

          <div className="h-52 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip contentStyle={tooltipStyle} />
                <Pie
                  data={categoryData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={82}
                  paddingAngle={4}
                  stroke="none"
                >
                  {categoryData.map((entry, index) => (
                    <Cell
                      key={entry.name}
                      fill={chartColors[index % chartColors.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {categoryData.slice(0, 4).map((category, index) => (
              <div
                key={category.name}
                className="flex min-w-0 items-center gap-2 rounded-lg bg-[#f8f7fa] px-2.5 py-2"
              >
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{
                    backgroundColor: chartColors[index % chartColors.length],
                  }}
                />
                <span className="truncate text-xs font-semibold text-[#5d596c]">
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="rounded-2xl border border-[#dbdade]/80 bg-white p-5 shadow-[0_8px_24px_rgba(47,43,61,0.08)]">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-bold text-[#2f2b3d]">
              Weekly Orders
            </h3>
            <p className="mt-1 text-sm font-medium text-[#6f6b7d]">
              Order activity across the last seven days
            </p>
          </div>
          <p className="text-sm font-bold text-[#7367f0]">275 total orders</p>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyOrders} barCategoryGap="28%">
              <CartesianGrid
                stroke="#eceaf0"
                strokeDasharray="4 4"
                vertical={false}
              />
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6f6b7d", fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6f6b7d", fontSize: 12 }}
              />
              <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "#f3f2ff" }} />
              <Bar
                dataKey="orders"
                name="Orders"
                fill="#7367f0"
                radius={[8, 8, 2, 2]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
}
