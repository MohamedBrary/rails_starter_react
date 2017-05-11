var ProfileMain = React.createClass({
  propTypes: {
    controller: React.PropTypes.string,
    action: React.PropTypes.string,
    user: React.PropTypes.object,
    canDelete: React.PropTypes.bool,
    canEdit: React.PropTypes.bool
  },

  render: function() {
    return (
      <div>
        <div>Controller: {this.props.controller}</div>
        <div>Action: {this.props.action}</div>
        <div>User: {this.props.user}</div>
        <div>Can Delete: {this.props.canDelete}</div>
        <div>Can Edit: {this.props.canEdit}</div>
      </div>
    );
  }
});
