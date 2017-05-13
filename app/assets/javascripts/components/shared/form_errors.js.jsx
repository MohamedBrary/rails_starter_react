var FormErrors = React.createClass({
  propTypes: {
    errors: React.PropTypes.array
  },

  constructErrorsMessages: function(errors) {
    var messages = errors.map(function(error) {return <li>{error}</li>});
    return (
      <ul>{messages}</ul>
    );
  },

  render: function() {    
    return (
      <div>
      { this.props.errors.length != 0 && 
        <div className="alert alert-danger alert-dismissable" role="alert">
          <button className="close" data-dismiss='alert' type="button">
            <span aria-hidden="true">&times;</span>
            <span className="sr-only">Close</span>
          </button>
          <h4>
            {
              this.props.errors.length +
              " error(s) prohibited this user from being saved:"
            }
          </h4>
          {this.constructErrorsMessages(this.props.errors)}
        </div>
      }
      </div>
    );
  }
});
