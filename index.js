
const Discord= require('discord.js');
const bot = new Discord.Client();
const PREFIX =  '!';

bot.login(token);
const fs= require("fs");
const fetch = require('node-fetch')

const cat ='https://aws.random.cat/meow';
const dog = 'https://dog.ceo/api/breeds/image/random';
const wiki='https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=a';

bot.on('ready',async () => {
  console.log(Math.random()*5);

});

bot.on('message', async message => {
  let args = message.content.substring(PREFIX.length).split(' ');


  switch(args[0]){
    case 'dance':
    var minDance=1;
    var maxDance=5;
    const randomDance =Math.floor(Math.random(1,5) * Math.floor(maxDance));

    message.channel.sendMessage(new Discord.Attachment('./dance/'+randomDance+'.gif', (randomDance+'.gif')) )
.catch(console.error);

    case 'reddit':
      var min=0;
      var max=25;
      const random =Math.floor(Math.random() * Math.floor(max));

      const reddit ='https://www.reddit.com/r/'+args[1].toUpperCase()+'/top/.json'

      const fetchReddit =  await fetch(reddit);
      const myJsonReddit =  await fetchReddit.json();
      const image =myJsonReddit.data.children[random].data.url;

      message.channel.sendMessage(image);

      break;
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

      case 'define':
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
