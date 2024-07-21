const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const { getWeather } = require('./weather');

// Create a new Discord client
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const { DISCORD_BOT_TOKEN, CURRENT_CITY } = process.env;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
  if (message.author.bot) return; // Prevent bot from responding to its own messages
  if (message.content === '!hello') {
    message.channel.send('Hello!');
  }
  if (message.content === '!temp') {
	message.channel.send(await getWeather(CURRENT_CITY));
  }
});

// Log in to Discord with your app's token
client.login(DISCORD_BOT_TOKEN);