// importaciones de módulos de la librerías
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity('home', {
  orderBy: {
    id: 'ASC',
  },
})
export class Home {
  // columna para identificación única
  @PrimaryGeneratedColumn()
    id?: number;

  @Column({
    length: 100,
  })
    short_url: string;
}
