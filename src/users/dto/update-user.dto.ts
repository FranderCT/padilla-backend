import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}

// se obtienen todos los mismos valores del CreateUserDto pero pone cada campo opcional
// solamente se usan los que se necesiten
