
const Discord= require('discord.js');
const bot = new Discord.Client();
const token = 'NjU5ODE0MzI0NTU4MTAyNTQx.Xgauhw.DjissG9Je0dQ2nNB8IJlkLBr6mo';
const PREFIX =  '!';
const api='https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=';
bot.login(token);
const fs= require("fs");

const fetch = require('node-fetch')

const cat ='https://aws.random.cat/meow';
const dog = 'https://dog.ceo/api/breeds/image/random';
const wiki='https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=a';

bot.on('ready',async () => {

  console.log('Destiny arrives all the same. And now, its here. Or should I say, I am.');

});

bot.on('message', async message => {
  let args = message.content.substring(PREFIX.length).split(' ');


  switch(args[0]){
    case 'shit':
        message.channel.sendMessage("In all my years of conquest, violence, slaughter, it was never personal. But I'll tell you now, what I'm about to do to you "+(message.author.username)+"... Im gonna enjoy it. Very, very much.");
        break;
      case 'cat':
        const fetchCat =  await fetch(cat);
        const myJsonCat =  await fetchCat.json();
        message.channel.sendMessage(myJsonCat);
        break;
      case 'fuck':
        message.channel.sendMessage('BOY! I would reconsider your current course!');
        break;
      case 'dog':
        const fetchDog =  await fetch(dog);
        const myJsonDog =  await fetchDog.json();
        message.channel.sendMessage(myJsonDog.message);
        break;

      case 'wiki':
          var word= args[1];

          if (args.length ==3){
             var word= args[1]+'%20'+args[2];
                    }
          const fetchWiki =  await fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles='+word);
          console.log(word);
          const myJsonWiki =  await fetchWiki.json();
          //return(console.log(myJson.query.pages));
        //  (console.log(data.query.pages));
          let page = myJsonWiki.query.pages;
          let pageId = Object.keys(myJsonWiki.query.pages)[0];
          console.log(pageId);

          let content = page[pageId].extract;
          let sentence=content.split('.')
          message.channel.sendMessage(sentence[0])

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
