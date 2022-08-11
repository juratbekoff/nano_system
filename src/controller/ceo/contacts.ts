import { Request, Response } from "express";
import Contacts from "../../services/ceo/contacts.";
import multer from "multer";
import { v4 as uuid} from "uuid"
import { contacts, contacts_smm} from "@prisma/client";
const contacts = new Contacts()

class ContacstsController {
    constructor() {}

    async contactsMain(req:Request, res:Response) {
            try {
                let contact: contacts = { id:0, contact: req.body.contact, email: req.body.email, location: req.body.location,appsAppStrore: req.body.appsAppStrore, appsGooglePlay: req.body.appsGooglePlay}
                    await contacts.contact(contact)
                        .then(contact => res.send( { message: 'Contact section has been saved  !', contact}))    
            } catch (error) {
                return res.status(500).send({ message: "Internal Server Error!", error})}
    };

    async updateContactsMain (req:Request, res:Response )  {
        try {
            await contacts.updateContacts(req.body, +req.params.id)
                .then(updatedContactsMain => res.send( { message: 'ContactsMain updated!', updatedContactsMain}))
        } catch (error) {
            return res.status(500).send({ message: "Internal Server Error!", error})}
    };

    async contactsSMM (req:Request, res:Response )  {
        try {
            let file = req.file!
                let contacts_smm: contacts_smm = { id: 0, img: file.filename, name: req.body.name, url: req.body.url}
                    await contacts.contacts_smm(contacts_smm)
                        .then(contacts_smm => res.send( { message: 'Link setted!', contacts_smm}))
        } catch (error) {
            return res.status(500).send({ message: "Internal Server Error!", error})}
    };

    async updateContactsSMM (req:Request, res:Response )  {
        try {
           await contacts.updateContactsSmm(req.body, +req.params.id)   
                .then(updatedContactsSMM => res.send( { message: 'contactsSMM updated!', updatedContactsSMM}))  
        } catch (error) {
            return res.status(500).send({ message: "Internal Server Error!", error})}
    }; 

}

export default ContacstsController
