import React, {useState, useEffect} from 'react'
import Dashboard from './Dashboard.jsx'
import Orders from './Orders.jsx'
import Quantity from './Quantity.jsx'
import Product from './Product.jsx'
import Category from './Category.jsx'
import {Routes,Route} from 'react-router-dom'
import { UserRound } from 'lucide-react'

export default function Admin() {

 let[product,setProduct] = useState([]);
 let [categories, setCategories] = useState([]);
 let[orders,setOrders] = useState([]);
 
 
  async function getProducts() {
    let response = await fetch("http://localhost:5500/products");

    let result = await response.json();

    setProduct(result.data);
  }

async function getCategories() {
  let response = await fetch("http://localhost:5500/categories");

  let result = await response.json();

  setCategories(result.data);
}

useEffect(() => {

  getProducts();

  getCategories();

}, []);

  return (
    <div className="min-h-full bg-[#f8f7fa] text-[#2f2b3d]">
      <div
        id="topbar"
        className="mb-5 flex items-center justify-between rounded-2xl border border-[#dbdade] bg-white px-5 py-4 shadow-[0_8px_24px_rgba(47,43,61,0.08)]"
      >
        <span>
          <h2 className="text-2xl font-extrabold tracking-[0.08em] text-[#7367f0]">
            Inventra
          </h2>
          <p className="mt-1 text-sm font-medium text-[#6f6b7d]">
            Admin Dashboard
          </p>
        </span>
        <span>
          <button className="flex items-center gap-2 rounded-xl bg-[#7367f0] px-4 py-2 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(115,103,240,0.35)] transition-all duration-300 hover:bg-[#675dd8] hover:shadow-[0_8px_20px_rgba(115,103,240,0.32)]">
            <UserRound size={17} />
            Account
          </button>
        </span>
      </div>

      <div
        id="adminCont"
        className="min-h-[28rem] rounded-2xl border border-[#dbdade] bg-white p-4 shadow-[0_8px_24px_rgba(47,43,61,0.08)] sm:p-5"
      >
        <div className="displannel min-h-[25rem] rounded-2xl border border-[#dbdade]/70 bg-[#f8f7fa] p-4 shadow-inner sm:p-5">
          <Routes>
            <Route
              index
              element={<Dashboard product={product} orders={orders} />}
            />
            <Route
              path="dashboard"
              element={<Dashboard product={product} orders={orders} />}
            />
            <Route
              path="product"
              element={
                <Product
                  product={product}
                  setProduct={setProduct}
                  categories={categories}
                  getProducts={getProducts}
                />
              }
            />
            <Route
              path="category"
              element={
                <Category
                  categories={categories}
                  setCategories={setCategories}
                  getCategories={getCategories}
                />
              }
            />
            <Route
              path="orders"
              element={<Orders orders={orders} setOrders={setOrders} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}
