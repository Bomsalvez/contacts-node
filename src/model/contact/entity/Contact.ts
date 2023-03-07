import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('contacts', { schema: 'db_contacts' })
export class Contacts {
  @PrimaryGeneratedColumn('identity', { type: 'int', name: 'pkContact' })
  pkContact: number;

  @Column('varchar', { name: 'nameContact', length: 255 })
  nameContact: string;

  @Column('date', { name: 'dateBirthContact', nullable: true })
  dateBirthContact: Date;

  @Column('varchar', { name: 'nicknameContact', nullable: true, length: 30 })
  nicknameContact: string;
}
