const { deleteUserInTasks } = require('../tasks/task.memory.repository');

const users = [];

/**
 * Returns all users
 * @returns {Array.<Object>} Array of users
 */
 async function getAll() {
   return users;
 }

/** Create new User
 *  @param {object} user User object
 *  @returns {void} add new User to users array
 */
async function createUser(user) {
  users.push(user);
};

/**
 * Returns the user by id
 * @param {string} id User ID
 * @returns {Object} return User object
 */
async function getUser(id) {
  let user = '';
  users.forEach(item => {if (item.id === id) user = item;});
  if (user === '') throw new Error('User not found');
  return user;
}

/**
 * Update user bu ID
 * @param {string} id User ID
 * @param {Object} data User object
 * @returns {Object} the returned User
 */
async function updateUser(id, data) {
  let user = '';
  users.forEach( item => {
    if (item.id === id){
      user = item;
    }
  } );
  const index = users.indexOf(user);
  users[index] = data;
  return users[index];
};

/**
 * Delete user by ID and delete user in tasks
 * @param {string} id User ID
 * @returns {void} delete user and calls the function deleteUserInTasks(id)
 */
async function deleteUser(id) {
  const user = await getUser(id);
  const index = users.indexOf(user);
  delete users[index];
  await deleteUserInTasks(id);
};
module.exports = { getAll, createUser, getUser, updateUser, deleteUser };
