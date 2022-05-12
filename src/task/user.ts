import { Inject, Provide } from '@midwayjs/decorator';
import { QueueService } from '@midwayjs/task';
import { HelloTask } from './hello';

@Provide()
export class UserTask {
  @Inject()
  service;

  @Inject()
  queueService: QueueService;

  async execute(params) {
    const res = await this.queueService.execute(HelloTask, params, {
      delay: 3000,
    });

    console.log('res', res);
  }
}
