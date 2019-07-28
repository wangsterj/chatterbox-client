var Friends = {

  friendList: {},

  toggleStatus: function(ID) {
    if (Friends.friendList[ID]) {
      Friends.friendList[ID] = false;
      $("."+ID).css('color', 'black');
      $("."+ID).removeClass('friend');
      return false;
    } else {
      Friends.friendList[ID] = true;
      $("."+ID).css('color', 'red');
      $("."+ID).addClass('friend');
      return true;
    }

  },

  initialize: function() {

  },
};