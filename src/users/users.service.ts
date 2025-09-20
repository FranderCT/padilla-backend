import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { dot } from 'node:test/reporters';


@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    throw new Error('Method not implemented.');
  }

  constructor (
    @InjectRepository(User)
    private readonly userRepo : Repository<User>
  ){}

  async createUser(dto: CreateUserDto) {
    const existing = await this.userRepo.findOne({ where: { email: dto.email }});
    if (existing) throw new ConflictException ('Este correo ya existe dentro de nuestro sistema.');

    const saltRounds = 10;
    const hashed = await bcrypt.hash(dto.password, saltRounds);

    const entity = this.userRepo.create({
      name: dto.name,
      lastname: dto.lastname,
      email: dto.email,
      password: hashed,
    })

    const saved = await this.userRepo.save(entity)

    return saved;
  }

  async findById(id: number): Promise<User> {
    const existing = await this.userRepo.findOne({ 
      where: {id},
      select: ["name", "lastname", "email"]
    });

    if (!existing) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }

    return existing;
  }

  async findAll () : Promise<User[]>{
    return this.userRepo.find({
      select: ["name", "lastname", "email"]
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
