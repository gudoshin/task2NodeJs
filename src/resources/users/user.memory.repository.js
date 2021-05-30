const { deleteUserInTasks } = require('../tasks/task.memory.repository');

const users = [];

const getAll = async () => 
users  


async function createUser(user) {
  users.push(user);
};

async function getUser(id) {
  let user = '';
  users.forEach(item => {if (item.id === id) user = item;});
  if (user === '') throw new Error('User not found');
  return user;
}

async function updateUser(id, data) {
  let user = '';
  users.forEach( item => {
    if (item.id === id){
      user = item;
    }
  } );
  const index = users.indexOf(user);
  users[index].name = data.name;
  users[index].login = data.login;
  users[index].password = data.password;
  return getUser(id);
};

async function deleteUser(id) {
  const user = await getUser(id);
  const index = users.indexOf(user);
  delete users[index];
  await deleteUserInTasks(id);
};
module.exports = { getAll, createUser, getUser, updateUser, deleteUser };
