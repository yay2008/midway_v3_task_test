import { MidwayConfig } from '@midwayjs/core';

export default {
  task: {
    redis: 'redis://127.0.0.1:6379',
    prefix: 'midway-task',
    defaultJobOptions: {
      repeat: {
        tz: 'Asia/Shanghai',
      },
    },
  },
  // use for cookie sign key, should change to your own and keep security
  keys: '1652314271144_7163',
  koa: {
    port: 7001,
  },
} as MidwayConfig;
