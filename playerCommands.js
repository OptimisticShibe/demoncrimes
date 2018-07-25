var output;
const main = require("./server.js");
const config = require("./config.js");
const cList = require("./commandsList.js");
const cEmoji = require("./customEmoji.js");
var cEmojiVar = "";
var userIdentity;
const playerArray = main.playerArray;

var currentWeek = "7/24/2018"; // Update this each time we change things




module.exports = {

  playerCommand: function playerCommand(message, command) {
    var whichPlayerCommand = message.author.id;
    console.log(whichPlayerCommand);

    if (whichPlayerCommand == config.RegalID) {
      //return userIdentity = "regal";
      return regalCommand(message, command);
    }

    else if (whichPlayerCommand == config.WindyID) {
      return windyCommand(message, command);
    }

    else if (whichPlayerCommand == config.SylarID) {
      return sylarCommand(message, command);
    }

    else if (whichPlayerCommand == config.SproutID) {
      return sproutCommand(message, command);
    }

    else if (whichPlayerCommand == config.JoshID) {
      return joshCommand(message, command);
    }

    else if (whichPlayerCommand == config.EliID) {
      return eliCommand(message, command);
    }
    
     else if (whichPlayerCommand == config.JairusID) {
      return jairusCommand(message, command);
    }

    
    else {
    output = "Hello stranger! This bot is not for you >:3"
      return output;
    }
  }
};

                              // REGAL STUFF
// MESSAGE = the actual command message object || COMMAND = the parsed, lower case, command identified after the prefix
function regalCommand(message, command) {
  output = "";
  var currentUserName = message.author.username;
  switch (command) {
    case "help":
      let options = "";
      let i = 1;
      function printOptions(){
        cList.commandsRegal.forEach(function(entry) {
          options += i + ". " + entry + "\n";
          i++;
        });
      }
      printOptions();
      output = "Hi, " + currentUserName + "! Here are your command options:\n\n```md\n" + options + "```\n_commands last updated: " + currentWeek + "_";
      break;
      
      case "wink": // Output Only
      
      // IDEA: candy crush command. you know you want it
      // IDEA2: since his name is styg, how about an 8ball with random greek myth facts. 
      // or just random science facts we can groan at >:)
      //// These are great ideas thank u 
      
      output = "wink-wonk ;)";
      
      break;
      
    case "vore":
      
      cEmojiVar = "voretime";
      output = "VORE TIME BABAYY";
      
      module.exports.cEmojiVar = cEmojiVar;
      
      break;
      
    case "barry":
      
      cEmojiVar = "barryboi";
      output = "bzzzz";
      
      module.exports.cEmojiVar = cEmojiVar;
      
      cEmojiVar = "";
      
      break;
      
    case "tedtime":
      
      output = ('Ted Time', { files: ["https://cdn.glitch.com/eab5f592-3866-4966-affa-7d8a4b89f26f%2FMoe%20Ted.PNG"]});
      console.log("Here is the playerCommands output: " + output);
      //output = ('Message that goes above image', {files: ["./image-to-send.png"]});
      
      break;
                    /////////
      /////// OTHER COMMANDS GO HERE ///////
                    /////////
      
      
    default:
      output = "I'm sorry, " + currentUserName + ", but I have no idea what you're talking about.";
      break;
  }
  return output;
}



                              // WINDY STUFF

function windyCommand(message, command) {  
  output = "";
  var currentUserName = message.author.username;
  switch (command) {
    case "help":
      let options = "";
      let i = 1;
      function printOptions(){
        cList.commandsWindy.forEach(function(entry) {
          options += i + ". " + entry + "\n";
          i++;
        });
      }
      printOptions();
      output = "Hi, " + currentUserName + "! Here are your command options:\n\n```md\n" + options + "```\n_commands last updated: " + currentWeek + "_";
      break;
      
    case "wink":
      
      // IDEA: a 8-ball style randomized 'winking' scenario?
      // IDEA2: put in ability to wink @ somebody which does....something?? idk lol
      
      
      // output = ({files: ["https://cdn.glitch.com/3e79cc0e-b90d-4585-bea0-adc26da04ff5%2FScreen%20Shot%202018-07-25%20at%206.12.58%20PM.png"]});
      
      break;
      
    case "vore":
      cEmojiVar = "voretime";
      output = "The OG Vore Queen!!";
      
      module.exports.cEmojiVar = cEmojiVar;
      
      break;
                    /////////
      /////// OTHER COMMANDS GO HERE ///////
                    /////////
      
    case "test":
      output = "3"; 
      output = "2";
      output = "1!";
      break;
      
    case "hey":
      
      cEmojiVar = "smirkcat";
      output = "\n\n\n\n\n\n...binch";
      
      module.exports.cEmojiVar = cEmojiVar;
      
      cEmojiVar = "";
      
      break;
      
      
    default:
      output = "I'm sorry, " + currentUserName + ", but I have no idea what you're talking about.";
      break;
  }
  return output;
}



                              // SYLAR STUFF

function sylarCommand(message, command) {
  var currentUserName = message.author.username;
  switch (command) {
    case "help":
      let options = "";
      let i = 1;
      function printOptions(){
        cList.commandsSylar.forEach(function(entry) {
          options += i + ". " + entry + "\n";
          i++;
        });
      }
      printOptions();
      output = "Hi, " + currentUserName + "! Here are your command options:\n\n```md\n" + options + "```\n_commands last updated: " + currentWeek + "_";
      break;
      
      
                    /////////
      /////// OTHER COMMANDS GO HERE ///////
                    /////////
      
      
    default:
      output = "I'm sorry, " + currentUserName + ", but I have no idea what you're talking about.";
      break;
  }
  return output;
}




                              // SPROUT STUFF

function sproutCommand(message, command) {
  var currentUserName = message.author.username;
  switch (command) {
    case "help":
      let options = "";
      let i = 1;
      function printOptions(){
        cList.commandsSprout.forEach(function(entry) {
          options += i + ". " + entry + "\n";
          i++;
        });
      }
      printOptions();
      output = "Hi, " + currentUserName + "! Here are your command options:\n\n```md\n" + options + "```\n_commands last updated: " + currentWeek + "_";
      break;
      
      
                    /////////
      /////// OTHER COMMANDS GO HERE ///////
                    /////////
      
      
    default:
      output = "I'm sorry, " + currentUserName + ", but I have no idea what you're talking about.";
      break;
  }
  return output;
}



                              // JOSH STUFF

function joshCommand(message, command) {
  var currentUserName = message.author.username;
  switch (command) {
    case "help":
      let options = "";
      let i = 1;
      function printOptions(){
        cList.commandsJosh.forEach(function(entry) {
          options += i + ". " + entry + "\n";
          i++;
        });
      }
      printOptions();
      output = "Hi, " + currentUserName + "! Here are your command options:\n\n```md\n" + options + "```\n_commands last updated: " + currentWeek + "_";
      break;
      
      
                    /////////
      /////// OTHER COMMANDS GO HERE ///////
                    /////////
      
      
    default:
      output = "I'm sorry, " + currentUserName + ", but I have no idea what you're talking about.";
      break;
  }
  return output;
}


                              // ELI STUFF

function eliCommand(message, command) {
  var currentUserName = message.author.username;
  switch (command) {
    case "help":
      let options = "";
      let i = 1;
      function printOptions(){
        cList.commandsEli.forEach(function(entry) {
          options += i + ". " + entry + "\n";
          i++;
        });
      }
      printOptions();
      output = "Hi, " + currentUserName + "! Here are your command options:\n\n```md\n" + options + "```\n_commands last updated: " + currentWeek + "_";
      break;
      
      
                    /////////
      /////// OTHER COMMANDS GO HERE ///////
                    /////////
      
      
    default:
      output = "I'm sorry, " + currentUserName + ", but I have no idea what you're talking about.";
      break;
  }
  return output;
}
  
  
  
                                // JAIRUS STUFF
  
  function jairusCommand(message, command) {
  var currentUserName = message.author.username;
  switch (command) {
    case "help":
      let options = "";
      let i = 1;
      function printOptions(){
        cList.commandsJairus.forEach(function(entry) {
          options += i + ". " + entry + "\n";
          i++;
        });
      }
      printOptions(); // what if it says something like "hello overlord" or something equally venerating. dm gets special treatment
      output = "Hi, " + currentUserName + "! Here are your command options:\n\n```md\n" + options + "```\n_commands last updated: " + currentWeek + "_";
      break;
      
      
                    /////////
      /////// OTHER COMMANDS GO HERE ///////
                    /////////
      
      
    default:
      output = "I'm sorry, " + currentUserName + ", but I have no idea what you're talking about.";
      break;
  }
  return output;
  }