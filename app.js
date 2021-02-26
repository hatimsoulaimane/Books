const app = require('./config/server'),
config = require('./config/env');

app.listen(config.app_port, () =>
{
console.log('le serveur fonctione sous le port:'+ config.app_port)
})