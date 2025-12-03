"use client"

import { usePathname, useRouter } from "next/navigation"
import { useEffect, useMemo, useState } from "react"

type Language = {
  code: string
  shortCode: string
}

const languages: Language[] = [
  { code: "lt", shortCode: "LT" },
  { code: "en", shortCode: "EN" },
  { code: "fr", shortCode: "FR" },
]

export function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const [currentLang, setCurrentLang] = useState<Language>(languages[0])
  const [open, setOpen] = useState(false)

  // Determine current language from URL
  useEffect(() => {
    const langCode = pathname.split("/")[1]
    const matchedLang = languages.find((lang) => lang.code === langCode)
    setCurrentLang(matchedLang ?? languages[0]) // Default to Lithuanian
    setOpen(false)
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
    const targetPath = getPathWithoutLang()
    const newPath = `/${lang.code}${targetPath}`
    router.push(newPath)
  }

  const otherLangs = useMemo(() => languages.filter((l) => l.code !== currentLang.code), [currentLang])

  return (
    <div className="relative overflow-visible">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="nav-link px-2 py-1 text-[clamp(12px,2vw+10px,16px)]"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        {currentLang.shortCode}
      </button>
      {open && (
        <div className="absolute right-0 mt-1 min-w-[72px] rounded-md bg-black text-white shadow-lg ring-1 ring-white/20 z-30">
          <ul className="py-1">
            {otherLangs.map((lang) => (
              <li key={lang.code}>
                <button
                  type="button"
                  onClick={() => switchLanguage(lang)}
                  className="w-full px-3 py-2 text-left text-sm transition-colors hover:text-gray-200"
                >
                  {lang.shortCode}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
