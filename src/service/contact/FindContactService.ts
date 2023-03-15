import ContactRepository from '@repository/ContactRepository';
import { ContactCreated } from '@model/contact/module/ContactCreated';

type searchContact = {
  pkContact: number;
}

export class FindContactService {
  private repository: ContactRepository;

  constructor() {
    this.repository = new ContactRepository();
  }

  async execute({ pkContact }: searchContact): Promise<ContactCreated> {
    const contact = await this.repository.findContact(pkContact);

    return ContactCreated.toContactCreated(contact);
  }
}
