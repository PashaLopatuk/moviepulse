'use client';

import {useTranslation} from "react-i18next";

/**
 * 
 * @returns user's preffered language
 */
export function useLanguage() {
  const { i18n } = useTranslation()
  return {
    language: i18n.resolvedLanguage
  }
}
