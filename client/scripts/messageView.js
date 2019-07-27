var MessageView = {

  render: _.template(`
      <div class="<%= roomname %>">
        <div class = "username <%= usernameID %>"id ="<%= dateNow %>">
          <%= username %>
        </div>

        <div>
        <%= text %>
        </div>
      </div>
    `)

};