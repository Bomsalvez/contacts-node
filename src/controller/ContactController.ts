import { Request, Response } from 'express';
import CreateContactService from '@service/contact/CreateContactService';
import { FindContactService } from '@service/contact/FindContactService';

export default class ContactController {
  public async createContact(request: Request, response: Response): Promise<Response> {
    const { nameContact, dateBirthContact, nicknameContact } = request.body;
    const service = new CreateContactService();
    const contact = await service.execute({ nameContact, dateBirthContact, nicknameContact });
    return response.json(contact);
  }

  public async findContact(request: Request, response: Response): Promise<Response> {
    const pkContact = parseInt(request.params.toString());
    const service = new FindContactService();
    const contact = await service.execute({ pkContact});
    return response.json(contact);
  }
}
