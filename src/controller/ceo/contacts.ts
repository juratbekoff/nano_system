import { Request, Response } from "express";
import Contacts from "../../services/ceo/contacts.";
import multer from "multer";
import { v4 as uuid} from "uuid"
import { contacts, contacts_smm} from "@prisma/client";

const contacts = new Contacts()

//uploading function for routes
export const storageUpload = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './src/uploads/contacts_smm')
    },
    filename: (req,file, cb) => {
        cb(null, uuid() + '.png')
    }
})




class ContacstsController {
    constructor() {}

    // Create ContactsMain Controller
    async contactsMain(req:Request, res:Response) {
            try {
                let contact: contacts = {
                    id:0,
                    contact: req.body.contact,
                    email: req.body.email,
                    location: req.body.location,
                    appsAppStrore: req.body.appsAppStrore,
                    appsGooglePlay: req.body.appsGooglePlay
                }
                contacts.contact(contact)
                    .then(contact => res.send( { message: 'Contact section has been saved  !', contact}))    
            } catch (error) {
                console.log(error)
            }
    };


    // Update ContactsMain Controller by ID
    async updateContactsMain (req:Request, res:Response )  {
        try {
            contacts.updateContacts(req.body, +req.params.id)
                .then(updatedContactsMain => res.send( { message: 'ContactsMain updated!', updatedContactsMain}))
        } catch (error) {
            console.log(error)
        }
    };

    // Create ContactsSMM Controller
    async contactsSMM (req:Request, res:Response )  {
        try {
            let file = req.file!
        
            let contacts_smm: contacts_smm = {
                id: 0,
                img: file.filename,
                name: req.body.name,
                url: req.body.url
            }
            contacts.contacts_smm(contacts_smm)
                .then(contacts_smm => res.send( { message: 'Link setted!', contacts_smm}))

        } catch (error) {
            console.log(error)
        }
    };


    // Update ContactsSMM Controller by ID
    async updateContactsSMM (req:Request, res:Response )  {
        try {
            contacts.updateContactsSmm(req.body, +req.params.id)   
                .then(updatedContactsSMM => res.send( { message: 'contactsSMM updated!', updatedContactsSMM}))  

        } catch (error) {
            console.log(error)
        }
    }; 

}


export default ContacstsController
