import {
  ConnectedSocket,
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { UsersService } from 'src/modules/users/services';
import { ChatroomsService } from '../services';
import { MessagesService } from '../services/messages.service';

@WebSocketGateway(80)
export class ChatroomsGateway implements OnGatewayConnection {
  constructor(
    private readonly usersService: UsersService,
    private readonly chatroomsService: ChatroomsService,
    private readonly messagesService: MessagesService,
  ) {}

  @WebSocketServer()
  server: Server;

  async handleConnection(socket: Socket) {
    await this.usersService.getUserBySocket(socket);
  }

  // @SubscribeMessage('send_message')
  // async listenForMessages(@MessageBody() body: MessageSendDto) {
  //   const message = await this.messagesService.sendMessage(body);
  //   this.server.sockets.emit('receive_message', message);
  //   return message;
  // }

  // @SubscribeMessage('request_all_messages')
  // async requestAllMessages(@ConnectedSocket() socket: Socket) {
  //   await this.chatroomsService.getUserFromSocket(socket);
  //   const messages = await this.chatroomsService.findAllMessages();
  //   socket.emit('send_all_messages', messages);
  // }
}
