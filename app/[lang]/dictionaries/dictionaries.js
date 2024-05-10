import "server-only";

const dictionaries = {
    en: () => import("./en.json").then((module) => module.default),
    bn: () => import("./bn.json").then((module) => module.default),
};

export const getDictionary = async (locale) => {
    if (typeof dictionaries[locale] === 'function') {
      return dictionaries[locale]();
    } else {
    }
  }