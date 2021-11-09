import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from "./Login"
import { PrivateRoute } from "./PrivateRoute"
import { Private } from "./Private"
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/hiring-process" component={Private} />
      </Routes>
    </BrowserRouter>
  )
}
