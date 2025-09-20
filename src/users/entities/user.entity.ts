import { Exclude } from 'class-transformer';
import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity('Users')
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', length: 30, nullable: false})
  name: string;

  @Column({type: 'varchar', length: 30, nullable: false})
  lastname: string;

  @Column({ type: 'varchar', length: 150, nullable: false})
  email: string;

  @Exclude() // evita que la contraseña salga en las respuestas
  @Column({ type: 'varchar', length: 255, nullable: false })
  password: string;
}
// aqui se define como se va a ver la entiddad de los usuarios en la base de datos.