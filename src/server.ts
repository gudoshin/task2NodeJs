const { PORT } = require('./common/config');
const app1 = require('./app');

app1.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);