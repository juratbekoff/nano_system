// imports
import AppCeoController from './application'
import AttendanceCeoController from './attendance'
import ContacstsController from './contacts'
import { UserLoginController, CeoLoginController } from './setlogins'

// Exports
export const application = new AppCeoController()
export const attendance =  new AttendanceCeoController()
export const contacts = new ContacstsController() 
export const userlogin = new UserLoginController()
export const ceologin = new CeoLoginController()

