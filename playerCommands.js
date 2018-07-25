var output;
const main = require("./server.js");
const config = require("./config.js");
const cList = require("./commandsList.js");
const playerArray = main.playerArray;

var currentWeek = "7/24/2018"; // Update this each time we change things

module.exports = {

  playerCommand: function playerCommand(message, command) {
    var whichPlayerCommand = message.author.id;
    console.log(whichPlayerCommand);

    if (whichPlayerCommand == config.RegalID) {
      console.log("you are Regal!");
      return regalCommand(message, command);
    }

    else if (whichPlayerCommand == config.WindyID) {
      return windyCommand(command);
    }

    else if (whichPlayerCommand == config.SylarID) {
      return sylarCommand(command);
    }

    else if (whichPlayerCommand == config.SproutID) {
      return sproutCommand(command);
    }

    else if (whichPlayerCommand == config.JoshID) {
      return joshCommand(command);
    }

    else if (whichPlayerCommand == config.EliID) {
      return eliCommand(command);
    }
    

    else {
    output = "Hello stranger! This bot is not for you >:3"
      return output;
    }
  }
};

function regalCommand(message, command) {
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
      
      case "wink":
      
      // IDEA: a 8-ball style randomized 'winking' scenario?
      // IDEA2: put in ability to wink @ somebody which does....something?? idk lol
      
      output = "wink-wonk ;)";
      
      break;
      
    case "vore":
      // Because of COURSE
      
      //output = "`${voreTimeEmoji}`" + "\n\n" + "`C R O N C H !`";
      
      module.exports.customEmoji = "voretime";
      output = "`${emoji}`" + "\n\n" + "`C R O N C H !`";
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

function windyCommand(message, command) {
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
      
      output = "wink-wonk ;)";
      
      break;
      
    case "vore":
      // Because of COURSE
      
      output = "<:voretime:471490889395470341>\n\n`C R O N C H !`";
      
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
