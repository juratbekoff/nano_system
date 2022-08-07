import multer from "multer";
import { v4 as uuid} from "uuid"
import { Router } from "express";
import ContacstsController from "../../../controller/ceo/contacts.controller";

const contacstsController = new ContacstsController()

const router = Router()

//uploading function for routes
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './src/uploads/contacts_smm')
    },
    filename: (req,file, cb) => {
        cb(null, uuid() + '.png')
    }
})

const upload = multer({storage})

// Method:POST;   Descr: Create SMM links for contacts
router.post('/contacts-smm', upload.single('img'), contacstsController.contactsSMM)


export default router