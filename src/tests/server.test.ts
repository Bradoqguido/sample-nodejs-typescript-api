import supertest, {Response} from 'supertest';
import { createServer } from '../server';

describe('server', () => {
  it('health check returns 200', async () => {
    await supertest(createServer())
      .get('/healthz')
      .expect(200)
      .then((res: Response) => {
        expect(res.body.ok).toBe(true)
      })
  })

  it('message endpoint says hello', async () => {
    await supertest(createServer())
      .get('/message/world')
      .expect(200)
      .then((res: Response) => {
        expect(res.body).toEqual({ message: 'hello world' })
      })
  })
})
