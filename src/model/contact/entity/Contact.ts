import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Phonenumber } from '../../phonenumber/entity/Phonenumber';

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

  @OneToMany(() => Phonenumber, (phonenumber) => phonenumber.fkContact)
  phonenumbers: Phonenumber[];
}
