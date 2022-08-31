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
                        .then(contact => res.status(200).send( { message: 'Contact section has been saved  !', contact}))    
            } catch (error) {
                console.log(error);
                return res.status(500).send({ message: "Internal Server Error!", error})}
    };

    async getAllContacts (req: Request, res: Response) {
        try {
            await contacts.getAllContacts()
                .then(contacts => res.status(200).send( { message: 'Contact!', contacts}))
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Internal Server Error!"})
        }
    }

    async deleteCSMMById(req: Request, res: Response) {
        try {
            await contacts.deleteCMById(+req.params.id)
                return res.status(200).status(200).send({ message: `ID ${+req.params.id} deleted from the contacts table!`})
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Internal Server Error!"})
        }
    }

    async updateContactsMain (req:Request, res:Response )  {
        try {
            await contacts.updateContacts(req.body, +req.params.id)
                .then(updatedContactsMain => res.status(200).send( { message: 'Contact updated!', updatedContactsMain}))
        } catch (error) {
            return res.status(500).send({ message: "Internal Server Error!", error})}
    };

    // contacts-smm
    async contactsSMM (req:Request, res:Response )  {
        try {
                let contacts_smm: contacts_smm = { id: 0, img: req.body.img, name: req.body.name, url: req.body.url}
                    await contacts.contacts_smm(contacts_smm)
                        .then(contacts_smm => res.status(200).send( { message: 'Link setted!', contacts_smm}))
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Internal Server Error!", error})}
    };


    async getAllContactsSMM (req: Request, res: Response) {
        try {
            await contacts.getAllContactSMM()
                .then(contacts => res.status(200).send( { message: 'All contact!', contacts}))  
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Internal Server Error!", error})
        }
    }

    async updateContactsSMM (req:Request, res:Response )  {
        try {
           await contacts.updateContactsSmm(req.body, +req.params.id)   
                .then(updatedContactsSMM => res.status(200).send( { message: 'contactsSMM updated!', updatedContactsSMM}))  
        } catch (error) {
            return res.status(500).send({ message: "Internal Server Error!", error})}
    }; 

    async deleteCMById (req: Request, res: Response) {
        try {
            await contacts.deleteCById(+req.params.id)
                return res.status(200).status(200).send({ message: `ID ${+req.params.id} deleted from the contacts-smm table!`})
        } catch (error) {
            console.log(error);
                return res.status(500).send({ message: "Internal Server Error!", error})
        }
    }

}

export default ContacstsController
