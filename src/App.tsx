import React from "react"
import HomePage from "./pages/Home";
import AppProviders from "./contexts";

const App: React.FC<{}> = () => {
  return (
    <AppProviders>
      <HomePage />
    </AppProviders>
  )
}

export default App
