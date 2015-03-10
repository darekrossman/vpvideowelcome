import React from 'react';

const ActionIcons = React.createClass({

  render() {
    return (
      <div className="actions-icons fit" ref="actions">
      <svg height="512px" className="downarrow unresolved" viewBox="0 0 512 512" width="512px"><polygon points="396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5 "/></svg><svg className="pause" height="20px" version="1.1" viewBox="0 0 20 20" width="20px" xmlns="http://www.w3.org/2000/svg"><g fill="none"><g fill="#FFFFFF" id="Icons-AV" transform="translate(-42.000000, -85.000000)"><g id="pause-circle-outline" transform="translate(42.000000, 85.000000)"><path d="M7,14 L9,14 L9,6 L7,6 L7,14 L7,14 Z M10,0 C4.5,0 0,4.5 0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 C20,4.5 15.5,0 10,0 L10,0 Z M10,18 C5.6,18 2,14.4 2,10 C2,5.6 5.6,2 10,2 C14.4,2 18,5.6 18,10 C18,14.4 14.4,18 10,18 L10,18 Z M11,14 L13,14 L13,6 L11,6 L11,14 L11,14 Z" id="Shape"/></g></g></g></svg>  
      </div>
    );
  }

});

export default ActionIcons;