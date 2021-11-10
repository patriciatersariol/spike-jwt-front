import axios from "axios"

export const client = axios.create({
  baseURL: "http://localhost:9000",
  headers: {
    common: {
      Authorization: `Bearer ${localStorage.getItem("token") || ""}`
    }
  }
})

export const setTokenInHeaders = (token = "") => {
  client.defaults.headers.common = {
    ...client.defaults.headers.common,
    Authorization: `Bearer ${localStorage.getItem("token") || token}`
  }
}
