const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received"); 
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.demoncrimes}.glitch.me/`);
}, 280000);


//
/////////
//      BEGINNING OF THE BOT CODE    //
/////////
//

const Discord = require("discord.js");
const client = new Discord.Client();
module.exports.client = client;
const config = require("./config.js");
//const jairusCommands = require("./jairusCommands.js");
const messageCommands = require("./playerCommands.js");
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
  client.user.setActivity("Crimes??")
});

// BELOW is what the bot starts doing, once pinged

client.on("message", (message) => {
  // EMOJI for shenanigans
  // const voretime = client.emojis.find("name", "voretime");
  //const welpCatEmoji = client.emojis.find("name", "welp");

  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(config.prefix) || message.author.bot) {return}
  if (message.author.bot) {return}
  if (message.content.indexOf(config.prefix) !== 0) {return};

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
  // if (command === "borz") {
  //  message.channel.send("borz boi", {files: ["https://cdn.glitch.com/eab5f592-3866-4966-affa-7d8a4b89f26f%2Fbig%20boi.png"]}); 
  // }

  postResponseToChannel();
  
  function postResponseToChannel() {
    // Local variables for THIS function:
    let commandOutput; //small variable that will store the unique command
    let emojiOutput = "";
    
    // Step one: identify the user, and perform case:
    
    commandOutput = messageCommands.playerCommand(message, command); // only need to pass the MESSAGE object, b/c that's what has the ID from Discord. This returns a STRING (we can update it to something else later)
    
    // Step two: custom emoji(?) + post to channel
    if (messageCommands.cEmojiVar != "") { // if yes, do emoji stuff
      
      var getEmoji = client.emojis.find("name", messageCommands.cEmojiVar); // assigns getEmoji variable w/ name of custom emoji
      
      message.channel.send(`${getEmoji}`); // prints emoji first, then regular output
      message.channel.send(commandOutput);
      
      messageCommands.cEmojiVar = ""; // reset the emoji var
    }
    else {
     message.channel.send(commandOutput); 
    }
    
    
    
    
    // Step four: send the command to the playerCommands list, and get back a response object
    
      
    
  }
  
  // function customEmoji(getEmoji) {
  //   console.log("Emoji Name: " + getEmoji);
  //   var emojiLiteral = "`${" + getEmoji + "}`";
  //   console.log(emojiLiteral);
  //   return emojiLiteral;
  // }

  // function jairusCheck() {
  // for (let i = 0; i < playerArray.length; i++) {
  //   if (currentUserId == config.JairusID) {
  //   commandsList = jairusCommands;
  //   performJairusCommand(command);
  //   break; // stop the loop
  //   }
  //   else if (currentUserId == playerArray[i]) {
  //     return commandsList = otherCommands; // TRYING return statement instead of breaking a loop
  //     // performPlayerCommand(command);
  //     // break;
  //     }
  // }
  // }
  
  // function performJairusCommand(command) {
  //   message.channel.send(commandsList.doMessageCommand(command));
  // }
  
//   function performPlayerCommand(command) {
//     var emoji;
//     if (otherCommands.customEmoji != "" || null){ // This is part of figuring out how to make the custom emoji thing work -- failing so far
//     // var emoji = whichEmoji(otherCommands.customEmoji);
//     }
   
//     console.log(commandsList.playerCommand(message, command));
//   // message.channel.send(commandsList.playerCommand(message, command)); // TODO: figure out exactly what this function receives by calling playerCommand
    
//     return commandsList.playerCommand(message, command);
    
//   }

  
//   function whichEmoji(emojiName) {
//     var customEmoji = client.emojis.find("name", emojiName);
//     return customEmoji
    
//   }

  
  
  //  performCommand(command);
});
