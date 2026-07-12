import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function Product({ product, setProduct,categories,getProducts }) {
  const [editProduct, setEditProduct] = useState({
  name: "",
  poster: "",
  price: "",
  category: "",
});
  console.log(editProduct);

  function handleEdit(product) {
  console.log(product);
  setEditProduct(product);

}

async function handleDelete(id) {

   await fetch(`http://localhost:5500/products/${id}`, {

    method: "DELETE",

});

await getProducts();

}

async function handleSubmit(e) {
  e.preventDefault();

  if (editProduct._id) {

    await fetch(`http://localhost:5500/products/${editProduct._id}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(editProduct),
});

await getProducts();

setEditProduct({
  name: "",
  poster: "",
  price: "",
  category: "",
});

  } else {

    let data = {
      name: e.target[0].value,
      poster: e.target[1].value,
      price: e.target[2].value,
      category: e.target[3].value,
    };

    await fetch("http://localhost:5500/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    await getProducts();
  }
}

  return (
    <div className="space-y-5">
      <div
        id="Productheader"
        className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#dbdade] bg-white px-5 py-4 shadow-[0_8px_24px_rgba(47,43,61,0.08)]"
      >
        <div>
          <h2 className="text-xl font-extrabold tracking-[0.02em] text-[#2f2b3d]">
            Product Management
          </h2>
          <p className="mt-1 text-sm font-medium text-[#6f6b7d]">
            Add and review inventory products
          </p>
        </div>
        <span className="rounded-xl bg-[#7367f0]/10 px-3 py-1.5 text-sm font-bold text-[#7367f0]">
          {product.length} Products
        </span>
      </div>
      <div className="grid overflow-hidden rounded-2xl border border-[#dbdade] bg-white shadow-[0_8px_24px_rgba(47,43,61,0.08)] lg:grid-cols-[16rem_minmax(0,1fr)]">
        <div
          id="productForm"
          className="border-b border-[#dbdade] bg-white p-5 lg:border-b-0 lg:border-r"
        >
          <div className="mb-5">
            <h3 className="text-base font-bold text-[#2f2b3d]">Add Product</h3>
            <p className="mt-1 text-sm font-medium text-[#6f6b7d]">
              Fill product details
            </p>
          </div>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <label className="flex flex-col gap-2 text-sm font-semibold text-[#5d596c]">
              <span className="text-xs uppercase tracking-[0.08em] text-[#6f6b7d]">
                Product Name
              </span>
              <input
                className="min-h-11 rounded-xl border border-[#dbdade] bg-white px-4 py-2.5 text-sm font-medium text-[#2f2b3d] outline-none transition-all duration-300 placeholder:text-[#a5a3ae] focus:border-[#7367f0] focus:shadow-[0_0_0_3px_rgba(115,103,240,0.14)]"
                type="text"
                 value={editProduct.name}
                 onChange={(e) =>
                 setEditProduct({
                    ...editProduct,
                name: e.target.value,
                            })
                        }
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-[#5d596c]">
              <span className="text-xs uppercase tracking-[0.08em] text-[#6f6b7d]">
                Poster URL
              </span>
              <input
                className="min-h-11 rounded-xl border border-[#dbdade] bg-white px-4 py-2.5 text-sm font-medium text-[#2f2b3d] outline-none transition-all duration-300 placeholder:text-[#a5a3ae] focus:border-[#7367f0] focus:shadow-[0_0_0_3px_rgba(115,103,240,0.14)]"
                type="text"
                 value={editProduct.poster || ""}
                onChange={(e) =>
                setEditProduct({
                ...editProduct,
                poster: e.target.value,
                })
                    }
               
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-[#5d596c]">
              <span className="text-xs uppercase tracking-[0.08em] text-[#6f6b7d]">
                Price
              </span>
              <input
                className="min-h-11 rounded-xl border border-[#dbdade] bg-white px-4 py-2.5 text-sm font-medium text-[#2f2b3d] outline-none transition-all duration-300 placeholder:text-[#a5a3ae] focus:border-[#7367f0] focus:shadow-[0_0_0_3px_rgba(115,103,240,0.14)]"
                type="number"
                  value={editProduct.price || ""}
                  onChange={(e) =>
                  setEditProduct({
                 ...editProduct,
               price: e.target.value,
                 })
                   }
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-[#5d596c]">
              <span className="text-xs uppercase tracking-[0.08em] text-[#6f6b7d]">
                Category
              </span>
              <div className="relative">
                <select 
                 value={editProduct.category || ""}
                 onChange={(e) =>
                 setEditProduct({
                ...editProduct,
                 category: e.target.value,
                  })
                    }
                className="min-h-11 w-full appearance-none rounded-xl border border-[#dbdade]/70 bg-white/35 px-4 py-2.5 pr-11 text-sm font-semibold text-[#2f2b3d] shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] outline-none backdrop-blur-md transition-all duration-300 hover:border-[#7367f0]/45 hover:bg-white/55 focus:border-[#7367f0] focus:bg-white/70 focus:shadow-[0_0_0_3px_rgba(115,103,240,0.14),inset_0_1px_0_rgba(255,255,255,0.8)]">
                {
                categories.map((category, index)=>(
                  <option key={index} value={category.name}>
                    {category.name}
                  </option>
                ))}
                </select>
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

            <button className="min-h-11 rounded-xl bg-[#7367f0] px-4 py-2.5 text-sm font-bold text-white shadow-[0_4px_14px_rgba(115,103,240,0.35)] transition-all duration-300 hover:bg-[#675dd8] hover:shadow-[0_8px_20px_rgba(115,103,240,0.32)]">
               {editProduct._id ? "Update Product" : "Add Product"}
            </button>
          </form>
        </div>

        <div id="productList" className="min-w-0 overflow-hidden bg-white">
          <div className="flex items-center justify-between border-b border-[#dbdade] px-5 py-4">
            <h3 className="text-base font-bold text-[#2f2b3d]">Product List</h3>
            <span className="text-sm font-medium text-[#6f6b7d]">
              Inventory overview
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-[#f8f7fa] text-xs uppercase tracking-[0.08em] text-[#6f6b7d]">
                  <th className="px-3 py-3 font-bold">Name</th>
                  <th className="px-3 py-3 font-bold">Poster</th>
                  <th className="px-3 py-3 font-bold">Price</th>
                  <th className="px-3 py-3 font-bold">Category</th>
                  <th className="px-3 py-3 font-bold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {product.map((prod, index) => (
                  <tr
                    className="border-t border-[#dbdade] text-[#2f2b3d] transition-colors duration-300 hover:bg-[#f8f7fa]"
                    key={index}
                  >
                    <td className="px-3 py-4 font-semibold">{prod.name}</td>
                    <td className="px-3 py-4">
                      <img
                        className="h-10 w-10 rounded-xl border border-[#dbdade] object-cover shadow-sm"
                        src={prod.poster}
                        alt={prod.name}
                        width="50"
                      />
                    </td>
                    <td className="px-3 py-4 font-bold text-[#7367f0]">
                      ₹{Number(prod.price).toLocaleString("en-IN")}
                    </td>
                    <td className="px-3 py-4">
                      <span className="rounded-lg bg-[#7367f0]/10 px-2.5 py-1 text-xs font-bold text-[#7367f0]">
                        {prod.category}
                      </span>
                    </td>
                    <td className="space-x-1 px-3 py-4">
                      <button  
                      onClick={()=>handleEdit(prod)}
                      className="rounded-lg border border-[#7367f0]/30 bg-white px-2.5 py-1.5 text-xs font-bold text-[#7367f0] transition-all duration-300 hover:bg-[#7367f0]/10">
                        Edit
                      </button>
                      <button 
                      onClick={() => handleDelete(prod._id)}
                      className="rounded-lg border border-red-200 bg-white px-2.5 py-1.5 text-xs font-bold text-red-500 transition-all duration-300 hover:bg-red-50">
                        Delete
                      </button>
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
