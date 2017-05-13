var UsersMain = React.createClass({  
  render: function() {    
    switch (this.props.action){
      case 'show':
        return <UsersShow user={this.props.user} canDelete={this.props.canDelete} canEdit={this.props.canEdit} />;
      case 'edit':
      case 'update':
        return <UsersEdit user={this.props.user} canDelete={this.props.canDelete} authenticityToken={this.props.authenticityToken} />;
      default:
        return <UsersIndex users={this.props.users} params={this.props.params} canCreate={this.props.canCreate} canDelete={this.props.canDelete} canEdit={this.props.canEdit} />;
    }    
  }
});
