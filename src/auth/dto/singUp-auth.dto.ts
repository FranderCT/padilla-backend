import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength, IsEmail } from "class-validator";

export class SingUpAuthDto {
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
