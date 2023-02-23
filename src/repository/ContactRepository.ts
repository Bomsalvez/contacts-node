import { Contacts } from '@model/contact/entity/Contact';
import { ContactCreated } from '@model/contact/module/ContactCreate';
import { Repository } from 'typeorm';
import { AppDataSource } from '../settings/database/data-source';

export default class ContactRepository {
  private repository: Repository<Contacts>;


  constructor() {
    this.repository = AppDataSource.getRepository(Contacts);
  }

  async saveContact({ nameContact, dateBirthContact, nicknameContact }: ContactCreated): Promise<Contacts> {
    let contact = this.constructContact({ nameContact, dateBirthContact, nicknameContact });
    const contactExist = this.findContactByContactInformation({ nameContact, dateBirthContact, nicknameContact });
    contactExist.then(value => contact.pkContact = value?.pkContact ?? contact.pkContact);
    contact = await this.repository.save(contact);
    return contact;
  }

  private async findContactByContactInformation({ nameContact, dateBirthContact, nicknameContact }: ContactCreated) {
    return await this.repository.findOneBy({
      nameContact: nameContact,
      dateBirthContact: dateBirthContact,
      nicknameContact: nicknameContact,
    });
  }

  private constructContact({ nameContact, dateBirthContact, nicknameContact }: ContactCreated): Contacts {
    return this.repository.create({ nameContact, dateBirthContact, nicknameContact });
  }
}
