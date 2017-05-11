var UsersIndexControls = React.createClass({
  propTypes: {
    params: React.PropTypes.object,
    canCreate: React.PropTypes.bool
  },

  render: function() {
    return (
      <div>
        <div>Params: {this.props.params}</div>
        <div>Can Create: {this.props.canCreate}</div>
      </div>
    );
  }
});
