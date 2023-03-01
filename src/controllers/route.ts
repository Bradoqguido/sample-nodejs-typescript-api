import express, { Request, Response } from 'express'

export class Route {

  constructor(app: express.Application) {
    this.routes(app)
  }

  private routes(app: express.Application) {
    app
      .get('/', (_req: Request, res: Response) => {
        res.send('Server opened')
      })
      .get('/message/:name', (req: Request, res: Response) => {
        return res.send({ message: `hello ${req.params.name}` })
      })
      .get('/healthz', (_req: Request, res: Response) => {
        return res.send({ ok: true })
      })
  }
}
