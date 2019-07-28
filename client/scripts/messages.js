var Messages = {

  currentMessages: [],

  sanitize: function(message) {
    // console.log(message);
    var keys = Object.keys(message);
    keys.forEach(function(key) {
      console.log(key);
      if (key !== 'createdAt') {
        message[key] = Messages.getRidOfSpecialCharacters(message[key]);
      }
    });
    return message;
  },
  getRidOfSpecialCharacters: function(text) {
    var specialCharacters = `\\!"#$%&'()*+,-./:;<=>?@[]^_{|}~`;
    var backTick = "`";
    if(typeof text === 'string') {
      for (var i = 0; i < text.length; i++) {
        if (backTick.indexOf(text[i]) !== -1 || specialCharacters.indexOf(text[i]) !== -1) {
          text = text.substr(0, i) + text.substr(i+1, text.length - 1);
        }
      }
    }

    return text;
  }


};