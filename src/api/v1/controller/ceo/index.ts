// imports
import AppCeoController from './application'
import { LoginController  } from './setlogins'
import CeoSuggestController from './suggestion'
import NewsPublishController from './publish'

// Exports
export const application = new AppCeoController()
export const ceologin = new LoginController()
export const ceoSuggest = new CeoSuggestController()
export const publish = new NewsPublishController()
