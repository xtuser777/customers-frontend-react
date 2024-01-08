import UserToken from '../models/user-token';

class Security {
  /**
   * @param {UserToken} user
   * @param {string} token
   */
  static set(user, token) {
    const data = JSON.stringify(user);

    localStorage.setItem('user', btoa(data));
    localStorage.setItem('token', token);
  }

  /**
   * @param {UserToken} user
   */
  static setUser(user) {
    const data = JSON.stringify(user);

    localStorage.setItem('user', btoa(data));
  }

  /**
   * @param {string} token
   */
  static setToken(token) {
    localStorage.setItem('token', token);
  }

  static getUser() {
    const data = localStorage.getItem('user');
    if (data) return JSON.parse(atob(data));
    else return null;
  }

  static getToken() {
    const data = localStorage.getItem('token');
    if (data) return data;
    else return null;
  }

  static hasToken() {
    if (this.getToken()) return true;
    else return false;
  }

  static clear() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }
}

export default Security;
