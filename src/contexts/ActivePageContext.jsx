import React, { createContext, useState } from 'react'

export const activePageContext = createContext()

export default function ActivePageContext({children}) {

  const [activePage, setActivePage] = useState('')

  const value = {
    activePage,
    setActivePage
  }

  return (
    <activePageContext.Provider value={value}>{children}</activePageContext.Provider>
  )
}
