import React from "react";

export default function Category({ categories, setCategories, getCategories }) {
  async function handleSubmit(e) {
    e.preventDefault();

    let data = {
      name: e.target[0].value,
    };

    await fetch("http://localhost:5500/categories", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
   });

  await getCategories();

  e.target.reset();
    
  }

  return (
    <div className="space-y-5">

      {/* Header */}
      <div
        id="categoryheader"
        className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#dbdade]/80 bg-white/90 px-5 py-4 shadow-[0_8px_24px_rgba(47,43,61,0.08)] backdrop-blur"
      >
        <div>
          <h2 className="text-xl font-extrabold tracking-[0.02em] text-[#2f2b3d]">
            Category Management
          </h2>

          <p className="mt-1 text-sm font-medium text-[#6f6b7d]">
            Add, track, and manage categories for your products.
          </p>
        </div>
        <span className="rounded-xl bg-[#7367f0]/10 px-3 py-1.5 text-sm font-bold text-[#7367f0]">
          {categories.length} Categories
        </span>
      </div>

      <div className="grid overflow-hidden rounded-2xl border border-[#dbdade]/80 bg-white shadow-[0_8px_24px_rgba(47,43,61,0.08)] lg:grid-cols-[16rem_minmax(0,1fr)]">
        {/* Form */}
        <div
          id="categoryform"
          className="border-b border-[#dbdade] bg-white/80 p-5 lg:border-b-0 lg:border-r"
        >
          <div className="mb-5">
            <h3 className="text-base font-bold text-[#2f2b3d]">Add Category</h3>
            <p className="mt-1 text-sm font-medium text-[#6f6b7d]">
              Fill category details
            </p>
          </div>
          <form onSubmit={handleSubmit} className="grid gap-4">

            <label className="flex flex-col gap-2 text-sm font-semibold text-[#5d596c]">
            <span className="text-xs uppercase tracking-[0.08em] text-[#6f6b7d]">
              Category Name
            </span>
            <input
              type="text"
              placeholder="Category Name"
              className="min-h-11 rounded-xl border border-[#dbdade]/80 bg-white/70 px-4 py-2.5 text-sm font-medium text-[#2f2b3d] outline-none transition-all duration-300 placeholder:text-[#a5a3ae] hover:border-[#7367f0]/40 focus:border-[#7367f0] focus:bg-white focus:shadow-[0_0_0_3px_rgba(115,103,240,0.14)]"
              required
            />
            </label>

            <button
              type="submit"
              className="min-h-11 rounded-xl bg-[#7367f0] px-4 py-2.5 text-sm font-bold text-white shadow-[0_4px_14px_rgba(115,103,240,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#675dd8] hover:shadow-[0_8px_20px_rgba(115,103,240,0.32)]"
            >
              Add Category
            </button>

          </form>
        </div>

        {/* Category List */}
        <div
          id="categorylist"
          className="min-w-0 overflow-hidden bg-white"
        >

          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#dbdade] px-5 py-4">
            <h3 className="text-base font-bold text-[#2f2b3d]">
              Categories List
            </h3>
            <span className="text-sm font-medium text-[#6f6b7d]">
              Inventory groups
            </span>
          </div>

          {categories.length === 0 ? (
            <p className="px-5 py-6 text-sm font-medium text-[#6f6b7d]">
              No categories added yet.
            </p>
          ) : (
            <div className="grid gap-2 p-5">
              {categories.map((category, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-xl border border-[#dbdade]/80 bg-white px-4 py-3 transition-all duration-300 hover:border-[#7367f0]/30 hover:bg-[#f8f7fa]"
                  >
                    <p className="font-semibold text-[#2f2b3d]">
                      {category.name}
                    </p>
                   
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
