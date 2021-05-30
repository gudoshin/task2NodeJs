import { User } from "./user.model";

const { deleteUserInTasks } = require('../tasks/task.memory.repository');

const users: Array<User> = [];

/**
 * Returns all users
 * @returns {Array.<User>} Array of users
 */
 async function getAll(): Promise<Array<User>> {
   return users;
 }

/** Create new User
 *  @param {object} user User object
 *  @returns {void} add new User to users array
 */
async function createUser(user: User): Promise<void> {
  users.push(user);
};

/**
 * Returns the user by id
 * @param {string} id User ID
 * @returns {object} return User object
 */
async function getUser(id: string): Promise<User> {
  let user: User;
  user = {
    id: '123',
    name: 'USER',
    login: 'user',
    password:'P@55w0rd'
  }
  users.forEach((item: User) => {if (item.id === id) user = item;});
  if (user.id === '123') throw new Error('User not found');
  return user;
}

/**
 * Update user by ID
 * @param {string} id User ID
 * @param {object} data User object
 * @returns {object} the returned User
 */
async function updateUser(id: string, data: User): Promise<User> {
  let user: User;
  user = {
    id: '',
    name: '',
    login: '',
    password:''
  }
  users.forEach( item => {
    if (item.id === id){
      user = item;
    }
  } );
  const index = users.indexOf(user);
  users[index] = data;
  return data;
};

/**
 * Delete user by ID and delete user in tasks
 * @param {string} id User ID
 * @returns {void} delete user and calls the function deleteUserInTasks(id)
 */
async function deleteUser(id: string): Promise<void> {
  const user = await getUser(id);
  const index = users.indexOf(user);
  delete users[index];
  await deleteUserInTasks(id);
};
module.exports = { getAll, createUser, getUser, updateUser, deleteUser };
