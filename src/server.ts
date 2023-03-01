import { json, urlencoded } from 'body-parser'
import express, { Express } from 'express'
import cors from 'cors'
import { Route } from './controllers/route'

export const createServer = (): Express => {
  const app = express()
  app
    .disable('x-powered-by')
    .use(urlencoded({ extended: true }))
    .use(
      json({
        limit: '10mb',
        strict: true
      })
    )
    .use(
      cors({
        origin: '*',
        methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
      })
    )
  const routeController = new Route(app)
  routeController

  return app
}
