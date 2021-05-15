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

module.exports = { getAll, createUser, getUser };
