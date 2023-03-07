import ContactRepository from '@repository/ContactRepository';
import { ContactCreate } from '@model/contact/module/ContactCreate';
import { ContactCreated } from '@model/contact/module/ContactCreated';

export default class CreateContactService {
  private repository: ContactRepository;

  constructor() {
    this.repository = new ContactRepository();
  }

  async execute({ nameContact, dateBirthContact, nicknameContact }: ContactCreate): Promise<ContactCreated> {
    const contact = await this.repository.saveContact({ nameContact, dateBirthContact, nicknameContact });
    return ContactCreated.toContactCreated(contact);
  }
}
