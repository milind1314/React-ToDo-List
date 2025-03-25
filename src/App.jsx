import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { CookiesProvider } from 'react-cookie'
import { ToDoIndex } from './component/todo-index'

function App() {

  return (
    <div>
        <CookiesProvider>
          <ToDoIndex />
        </CookiesProvider>
    </div>
  )
}

export default App
