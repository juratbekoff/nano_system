// imports
import CeoLoginController from './logins/ceo'
import TeacherLoginController from './logins/teacher'
import UserLoginController from './logins/user'
import AppCeoController from './application'
import CeoSuggestController from './suggestion'
import NewsPublishController from './publish'

// Exports
export const ceoLogin = new CeoLoginController()
export const teacherLogin = new TeacherLoginController()
export const userLogin = new UserLoginController()
export const application = new AppCeoController()
export const ceoSuggest = new CeoSuggestController()
export const publish = new NewsPublishController()
