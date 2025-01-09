import { useSelector } from "react-redux";

export const useTranslation = () => {
  const translations = useSelector((state) => state.translations.translations);

  const getTranslation = (label) => {
    return translations[label] ? translations[label].text : label;
  };

  return { getTranslation };
};
