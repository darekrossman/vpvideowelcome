var React = require('react');

var Card = React.createClass({

  render: function() {
    return (
      <div className="col s12 m4">
        <div className="card small">
          <div className="card-image">
            <img src={this.props.src}/>
            <span className="card-title">{this.props.title}</span>
          </div>
          <div className="card-content">
            <p>{this.props.description}</p>
          </div>
          <div className="card-action">
            <a href="#">This is a link</a>
            <a href='#'>This is a link</a>
          </div>
        </div>
      </div>
    );
  }

}); 

module.exports = Card;