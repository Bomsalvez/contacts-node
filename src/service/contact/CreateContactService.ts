import ContactRepository from '@repository/ContactRepository';
import { ContactCreated } from '@model/contact/module/ContactCreate';

export default class CreateContactService {
  private repository: ContactRepository;

  constructor() {
    this.repository = new ContactRepository();
  }

  async execute({ nameContact, dateBirthContact, nicknameContact }: ContactCreated): Promise<ContactCreated> {
    const contact = await this.repository.saveContact({ nameContact, dateBirthContact, nicknameContact });
    return ContactCreated.toContactCreated(contact);
  }
}
