import { Inject, Provide, Queue } from '@midwayjs/decorator';

@Queue()
@Provide()
export class HelloTask {
  @Inject()
  service;

  async execute(params) {
    console.log(params);
  }
}
