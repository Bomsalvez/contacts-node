import ContactRepository from '@modules/contact/typeorm/repository/ContactRepository';
import { CreateContactType } from '@modules/contact/typeorm/dto/CreateContact';
import { Contacts } from '@modules/contact/typeorm/entity/Contacts';
import dateTreatment from '@shared/treatment/DateTreatment';

export default class CreateContactService {
  private contactRepository: ContactRepository;
  private contact: Contacts;

  constructor() {
    this.contactRepository = new ContactRepository();
    this.contact = new Contacts();
  }


  public async execute({ nameContact, dateBirthContact, nicknameContact }: CreateContactType) {
    this.constructContact(nameContact, dateBirthContact, nicknameContact);
    await this.checkContactExist(this.contact);
    return await this.contactRepository.save(this.contact);
  }

  private async checkContactExist(contact: Contacts) {
    const contactExist = await this.contactRepository.findContactByNameContactAndDateBirthContactOrNickContact(contact);

    if (contactExist != null) {
      this.contact.pkContact = contactExist.pkContact;
    }
  }

  private constructContact(nameContact: string, dateBirthContact: Date, nicknameContact: string) {
    this.contact.nameContact = nameContact;
    if (nicknameContact != undefined) {
      this.contact.nicknameContact = nicknameContact;
    }
    if (dateBirthContact != undefined) {
      this.contact.dateBirthContact = dateTreatment(dateBirthContact);
    }
  }
}
