const restify = require('restify');
const builder = require('botbuilder');
//=========================================================
// Bot Setup
//=========================================================
// Setup Restify Server
const server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, () => {
  console.log('%s listening to %s', server.name, server.url);
});

// Create chat bot
const connector = new builder.ChatConnector({
  appId: '51b9861e-81c6-4eb7-9bcf-cc580c9b91be',
  appPassword: 'izmwyjLRLJXC487^$?mH75~'
});
const bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());
//=========================================================
// Bots Dialogs
//=========================================================
bot.dialog('/', (session) => {
  session.send("Hello World");
});