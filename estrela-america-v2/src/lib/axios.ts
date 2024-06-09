import axios from 'axios'

const api = axios.create({
  baseURL: "https://spendmanagement-estrela-america-api.8ya11r.easypanel.host/api/v1",
  headers: { 'Content-Type': 'application/json' },
})

export { api }

