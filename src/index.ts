import { createServer } from './server'

// eslint-disable-next-line turbo/no-undeclared-env-vars
const port = process.env.PORT || 3000
const server = createServer()

server.listen(parseInt(port.toString()), '0.0.0.0', () => {
  console.log(`api running on ${port}`)
})
