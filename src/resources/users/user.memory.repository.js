const users = [];

const getAll = async () => 
  // TODO: mock implementation. should be replaced during task development
   []
;

async function createUser(user) {
  users[user.id].push(user);
};


module.exports = { getAll, createUser };
