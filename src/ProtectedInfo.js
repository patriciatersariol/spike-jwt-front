import axios from "axios"
import { useEffect } from "react"
import { client } from "./client"

export const ProtectedInfo = () => {
  // const getProtectedPage = async (token) => {
  //   const response = await axios.get("http://localhost:9000/page", {
  //     headers: { Authorization: `Bearer ${token}` }
  //   })
  //   console.log(response)
  // }

  useEffect(() => {
    client("/hiring-process").then((res) => console.log(res.data))
  }, [])

  return (
    <div>
      <h1>Informações secretas! Sou children da rota protegida!</h1>
      {/* {getProtectedPage} */}
    </div>
  )
}
