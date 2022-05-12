import { Controller, Get, Inject } from '@midwayjs/decorator';
import { UserTask } from '../task/user';

@Controller('/')
export class HomeController {
  @Inject()
  userTask: UserTask;

  @Get('/')
  async home(): Promise<string> {
    return 'Hello Midwayjs!';
  }

  @Get('/test')
  async test() {
    return await this.userTask.execute('userTask');
  }
}
