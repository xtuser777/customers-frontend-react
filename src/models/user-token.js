import UserTokenData from './user-token-data';

class UserToken {
  /**
   * @param {string} token
   * @param {UserTokenData} user
   * @param {Date} expiration
   */
  constructor(token, user, expiration) {
    /** @type {string} */
    this.token = token;
    /** @type {UserTokenData} */
    this.user = user;
    /** @type {Date} */
    this.expiration = expiration;
  }
}

export default UserToken;
