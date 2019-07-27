var Rooms = {

  rooms : [],

  add: function() {
    addRoom = window.prompt("Add a room: ");
    if (this.rooms.indexOf(addRoom) === -1) {
      this.rooms.push(addRoom);
      RoomsView.renderRoom(addRoom);
    }

  }


};