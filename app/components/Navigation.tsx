"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LanguageSwitcher } from "./LanguageSwitcher"

const navigation = [
  { name: "Short Films", href: "/short-films" },
  { name: "Precious Moments", href: "/videography" },
]

export function Navigation() {
  const pathname = usePathname()

  // Determine current language from URL
  const getLangPrefix = () => {
    const pathParts = pathname.split("/")
    if (pathParts[1] === "en" || pathParts[1] === "fr" || pathParts[1] === "lt") {
      return `/${pathParts[1]}`
    }
    // Default to Lithuanian prefix
    return "/lt"
  }

  const langPrefix = getLangPrefix()

  // Get the current path without language prefix for active state calculation
  const pathWithoutLang = pathname.replace(/^\/(en|fr|lt)/, "")

  // Translate navigation items based on language
  const getNavName = (name: string) => {
    if (langPrefix === "/fr") {
      return name === "Short Films" ? "Courts métrages" : name === "Precious Moments" ? "Moments précieux" : name
    } else if (langPrefix === "/en") {
      return name
    } else {
      return name === "Short Films" ? "Trumpametražiai" : name === "Precious Moments" ? "Mielos akimirkos" : name
    }
  }

  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 py-2">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 whitespace-nowrap text-sm md:gap-x-4 md:text-base">
            <Link
              href={`${langPrefix}/about`}
              className={`nav-link text-[clamp(12px,2vw+10px,16px)] ${
                pathWithoutLang === "/about" || pathWithoutLang === "" ? "active" : ""
              }`}
            >
              {langPrefix === "/fr" ? "À propos" : langPrefix === "/en" ? "About" : "Apie"}
            </Link>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={`${langPrefix}${item.href}`}
                className={`nav-link text-[clamp(12px,2vw+10px,16px)] ${
                  pathWithoutLang.startsWith(item.href) ? "active" : ""
                }`}
              >
                {getNavName(item.name)}
              </Link>
            ))}
          </div>
          <div className="ml-auto whitespace-nowrap">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  )
}
