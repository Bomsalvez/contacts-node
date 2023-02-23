import { Contacts } from '@model/contact/entity/Contact';

export class ContactCreated {
  pkContact?: number;
  nameContact: string;
  dateBirthContact: Date;
  nicknameContact: string;

  static toContactCreated(contacts: Contacts): ContactCreated {
    const contactCreate = new ContactCreated();
    contactCreate.pkContact = contacts.pkContact;
    contactCreate.nameContact = contacts.nameContact;
    contactCreate.dateBirthContact = contacts.dateBirthContact;
    contactCreate.nicknameContact = contacts.nicknameContact;
    return contactCreate;
  }
}
