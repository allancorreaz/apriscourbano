"use client";
import { useState } from "react";
import Link from "next/link";

export default function MobileMenu({ navigation }: { navigation: { name: string; href: string }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="p-2 focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menu"
      >
        {/* Hamburguer ícone branco */}
        <svg width="32" height="32" fill="#fff" viewBox="0 0 24 24">
          <rect y="6" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="16" width="24" height="2" rx="1" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-16 left-0 w-full bg-slate-900 z-50 flex flex-col items-center py-4 shadow-lg">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="w-full text-center py-3 text-white text-lg font-semibold hover:bg-slate-800 transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}