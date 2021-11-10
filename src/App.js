import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from "./components/Login"
import { ProtectedInfo } from "./components/ProtectedInfo"
import { ProtectedRoute } from "./components/ProtectedRoute"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/protected" element={<ProtectedRoute />}>
          <Route path="/protected" element={<ProtectedInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
