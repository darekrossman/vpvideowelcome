import React from 'react';

const Card = React.createClass({

  render() {
    return (
      <div className="card">
        <div className="card-image">
          <img src={this.props.image}/>
        </div>
        <div className="card-content">
          <div className="card-badge">
            <img src={this.props.logo}/>
          </div>
          <h6>{this.props.merchant}</h6>
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
        </div>
        <div className="card-footer">
          <button className="btn">View Offer</button>
        </div>
      </div>
    );
  }

});

export default Card;