const app = require('express')();

app.get('/', (request, response) => response.json({
  message: 'Docker is amazing! 🐳'
}));

const port = process.env.PORT || 3333;

app.listen(
  port,
  () => console.log(`App is running at http://127.0.0.1:${port}`)
);
