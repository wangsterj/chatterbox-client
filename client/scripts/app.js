var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    Friends.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    setInterval("App.update()",2000);

  },

  fetch: function(callback = ()=>{}) {
    console.log("updating")
    Parse.readAll((data) => {
      // examine the response from the server request:
      var i, html = "";
      for (i = data.results.length - 80; i > -1; i--) {
        // if ()
        // console.log(data.results[i]);
        MessagesView.renderMessage(data.results[i]);
      }
      callback();
    });
  },

  update: function(callback = ()=>{}) {
    console.log("updating")
    Parse.readAll((data) => {
      // examine the response from the server request:
      var i, html = "";
      var flag = false;
      console.log(data);
      for (i = data.results.length - 80; i > -1; i--) {
        if ($('#chats').children().children()[0].id === data.results[i].objectId) {
          flag = true;
        } else if (flag) {
          // console.log($('#chats').children().first())
          MessagesView.renderMessage(data.results[i]);
          $('#chats').children().last().remove();
          console.log('hi')
        }
      }
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
