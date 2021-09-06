// locale.ts

import * as React from "react";
import { useRouter } from "next/router";
import { DefaultVariables } from "../locale/types";
import i18n from "../locale/i18n";

interface AppLocaleContextProps {
  translate: DefaultVariables;
}

export const INITIAL_STATE = {} as AppLocaleContextProps;

const AppLocaleContext = React.createContext({} as AppLocaleContextProps);

export const AppLocaleProvider: React.FC = ({ children }) => {
  const router = useRouter();
  const { locale, defaultLocale } = router;
  const initials = locale || defaultLocale;
  const language = initials?.replace("-", "") as string;
  const translate = i18n[language];

  return (
    <AppLocaleContext.Provider
      value={{
        translate,
      }}
    >
      {children}
    </AppLocaleContext.Provider>
  );
};

export function useAppLocale() {
  const context = React.useContext(AppLocaleContext);

  if (!context || context === INITIAL_STATE) {
    throw new Error("useAppLocale must be used within a AppLocaleProvider");
  }

  return context;
}
