var Main = React.createClass({
  // propTypes: {
  //   controller: React.PropTypes.string,
  //   action: React.PropTypes.string,
  //   params: React.PropTypes.object,
  //   flash: React.PropTypes.array,
  //   currentUser: React.PropTypes.object
  // },

  render: function() {
    if ( this.props.flash )
      var flashMessages = this.props.flash.map( function(msg, index) {
        classNames = "alert alert-dismissable alert-" + (msg[0] == 'error' ? 'danger' : 'success');
        return (
          <div className={classNames}  role="alert" >
            <button className="close" data-dismiss='alert' type="button">
              <span aria-hidden="true"> &times;</span>
              <span className="sr-only">Close</span>
            </button>
            {msg[1]}
          </div> );
      });
    var componentToRender;
    switch (this.props.controller){
      case 'users':
        componentToRender = <UsersMain controller={this.props.controller} actions={this.props.actions} params={this.props.params} ></UsersMain>;
        break;
      default:
        componentToRender = <Home></Home>;
        break;
    }

    return (
      <div>
        <MainNavBar controller={this.props.controller} currentUser={this.props.currentUser}>
        </MainNavBar>
        <div className="container">
          {flashMessages}          
          {componentToRender}        
        </div>
      </div>
    );
  }
});
