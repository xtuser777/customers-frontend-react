class UserTokenData {
  /**
   *
   * @param {number} id
   * @param {string} username
   * @param {string} name
   */
  constructor(id, username, name) {
    /** @type {number} */
    this.id = id;
    /** @type {string} */
    this.username = username;
    /** @type {string} */
    this.name = name;
  }
}

export default UserTokenData;
