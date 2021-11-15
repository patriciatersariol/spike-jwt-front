import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { client } from "../services/acelera-mais-api/client"

export const ProtectedInfo = () => {
  const navigate = useNavigate()
  const [dadosApi, setDadosApi] = useState([])

  useEffect(() => {
    client("/hiring-process")
      .then((res) => setDadosApi(res.data))
      .catch((err) => {
        console.error(err)
        setDadosApi([])
        navigate("/")
      })
  }, [navigate])

  return (
    <div>
      <h1>Lista super secreta!</h1>
      <table>
        <tbody>
          {dadosApi.map((processo) => {
            return (
              <tr key={processo.name}>
                <td>
                  <h3>{processo.name}</h3>
                </td>
                <td>
                  <h3>{processo.status}</h3>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
