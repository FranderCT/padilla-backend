import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule], // importa el user module para poder utilizar los servicios de user service.
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
