module.exports = {
  doMessageCommand: function doMessageCommand(message) {
    var output;
    
    switch (message) {
        
      case "fuckupdate": // Using this to check if the bot has updated
        output = "this was a test";
        break;

      default:
        output = "Unknown Command.";
        break;
    }
    return output;
  }
};
