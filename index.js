const SnakeGame = require('snakecord');

const Discord = require("discord.js");

const client = new Discord.Client();



const snakeGame = new SnakeGame({

   title: 'GRA W WĘŻA',

   color: "GREEN",

   timestamp: false,

   gameOverTitle: "PRZEGRYWASZ"

});



const config = {

   prefix: "."

}



client.on('ready', () => {

   console.log("Clearing Console");

   console.clear();

   console.log('Ready!');

   client.user.setActivity(`${config.prefix}snake`);

});



client.on('message', message => {

  if(!message.content.startsWith(config.prefix) || message.author.bot) return;



  const args = message.content.slice(config.prefix.length).trim().split(/ +/);

  const command = args.shift().toLowerCase();



  if(command === 'snakev2' || command === 'GRA W WĘŻA') {

    return snakeGame.newGame(message);

  }

});



client.login(token bota);

require('http').createServer((req, res) => res.end('Bot ruszył!')).listen(3000)
