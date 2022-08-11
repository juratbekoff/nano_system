import { PrismaClient, application, teachersApplication } from "@prisma/client";

const client = new PrismaClient()

class AppCeoService {
    constructor() {}
    
    // System
    async getSystemApplication() : Promise<application[]> {
        return await client.application.findMany({})}  

    async deleteSystemAppById(incomingId: number): Promise<application> {
        return await client.application.delete({where: {id: incomingId}})}

    async getSystemAppById(incomingId: number): Promise<application | null> {
        return await client.application.findUnique({where: {id: incomingId}})}
    
    // Teachers
    async getTeachersApplication(): Promise<teachersApplication[]> {
        return await client.teachersApplication.findMany()}
    
    async deleteTeachersAppById(incomingId: number): Promise<teachersApplication> {
        return await client.teachersApplication.delete({where: {id:incomingId}})}
    
    async getTeachersAppById(incomingId: number): Promise<teachersApplication | null> {
        return await client.teachersApplication.findUnique({where: {id: incomingId}})}    
}

export default AppCeoService
