var Friends = {

  friendList: {},

  toggleStatus: function(ID) {
    if (Friends.friendList[ID]) {
      Friends.friendList[ID] = false;
      return false;
    } else {
      Friends.friendList[ID] = true;
      return true;
    }
  },

  initialize: function() {

  },

};