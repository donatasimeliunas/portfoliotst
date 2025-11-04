"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LanguageSwitcher } from "./LanguageSwitcher"

const navigation = [{ name: "Short Films", href: "/short-films" }, { name: "Videos", href: "/videography"}]

export function Navigation() {
  const pathname = usePathname()

  // Determine current language from URL
  const getLangPrefix = () => {
    const pathParts = pathname.split("/")
    if (pathParts[1] === "en" || pathParts[1] === "fr") {
      return `/${pathParts[1]}`
    }
    return ""
  }

  const langPrefix = getLangPrefix()

  // Get the current path without language prefix for active state calculation
  const pathWithoutLang = pathname.replace(/^\/(en|fr)/, "")

  // Translate navigation items based on language
  const getNavName = (name: string) => {
    if (langPrefix === "/fr") {
      return name === "Short Films" ? "Courts métrages" : name === "Videos" ? "Vidéos" : name
    } else if (langPrefix === "/en") {
      return name
    } else {
      return name === "Short Films" ? "Trumpametražiai" : name === "Videos" ? "Video" : name
    }
  }

  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link href={`${langPrefix}/`} className={`nav-link ${pathWithoutLang === "/" ? "active" : ""}`}>
              {langPrefix === "/fr" ? "Accueil" : langPrefix === "/en" ? "Home" : "Pradžia"}
            </Link>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={`${langPrefix}${item.href}`}
                className={`nav-link ${pathWithoutLang.startsWith(item.href) ? "active" : ""}`}
              >
                {getNavName(item.name)}
              </Link>
            ))}
          </div>
          <div className="flex items-center">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  )
}
