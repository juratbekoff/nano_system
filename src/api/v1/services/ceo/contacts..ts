import { PrismaClient, contacts, contacts_smm} from "@prisma/client";

const client = new PrismaClient()
  
class Contacts {
    constructor() {}
    
    // contact
    async contact(contact:contacts): Promise<contacts> {
        return await client.contacts.create({data: {contact: contact.contact, location: contact.location, email: contact.email, appsAppStrore: contact.appsAppStrore,appsGooglePlay: contact.appsGooglePlay}})}
    
    async getAllContacts (){
        return await client.contacts.findMany()}
    
    async updateContacts(contacts: contacts, incomingId: number):Promise<contacts> {
        return await client.contacts.update({data: { contact: contacts.contact, email: contacts.email, location: contacts.location, appsAppStrore: contacts.appsAppStrore, appsGooglePlay: contacts.appsGooglePlay}, where: {id: incomingId}})} 
    
    async deleteCById(incomingId: number): Promise<contacts | null> {
        return await client.contacts.delete({ where: { id: incomingId}})}
      
    // contacts-smm
    async contacts_smm(contacts_smm: contacts_smm): Promise<contacts_smm> {
        return await client.contacts_smm.create({data: { name: contacts_smm.name, img: contacts_smm.img, url: contacts_smm.url}})}

    async getAllContactSMM (){
        return await client.contacts_smm.findMany()}    

    async updateContactsSmm(contacts_smm: contacts_smm, incomingId:number): Promise<contacts_smm> {
            return await client.contacts_smm.update({data: {name: contacts_smm.name, img: contacts_smm.img, url: contacts_smm.url},where: {id: incomingId}})}      
       
    async deleteCMById(incomingId: number): Promise<contacts_smm | null> {
        return client.contacts_smm.delete({ where: { id: incomingId }})}

     

}

export default Contacts