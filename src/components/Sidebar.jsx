import React from 'react';
import { Link } from 'react-router-dom';
import { Boxes, ClipboardList, FolderTree, LayoutDashboard } from 'lucide-react';

export default function sidebar() {
  return (
    <aside className="min-h-full w-48 shrink-0 border-r border-[#dbdade] bg-white/95 px-3 py-5 shadow-[0_4px_18px_rgba(47,43,61,0.08)]">
       <ul className="space-y-2">
         <li> 
         <Link className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm font-semibold text-[#6f6b7d] transition-all duration-300 hover:border-[#7367f0]/20 hover:bg-[#7367f0]/10 hover:text-[#7367f0] hover:shadow-[0_6px_18px_rgba(115,103,240,0.14)]" to = "/admin">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f8f7fa] text-[#7367f0] transition group-hover:bg-white">
            <LayoutDashboard size={17} />
          </span>
          Dashboard
         </Link> 
         </li>
         <li> 
          <Link className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm font-semibold text-[#6f6b7d] transition-all duration-300 hover:border-[#7367f0]/20 hover:bg-[#7367f0]/10 hover:text-[#7367f0] hover:shadow-[0_6px_18px_rgba(115,103,240,0.14)]" to = "/admin/product">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f8f7fa] text-[#7367f0] transition group-hover:bg-white">
              <Boxes size={17} />
            </span>
            Product
          </Link> 
         </li>
         <li> 
          <Link className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm font-semibold text-[#6f6b7d] transition-all duration-300 hover:border-[#7367f0]/20 hover:bg-[#7367f0]/10 hover:text-[#7367f0] hover:shadow-[0_6px_18px_rgba(115,103,240,0.14)]" to = "/admin/category">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f8f7fa] text-[#7367f0] transition group-hover:bg-white">
              <FolderTree size={17} />
            </span>
            Category
          </Link> 
         </li>
         <li> 
          <Link className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm font-semibold text-[#6f6b7d] transition-all duration-300 hover:border-[#7367f0]/20 hover:bg-[#7367f0]/10 hover:text-[#7367f0] hover:shadow-[0_6px_18px_rgba(115,103,240,0.14)]" to = "/admin/orders">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f8f7fa] text-[#7367f0] transition group-hover:bg-white">
              <ClipboardList size={17} />
            </span>
            Orders
          </Link> 
         </li>
       </ul>


    </aside>
  )
}
