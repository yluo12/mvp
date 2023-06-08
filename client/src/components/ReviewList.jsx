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
    const inputEl = document.getElementsByClassName('input-review');
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
      <button onClick={showHandler}>Add a new review</button>
      {school.reviews.map((review) => {
      return <ReviewEntry review={review} key={review}/>;
      })}
      {showAddReview &&
      <form className="form form-review" onSubmit={submitHandler}>
        <Input
          clearable
          underlined
          labelPlaceholder="Review"
          name="newReview"
          className="input-review"
        />
        <button type="submit">Save</button>
      </form>
      }
    </Modal.Body>
  );
}

export default ReviewList;