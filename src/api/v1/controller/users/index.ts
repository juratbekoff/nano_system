//user imports
import UserLoginController from './../ceo/logins/user'
import AppController from "./application";
import SuggestController from "./suggestion";

//user exports
export const application = new AppController()
export const suggestion = new SuggestController()
