var MessagesView = {

  $chats: $('#chats'),
  $message: $('#message'),
  $submit: $('.submit'),
  count : 0,

  initialize: function() {
    MessagesView.$submit.on('submit click', function() {
      MessagesView.add();
    });
  },

  render: function() {
  },

  renderMessage: function(message) {
    message = Messages.sanitize(message);
    var dateNow = Date.now();
    message.count = this.count;
    message.username = message.username !== undefined ? message.username: '';
    message.usernameID = message.username !== undefined ? Messages.getRidOfSpecialCharacters(message.username.split(' ').join('')) : '';
    message.roomname = message.roomname !== undefined ? message.roomname: '';
    message.text = message.text !== undefined ? message.text: '';
    message.objectId = message.objectId !== undefined ? message.objectId: this.generateRandomObjectId();
    message.createdAt = Date(message.createdAt).substr(0,21);
    var HTMLMaker = MessageView.render;
    // console.log(message);
    var DOMNode = HTMLMaker(message);
    $('#chats').prepend(DOMNode);
    var IDToAddToFriendList = message.usernameID;

    // update css to be red for new messages from friends
    if (Friends.friendList[IDToAddToFriendList]) {
      $("#"+message.objectId).css('color', 'red');

      $("#"+message.objectId).addClass('friend');
    }

    // update css to be red/black when clicking (adding/removing from friendslist) usernames
    $('#' + message.objectId).on('click', function() {
      Friends.toggleStatus(IDToAddToFriendList);
    });
    // messageView.render(message);
    this.count++;
  },

  add: function() {
    var messages = MessagesView.$message.val()
    var obj = {
      username: App.username,
      text: messages,
      roomname: RoomsView.$select.val(),
      // objectId: 'local'
    }
    obj.objectId = this.generateRandomObjectId();
    obj.createdAt = Date(Date.now()).toString();
    Parse.create(obj);
    this.renderMessage(obj);
  },

  generateRandomObjectId: function(){
    var objectId = '';
    for (var i = 0; i < 15; i++) {
      objectId += String.fromCharCode(Math.floor((Math.random() * 26)) + 65);
    }
    return objectId;
  }
};