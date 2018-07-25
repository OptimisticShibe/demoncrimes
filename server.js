
//
/////////
//      BEGINNING OF THE BOT CODE    //
/////////
//

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.js");
const jairusCommands = require("./jairusCommands.js");
const otherCommands = require("./playerCommands.js");
const fs = require("fs");
const playerArray = [
  config.JairusID,
  config.RegalID,
  config.WindyID,
  config.SylarID,
  config.SproutID,
  config.JoshID,
  config.EliID
];

///////

client.login(config.token);

// logged the fuck in vvv
client.on("ready", () => {
  console.log("I'm online!!");
  client.user.setActivity("Crimes??");
});

// BELOW is what the bot starts doing, once pinged

client.on("message", message => {
  // EMOJI for shenanigans
  const voreTimeEmoji = client.emojis.find("name", "voretime");
  //const welpCatEmoji = client.emojis.find("name", "welp");

  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(config.prefix) || message.author.bot) {
    return;
  }
  if (message.author.bot) {
    return;
  }
  // code n shit

  if (message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content
    .slice(config.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  //
  /////////
  //      C O M M A N D S
  /////////
  //
  
  var currentUserId = message.author.id;
  var registeredUser = 0;
  var commandUser; // Identifying player w/ easy array position
  var commandsList; // Idenitifying which list of commands to use
  var whichPlayerCommand;

  // ping pong command (tesing works and such i guess)
  if (command === "ping") {
    message.channel.send("crimes?");
  }
  doTheThing();

  function doTheThing() {
  for (let i = 0; i < playerArray.length; i++) {
    if (currentUserId == config.JairusID) {
    commandsList = jairusCommands;
    performJairusCommand(command);
    break; // stop the loop
    }
    else if (currentUserId == playerArray[i]) {
      commandsList = otherCommands;
      performPlayerCommand(command);
      break;
      }
  }
  }
  
  function performJairusCommand(command) {
    message.channel.send(commandsList.doMessageCommand(command));
  }
  
  function performPlayerCommand(command) {
    var emoji;
    if (otherCommands.customEmoji != "" || null){
    // var emoji = whichEmoji(otherCommands.customEmoji);
    }
   message.channel.send(commandsList.playerCommand(message, command));
    
    
    
  }
  
//   function whichEmoji(emojiName) {
//     var customEmoji = client.emojis.find("name", emojiName);
//     return customEmoji
    
//   }

  
  
  //  performCommand(command);
});
