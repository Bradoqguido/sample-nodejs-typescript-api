import { createServer } from './server'

const port = process.env.PORT || 3000
const server = createServer()

server.listen(parseInt(port.toString()), '0.0.0.0', () => {
  console.log(`api running on ${port}`)
})
