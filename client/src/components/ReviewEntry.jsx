import React from 'react';

function ReviewEntry({review}) {

  return (
    <div>
      <img src="https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder-300-grey.jpg" alt="user-placeholder" className="user-img"/>
      <p>{'"' + review + '"'}</p>
    </div>
  );
}

export default ReviewEntry;