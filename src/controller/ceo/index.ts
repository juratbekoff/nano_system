// imports
import AppCeoController from './application'
import AttendanceCeoController from './attendance'
import ContacstsController from './contacts'
import UserLoginController from './setuserlogin'

// Exports
export const application = new AppCeoController()
export const attendance =  new AttendanceCeoController()
export const contacts = new ContacstsController() 
export const setuserlogin = new UserLoginController()

