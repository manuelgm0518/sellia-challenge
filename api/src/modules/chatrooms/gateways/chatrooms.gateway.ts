import { UseGuards } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatroomsService } from '../services';

@WebSocketGateway(80)
export class ChatroomsGateway implements OnGatewayConnection {
  constructor(private readonly chatroomsService: ChatroomsService) {}

  @WebSocketServer()
  server: Server;

  async handleConnection(socket: Socket) {
    await this.chatroomsService.getUserFromSocket(socket);
  }

  @SubscribeMessage('send_message')
  async listenForMessages(@MessageBody() data: string, @ConnectedSocket() socket: Socket) {
    const author = await this.chatroomsService.getUserFromSocket(socket);
    const message = await this.chatroomsService.saveMessage({ content: data, authorId: author.id });
    this.server.sockets.emit('receive_message', message);
    return message;
  }

  @SubscribeMessage('request_all_messages')
  async requestAllMessages(@ConnectedSocket() socket: Socket) {
    await this.chatroomsService.getUserFromSocket(socket);
    const messages = await this.chatroomsService.findAllMessages();
    socket.emit('send_all_messages', messages);
  }
}
