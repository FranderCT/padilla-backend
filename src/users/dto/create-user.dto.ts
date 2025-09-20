import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, isString, IsString, minLength, MinLength } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({
    description: 'Nombre del usuario',
    example: 'Juan',
    })
    @IsNotEmpty({ message: 'El nombre es obligatorio' })
    @IsString()
    name: string;

    @ApiProperty({
    description: 'Apellidos del usuario',
    example: 'Pérez Gómez',
    })
    @IsNotEmpty({message: 'Los apellidos son obligarios'})
    @IsString()
    @MinLength(3, {message: 'Debe contener 3 letras o mas.'})
    lastname : string;


    @ApiProperty({
    description: 'Correo electrónico único del usuario',
    example: 'juan@test.com',
    })
    @IsNotEmpty({ message: 'El correo es obligatorio' })
    @IsEmail({}, { message: 'El correo no es válido' })
    email: string;


    @ApiProperty({
    description: 'Contraseña del usuario',
    example: '123456',
    minLength: 6,
    })
    @IsNotEmpty({ message: 'La contraseña es obligatoria' })
    @IsString()
    @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
    password: string;
}
// Dto con validaciones, debe de coincidir con la base de datos