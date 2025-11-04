"use client"

import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react"

type Language = {
  code: string
  shortCode: string
}

const languages: Language[] = [
  { code: "", shortCode: "LT" },
  { code: "en", shortCode: "EN" },
  { code: "fr", shortCode: "FR" },
]

export function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const [currentLang, setCurrentLang] = useState<Language>(languages[0])

  // Determine current language from URL
  useEffect(() => {
    const langCode = pathname.split("/")[1]
    const matchedLang = languages.find((lang) => lang.code === langCode)
    if (matchedLang) {
      setCurrentLang(matchedLang)
    } else {
      setCurrentLang(languages[0]) // Default to Lithuanian
    }
  }, [pathname])

  // Get the path without language prefix
  const getPathWithoutLang = () => {
    const pathParts = pathname.split("/")
    if (languages.some((lang) => lang.code === pathParts[1])) {
      return "/" + pathParts.slice(2).join("/")
    }
    return pathname
  }

  const switchLanguage = (lang: Language) => {
    const newPath = lang.code ? `/${lang.code}${getPathWithoutLang()}` : getPathWithoutLang()
    router.push(newPath)
  }

  return (
    <div className="flex items-center space-x-4">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => switchLanguage(lang)}
          className={`nav-link ${currentLang.code === lang.code ? "active" : ""}`}
        >
          {lang.shortCode}
        </button>
      ))}
    </div>
  )
}
