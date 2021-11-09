export const isAuth = () => {
  const token = localStorage.getItem("token")
  return token !== null && token !== ""
}
console.log(isAuth())
