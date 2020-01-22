import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import * as themes from './configs/themes'
import ThemeContext from './configs/themes/context'
import BookPage from './components/pages/BookPage'
import store from './store'

function App() {
  const [theme, setTheme] = useState(themes.dark)

  const toogleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark)
  }

  return (
    <Provider store={store}>
      <div className="App">
        <ThemeContext.Provider value={theme}>
          <ThemeContext.Consumer>
            {context => (
              <ThemeProvider theme={{ ...context }}>
                <BookPage />
              </ThemeProvider>
            )}
          </ThemeContext.Consumer>
        </ThemeContext.Provider>
      </div>
    </Provider>
  )
}

export default App
