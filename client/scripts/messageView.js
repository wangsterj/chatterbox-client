var MessageView = {

  render: _.template(`
      <div class="<%= roomname %> chat">
        <div class = "username <%- usernameID %>" id ="<%= objectId %>">
          <%- username %>
        </div>
        <div class="msgDate">
        <%- createdAt %>
        </div>

        <div class="msgText">
        <%- text %>
        </div>
      </div>
    `)

};