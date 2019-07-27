var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.$button.on('click', function() {
      Rooms.add();
    });
  },

  render: function() {
  },

  renderRoom: function(roomName) {
    var obj = {'roomName' : roomName};
    var HTMLMaker = _.template(`<option id="<%= roomName %>"><%= roomName %>
    </option>`);

    var DOMNode = HTMLMaker(obj);
    this.$select.append(DOMNode);

    // messageView.render(message);
  }

};
