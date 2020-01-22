import { createContext } from 'react'
import dark from './dark'

const Context = createContext({
  theme: dark,
})

export default Context
