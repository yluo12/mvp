import React from 'react';

function ReviewEntry({review}) {

  return (
    <div className="review-entry">
      <img className="review-img" src="https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder-300-grey.jpg" alt="user-placeholder"/>
      <p className="review-text">{'"' + review + '"'}</p>
    </div>
  );
}

export default ReviewEntry;