import { Contacts } from '@model/contact/entity/Contact';
import { ContactCreate } from '@model/contact/module/ContactCreate';
import { Repository } from 'typeorm';
import { AppDataSource } from '@settings/database/data-source';
import AppError from '@settings/exception/AppError';

export default class ContactRepository {
  private repository: Repository<Contacts>;


  constructor() {
    this.repository = AppDataSource.getRepository(Contacts);
  }

  public async saveContact({ nameContact, dateBirthContact, nicknameContact }: ContactCreate): Promise<Contacts> {
    let contact = this.constructContact({ nameContact, dateBirthContact, nicknameContact });
    const contactExist = await this.findContactByContactInformation({ nameContact, dateBirthContact, nicknameContact });
    if (contactExist != null) {
      contact.pkContact = contactExist.pkContact;
    }
    contact = await this.repository.save(contact);
    return contact;
  }

  public async findContact(pkContact: number): Promise<Contacts> {
    const contact = await this.repository.findOneBy({ pkContact: pkContact });
    if (contact == null) {
      throw new AppError('nao encontrado');
    }
    return contact;
  }

  private async findContactByContactInformation({ nameContact, dateBirthContact, nicknameContact }: ContactCreate) {
    return await this.repository.findOneBy({
      nameContact: nameContact,
      dateBirthContact: dateBirthContact,
      nicknameContact: nicknameContact,
    });
  }

  private constructContact({ nameContact, dateBirthContact, nicknameContact }: ContactCreate): Contacts {
    return this.repository.create({ nameContact, dateBirthContact, nicknameContact });
  }

}
