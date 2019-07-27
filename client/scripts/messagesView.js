var MessagesView = {

  $chats: $('#chats'),
  $message: $('#message'),
  $submit: $('.submit'),

  initialize: function() {
    MessagesView.$submit.on('submit click', function() {
      console.log("click!")
      MessagesView.add();
    });
  },

  render: function() {
  },

  renderMessage: function(message) {
    var dateNow = Date.now();
    message.dateNow = dateNow;
    message.username = message.username !== undefined ? message.username: '';
    message.usernameID = message.username !== undefined ? message.username.split(' ').join('') : '';
    message.roomname = message.roomname !== undefined ? message.roomname: '';
    message.text = message.text !== undefined ? message.text: '';
    var HTMLMaker = MessageView.render;
    var DOMNode = HTMLMaker(message);
    $('#chats').append(DOMNode);

    var IDToAdd = message.usernameID;
      $('#' + dateNow).on('click', function() {
        Friends.toggleStatus(IDToAdd);
        console.log(Friends.friendList);
      });
    // messageView.render(message);
  },

  add: function() {
    var messages = MessagesView.$message.val()
    var obj = {
      username: App.username,
      text: messages,
      roomname: RoomsView.$select.val()
    }
    Parse.create(obj);
    this.renderMessage(obj);
  }
};