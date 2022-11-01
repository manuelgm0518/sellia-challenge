import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { UsersService } from '../services';

@WebSocketGateway({ cors: true })
export class UsersGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly usersService: UsersService) {}

  @WebSocketServer()
  server: Server;

  async handleConnection(socket: Socket) {
    const client = await this.usersService.getUserBySocket(socket);
    await this.usersService.updateConnection(client.id, true);
    this.server.emit('connected_user', client);
  }

  async handleDisconnect(socket: Socket) {
    const client = await this.usersService.getUserBySocket(socket);
    await this.usersService.updateConnection(client.id, false);
    this.server.emit('disconnected_user', client);
  }
}
