import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Contacts } from '../../contact/entity/Contact';

@Index("fkContact", ["fkContact"], {})
@Index("phoneNumber", ["phoneNumber"], { unique: true })
@Entity("phonenumber", { schema: "db_contacts" })
export class Phonenumber {
  @PrimaryGeneratedColumn({ type: "int", name: "pkPhoneNumber" })
  pkPhoneNumber: number;

  @Column("varchar", { name: "phoneNumber", unique: true, length: 15 })
  phoneNumber: string;

  @Column("varchar", { name: "tagPhone", nullable: true, length: 255 })
  tagPhone: string | null;


  @ManyToOne(() => Contacts, (contacts) => contacts.phonenumbers, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "fkContact", referencedColumnName: "pkContact" }])
  fkContact: Contacts;
}
