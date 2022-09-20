import { Injectable } from '@nestjs/common';
import { SqsService } from '@ssut/nestjs-sqs';
import { config } from '../config';

@Injectable()
export class MessageProducer {
  constructor(private readonly sqsService: SqsService) {}
  async sendMessage(message: any) {
    message.body = JSON.stringify(message.body);
    try {
      await this.sqsService.send(config.TEST_QUEUE, message);
    } catch (error) {
      console.log('error in producing image!', error);
    }
  }
}
