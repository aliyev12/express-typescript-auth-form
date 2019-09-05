import { Request, Response } from 'express';
import { get, controller } from './decorators';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: RequestWithBody, res: Response): void {
    res.send(`
      <form method="POST">
        <div>
          <label>Email</label>
          <input name="email"/>
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password"/>
        </div>
        <button>Submit</button>
      </form>
    `);
  }
}
