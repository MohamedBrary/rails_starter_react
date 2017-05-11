var UsersMain = React.createClass({  
  render: function() {    
    switch (this.props.action){
      case 'show':
        return <UsersShow user={this.props.user} canDelete={this.props.canDelete} canEdit={this.props.canEdit} ></UsersShow>;        
      case 'edit':
        return <UsersEdit user={this.props.user} canDelete={this.props.canDelete} ></UsersEdit>;
      default:
        return <UsersIndex users={this.props.users} canCreate={this.props.canCreate} canDelete={this.props.canDelete} canEdit={this.props.canEdit}></UsersIndex>;
    }    
  }
});
