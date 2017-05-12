var UsersIndexTableRow = React.createClass({
  // propTypes: {
  //   user: React.PropTypes.object,
  //   canDelete: React.PropTypes.bool,
  //   canEdit: React.PropTypes.bool,
  //   canShow: React.PropTypes.bool
  // },

  render: function() {
    return (
      <tr>
        <td>
          <img src={ this.props.user.image } width="20px"/>
          { ' ' + this.props.user.name }
        </td>
        <td>
          { this.props.user.email }
        </td>
        <td>
          { this.props.user.role }
        </td>
        <td>
          <a href={ this.props.user.showPath }>
            Show
          </a>
        </td>
        { this.props.canEdit && 
          <td>
            <a href={this.props.user.editPath} >
              Edit
            </a>
          </td>
        }
        { this.props.canDelete && 
          <td>
            <a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href={this.props.user.showPath}>
              Destroy
            </a>
          </td>
        }          
      </tr>
    );
  }
});
