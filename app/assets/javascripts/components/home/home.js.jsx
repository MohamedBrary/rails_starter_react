var Home = React.createClass({
	propTypes: {
    params: React.PropTypes.object,
  },
  
  render: function() {
    return (
    	<div>
	    	<div className="page-header">
				  <h1>Welcome!</h1>
				</div>
				<p className="lead">This is a Rails 5 starter application to boost your MVP development.</p>
				<h4>What is featured till now:</h4>
				<ul>
				  <li>HAML and Bootstrap generators</li>
				  <li>Devise for authentication</li>
				  <li>Omniauth for Facebook and Google authentication</li>
				  <li>Pundit for authorization, and different roles for users</li>
				  <li>API with token authentication</li>
				  <li>Rspec and Capybara for automated testing, and test coverage for all implemented features</li>
				</ul>
				<h4>Login as an admin:</h4>
				<ul>
				  <li>Email:   'admin@rails5-starter.com' </li>
				  <li>Password: 'password'</li>
				</ul>
				<hr/>
				<a className="btn btn-primary" href="https://github.com/MohamedBrary/rails_starter" target="_blank">
				  Github Repository
				</a>
				<a className="btn btn-default" href="https://gist.github.com/MohamedBrary/12465abb009d5dbeadeb8cde9adb30b5" target="_blank" style={{marginLeft: '5px'}}>
				  Gist Used
				</a>
				<br/>
				<br/>
				<div className="alert alert-info">
				  For the same features but integerating with 
				  <b>
				    {' '}
				    React
				    {' '}
				  </b>
				  check this 
			    {' '}
				  <b>
				    <u>
				      <a href="https://github.com/MohamedBrary/rails_starter_react" target="_blank">
				        Github Repository
				      </a>
				    </u>
				  </b>
			    {' '}
				  .  
				</div>
			</div>

  	);
  }
});
