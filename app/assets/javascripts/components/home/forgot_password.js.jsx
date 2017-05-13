var ForgotPassword = React.createClass({
  propTypes: {
    user: React.PropTypes.object
  },

  render: function() {
    return (
      <div>
        <div>User: {this.props.user}</div>
      </div>
    );
  }
});
