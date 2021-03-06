import React from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"

export const ProtectedRoute = (props) => {
  let location = useLocation()

  if (localStorage.getItem("token")) {
    return <Outlet />
  }
  return <Navigate to="/" state={{ from: location }} />
}
