var UsersShow = React.createClass({
  propTypes: {
    user: React.PropTypes.object,
    canDelete: React.PropTypes.bool,
    canEdit: React.PropTypes.bool
  },

  render: function() {
    return (
      <div>
        <div className="page-header">
          <a href='/users' className='btn btn-default' >
            <span className="glyphicon glyphicon-list-alt"></span>
            {' '}Back
          </a>
          { this.props.canEdit && 
            <a href={this.props.user.editPath} className='btn btn-primary'>
              <span className="glyphicon glyphicon-pencil"></span>
              {' '}Edit
            </a>
          }
          <h1>Show User</h1>
        </div>
        <table>
          <tr>
            <td style={{paddingLeft: '150px'}}>
              <img src={this.props.user.image} width="100px"/>
            </td>
            <td style={{paddingLeft: '50px'}}>
              <p>
                <b>Name:</b>
              </p>
              <p>
                <b>Email:</b>
              </p>
              <p>
                <b>Role:</b>
              </p>
            </td>
            <td style={{paddingLeft: '20px'}}>
              <p>
                {this.props.user.name}
              </p>
              <p>
                {this.props.user.email}
              </p>
              <p>
                {this.props.user.role}
              </p>
            </td>
          </tr>
        </table>

      </div>
    );
  }
});
