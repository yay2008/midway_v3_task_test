import { Provide } from '@midwayjs/decorator';

@Provide()
export class testService {
  async getName() {
    return 'test';
  }
}
