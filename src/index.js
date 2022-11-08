const app = require('./app');
const port = process.env.PORT || 3000;

app.listen(port, () => 
    console.log('Example TEST APP listening on Port 3000!!'),
);