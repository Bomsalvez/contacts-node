import { Repository } from 'typeorm';
import { Contacts } from '@modules/contact/typeorm/entity/Contacts';
import { AppDataSource } from '@config/database/data-source';

export default class ContactRepository {
  private repository: Repository<Contacts>;


  constructor() {
    this.repository = AppDataSource.getRepository(Contacts);
  }


  public async save(contact: Contacts) {
    return await this.repository.save(contact);
  }

  public async findContactByNameContactAndDateBirthContactOrNickContact(contact: Contacts) {
    return await this.repository.findOneBy({
      nameContact: contact.nameContact,
      dateBirthContact: contact.dateBirthContact,
      nicknameContact: contact.nicknameContact,
    });

  }
}
