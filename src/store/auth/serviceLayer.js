import Config from "../config";
import short from "short-uuid";

class Auth {
  constructor() {
    this.myStorage = window.sessionStorage;
  }

  setToken() {
    const token = short.generate();
    this.myStorage.setItem(`${Config.domainPrefix}.auth.${Config.appName}`, token);
  }
  removeToken() {
    this.myStorage.removeItem(`${Config.domainPrefix}.auth.${Config.appName}`);
  }
  checkToken() {
    return this.myStorage.getItem(`${Config.domainPrefix}.auth.${Config.appName}`);
  }
}

export default new Auth();
