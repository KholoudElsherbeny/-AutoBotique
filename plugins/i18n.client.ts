
export default defineNuxtPlugin(app => {
  // ========== Set Initial Direction Based On Initial Locale ========== //
  const BODY_ELEMENT = document.body;
  if (app.$i18n.locale.value == "en") {
    BODY_ELEMENT.setAttribute("dir", "ltr");
  } else if (app.$i18n.locale.value == "ar") {
    BODY_ELEMENT.setAttribute("dir", "rtl");
  }

  // ========== (onBeforeLanguageSwitch) Called Right Before Setting A New Locale ========== //
  app.$i18n.onBeforeLanguageSwitch = (oldLocale: string, newLocale: string, isInitialSetup: string) => {
    console.log('onBeforeLanguageSwitch', oldLocale, newLocale, isInitialSetup, app)
  }

  // ========== (onLanguageSwitched) Called Right After A New Locale Has Been Set ========== //
  app.$i18n.onLanguageSwitched = (oldLocale: string, newLocale: string) => {
    console.log('onLanguageSwitched', oldLocale, newLocale, app)
    if (newLocale == "en") {
      BODY_ELEMENT.setAttribute("dir", "ltr");
    } else if (newLocale == "ar") {
      BODY_ELEMENT.setAttribute("dir", "rtl");
    }

    setTimeout(() => window.location.reload(), 300)

  }
})
