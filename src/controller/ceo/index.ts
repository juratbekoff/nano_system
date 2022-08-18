// imports
import AppCeoController from './application'
import AttendanceCeoController from './attendance'
import ContacstsController from './contacts'
import { LoginController  } from './setlogins'
import CeoSuggestController from './suggestion'

// Exports
export const application = new AppCeoController()
export const attendance =  new AttendanceCeoController()
export const contacts = new ContacstsController() 
export const ceologin = new LoginController()
export const ceoSuggest = new CeoSuggestController()

