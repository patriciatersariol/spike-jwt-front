import { Route, Navigate } from "react-router-dom"
import { isAuth } from "./isAuth"

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} />
}

// render={(props) =>
//   isAuth() ? (
//     <Component {...props} />
//   ) : (
//     <Navigate to={{ pathname: "/", state: { from: props.location } }} />
//   )
// }
