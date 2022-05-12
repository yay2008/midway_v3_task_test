// import { Inject, Provide, Task, FORMAT } from '@midwayjs/decorator';
import { Inject, Provide } from '@midwayjs/decorator';
import { IUserOptions } from '../interface';
import { testService } from './test.service';

@Provide()
export class UserService {
  @Inject()
  testService: testService;

  // @Task({
  //   repeat: { cron: FORMAT.CRONTAB.EVERY_MINUTE },
  // })
  async test() {
    console.log(await this.testService.getName());
  }

  async getUser(options: IUserOptions) {
    return {
      uid: options.uid,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }
}
