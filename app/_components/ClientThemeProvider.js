"use client";

import { ThemeProvider } from "next-themes";

const ClientThemeProvider = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default ClientThemeProvider;
