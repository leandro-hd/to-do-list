import { Request, Response } from 'express';

function pageLanding(request: Request, response: Response) {
  return response.render('index.html');
}

export { pageLanding };