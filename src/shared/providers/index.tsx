import React from 'react';

import ThemeProvider from './theme';

const Index = ({children}: LayoutProps) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default Index;