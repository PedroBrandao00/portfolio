"use client";
import { usePathname, useRouter } from "next/navigation";

export default function ChangeLocale() {
  const router = useRouter();
  const pathname = usePathname(); // rota atual
  const locale = pathname.split("/")[1]; // assume que o locale está na primeira parte da rota, tipo /en/home

  const nextLocale = locale === "en" ? "pt" : "en";

  const handleClick = () => {
    // substitui o locale na rota
    const newPathname = pathname.replace(`/${locale}`, `/${nextLocale}`);
    router.push(newPathname);
  };

  return (
    <button className="cursor-pointer" onClick={handleClick} type="button">
      {nextLocale.toUpperCase()}
    </button>
  );
}
