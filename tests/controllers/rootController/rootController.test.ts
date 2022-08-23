import express from 'express';
import request from 'supertest';
import { init } from '../../../src/controllers/rootController/rootController';

describe('Root controller', () => {
  let app: express.Application;

  beforeEach(() => {
    app = express();
    app.use(express.json());
  });

  it('returns useragent when /api queried', async () => {
    init(app);
    const response = await request(app).get('/api').set('User-Agent', 'tester');
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual({ message: 'Hello: tester' });
  });

  it('/api/submit returns 200 when a valid youtube url is provided', async () => {
    init(app);
    const response = await request(app).post('/api/submit')
      .send({ url: 'https://www.youtube.com/watch?v=7rqEB4xNZU4' });
    expect(response.statusCode).toEqual(200);
      
  });

  it('/api/submit returns 400 when no input is provided', async () => {
    init(app);
    const response = await request(app).post('/api/submit');
    expect(response.statusCode).toEqual(400);
  
  });

  it('/api/submit returns 400 when bad input is provided', async () => {
    init(app);
    const response = await request(app).post('/api/submit').send({ url: 'octopus go brrrrrr' });
    expect(response.statusCode).toEqual(400);    
  });
});

export default {};