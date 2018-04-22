import React from 'react'
import { theme } from './config'

export const ThemeContext = React.createContext()

export function ThemeProvider ({ children }) {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}
