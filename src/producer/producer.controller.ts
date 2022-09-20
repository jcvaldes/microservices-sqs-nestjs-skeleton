import { Body, Controller, Post } from '@nestjs/common';
import { MessageProducer } from './producer.service';

@Controller('producer')
export class ProducerController {
  constructor(private readonly pub: MessageProducer) {}

  @Post()
  sendMessage(@Body() message) {
    this.pub.sendMessage(message);
  }
}
