import { HttpException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { SingUpAuthDto } from './dto/singUp-auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userSerivce : UsersService
  ){}


  async singUp(userSingUp: SingUpAuthDto){
    const {email, password} = userSingUp;
    const findUser = await this.userSerivce.findByEmail(email);

    if (!findUser) throw new HttpException('Usuario no encontrado', 404);

    const isPasswordValid = await bcrypt.compare(password, findUser.password);

    return findUser
  }

  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }
  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}

