import { useState } from "react";
import {
  Home,
  Search,
  Film,
  Layout,
  Drama,
  History,
} from "lucide-react"; // You can use your own SVGs too

const navItems = [
  { id: 1, label: "Search", icon: <Search />, path: "/search" },
  { id: 2, label: "Home", icon: <Home />, path: "/home" },
  { id: 3, label: "TV Shows", icon: <Film />, path: "/movies" },
  { id: 4, label: "Movies", icon: <Layout />, path: "/genres" },
  { id: 5, label: "Genres", icon: <Drama />, path: "/theatre" },
  { id: 6, label: "Watch Later", icon: <History />, path: "/history" },
];

export default function Sidebar() {
  const [active, setActive] = useState("/home");

  return (
    <div className="group fixed top-20 left-5 h-screen bg-black transition-all duration-300 w-[56px] ov hover:w-[260px]  hover:pr-2 overflow-hidden z-50">
      <div className="flex flex-col items-center mt-20 gap-6">
        {navItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActive(item.path)}
            className={`flex items-center gap-4 w-full px-4 py-2 cursor-pointer transition-all hover:scale-105 duration-300
              ${
                active === item.path
                  ? "bg-blue-300 text-white rounded-full"
                  : "text-white  rounded-md"
              }`}
          >
            <div className="text-2xl">{item.icon}</div>
            <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 text-white font-semibold text-[20px] transition-opacity duration-300">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
