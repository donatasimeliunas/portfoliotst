import { z } from "zod"

export type Locale = "lt" | "en" | "fr"

const localeKeys: Locale[] = ["lt", "en", "fr"]
const localesShape = z.object({ lt: z.any(), en: z.any(), fr: z.any() })

export const localeSchema = z.enum(localeKeys)

export function validateLocales<T>(locales: Record<Locale, T>, context: string): Record<Locale, T> {
  // Fail fast during build if any locale is missing.
  localesShape.parse(locales)
  return locales
}

export function requireLocale<T>(locales: Record<Locale, T>, locale: Locale): T {
  const value = locales[locale]
  if (!value) {
    throw new Error(`Missing locale "${locale}" for ${JSON.stringify(locales)}`)
  }
  return value
}
