import {Request, Response} from "express";
import CreateContactService from "@service/contact/CreateContactService";

export default class ContactController {
  public async createContact(request: Request, response: Response): Promise<Response> {
    const {nameContact, dateBirthContact, nicknameContact} = request.body;
    const service = new CreateContactService();
    const contact = await service.execute({nameContact, dateBirthContact, nicknameContact});
    return response.json(contact);
  }
}
