
const Discord= require('discord.js');
const bot = new Discord.Client();
const token = 'NjU5ODE0MzI0NTU4MTAyNTQx.XgU_rA.FI-EtkGTXYFrn3VDVbMcpezdwhc';
const PREFIX =  '!';
const api='https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=';
bot.login(token);
const fs= require("fs");

bot.on('ready',() => {
  console.log('Destiny arrives all the same. And now, its here. Or should I say, I am.');
  console.log(bot.commands);

});


bot.on('message', message => {
  let args = message.content.substring(PREFIX.length).split(' ');
	const command = args.shift().toLowerCase();
	console.log(command);
	const cmd = bot.commands.get(command);
	console.log(cmd);
	if (!cmd) return;
	bot.commands.set(command)

  cmd.run(bot, message, args);


  switch(args[0]){
    case 'shit':
        message.channel.sendMessage("In all my years of conquest, violence, slaughter, it was never personal. But I'll tell you now, what I'm about to do to you "+(message.author.username)+"... Im gonna enjoy it. Very, very much.");
        break;
      case 'thanos':
        message.channel.sendMessage('yes, little one');
        break;
      case 'fuck':
        message.channel.sendMessage('BOY! I would reconsider your current course!');
        break;
      case 'help':
        message.channel.sendMessage("You should have gone for the head.");
        break;
      case 'are':
        if((args[1] === 'you')&&(args[2] === 'ok')){
          message.channel.sendMessage("They called me a madman")
        }else{
          message.channel.sendMessage("I'm sorry, Little One?")
        }
    break;


  };
});
