import React, { useState } from 'react'
import context from './context'

const ContextProvider = ({children}) => {
  const [category, setCategory] = useState('all');
  const [filteredItems, setFilteredItems] = useState([]);
  
  return (
    <context.Provider value={{filteredItems, setFilteredItems, category, setCategory}}>
        {children}
    </context.Provider>
  )
}

export default ContextProvider