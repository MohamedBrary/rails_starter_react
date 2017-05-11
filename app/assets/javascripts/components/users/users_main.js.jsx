var UsersMain = React.createClass({
  propTypes: {
    controller: React.PropTypes.string,
    action: React.PropTypes.string,
    params: React.PropTypes.object
  },

  render: function() {
    return (
      <div>
        <div>Controller: {this.props.controller}</div>
        <div>Action: {this.props.action}</div>
        <div>Params: {this.props.params}</div>
      </div>
    );
  }
});
