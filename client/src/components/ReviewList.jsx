import React from 'react';
import axios from 'axios';
import { Modal, Input } from '@nextui-org/react';
import ReviewEntry from './ReviewEntry.jsx';

function ReviewList({school, fetchSchools}) {
  const [showAddReview, setShowAddReview] = React.useState(false);

  const showHandler = () => setShowAddReview(!showAddReview);
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());
    const inputEl = document.getElementsByClassName('input-newReview');
    inputEl[0].value = '';
    axios({
      url: '/schools/reviews',
      method: 'PATCH',
      data: {
        name: school.name,
        zipCode: school.zipCode,
        review: formJson.newReview
      }
    })
      .then(() => {
        fetchSchools();
      })
      .catch((err) => {
        throw new Error(err, 'Failed to save the review');
      });
  };

  return (
    <Modal.Body>
      <button className="btn btn-addReview" onClick={showHandler}>Add a new review</button>
      {showAddReview &&
      <form className="form form-review" onSubmit={submitHandler}>
        <input className="input-newReview" name="newReview" required/>
        <button className="btn btn-saveReview" type="submit">Save</button>
      </form>
      }
      {school.reviews.map((review) => {
      return <ReviewEntry review={review} key={review}/>;
      })}
    </Modal.Body>
  );
}

export default ReviewList;