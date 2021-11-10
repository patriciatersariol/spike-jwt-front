import React from "react"
import { Route, Navigate, Outlet, useLocation } from "react-router-dom"

export const ProtectedRoute = (props) => {
  /*
Se tiver autorizado 
    return <Outlet />

Se não tiver autorizado
    return <Navigate to="/" state={{ from: location }} />

*/

  let location = useLocation()
  //   if (login === true)
  return <Navigate to="/" state={{ from: location }} />
  //   return navigate("/login")
}
