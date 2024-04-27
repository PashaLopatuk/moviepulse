import React from 'react';
import {ThemeProvider} from "next-themes";


const Theme = ({children}: LayoutProps) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      // disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}

export default Theme;