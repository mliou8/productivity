import React from 'react';

var todo = React.createClass({
    render: function() {
      return (
        <div>
        <form>
          <input
            type="text"
            placeholder="Your name"
          />
          <input
            type="text"
            placeholder="Say something..."
          />
          <input type="submit" value="Post" />
        </form>
      </div>
      )
    }
})

export default todo;