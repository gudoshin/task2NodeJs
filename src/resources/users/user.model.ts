import { v4 as uuid } from 'uuid';

class User {
  id: string;
  name: string;
  login: string;
  password: string;

  constructor( {
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  }: User) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  /**
   * Returns user without password
   * @param {object} user User object
   * @returns {object} User object without password
   */
  static toResponse(user: User): object {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
export type {User}
