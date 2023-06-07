import React from 'react';
import axios from 'axios';
import { HeartIcon, UsersIcon, MapPinIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

function SchoolEntry ({school, fetchSchools}) {
  const location = `${school.address.split(',')[1]}, ${school.address.split(',')[2]}`;
  const [like, setLike] = React.useState(school.like ? 'like' : 'dislike');
  const [tour, setTour] = React.useState(String(school.tour ? 'toured' : 'tour'));

  const likeHandler = () => {
    axios({
      url: '/schools/like',
      method: 'PATCH',
      data: {'name': school.name, 'zipCode': school.zipCode, 'like': school.like}
    })
      .then((dbRes) => {
        setLike(dbRes.data ? 'like' : 'dislike');
      })
      .catch((err) => {
        throw new Error(err, 'Cannot update tour for this school');
      });
  };

  const tourHandler = () => {
    axios({
      url: '/schools/tour',
      method: 'PATCH',
      data: {'name': school.name, 'zipCode': school.zipCode, 'tour': school.tour}
    })
      .then((dbRes) => {
        setTour(dbRes.data ? 'toured' : 'tour');
      })
      .catch((err) => {
        throw new Error(err, 'Cannot update tour for this school');
      });
  };

  React.useEffect(() => {
    fetchSchools();
  }, [like]);

  React.useEffect(() => {
    fetchSchools();
  }, [tour]);

  return (
    <div>
      <p>{school.name}</p>
      <ul className="tag-list">
        <li>{school.tags}</li>
        <li><MapPinIcon className="icon icon-tour" />{location}</li>
        <li>{school.description}</li>
      </ul>
      <ul className="icon-list">
        <li onClick={likeHandler}><HeartIcon className="icon icon-like" />{like}</li>
        <li onClick={tourHandler}><UsersIcon className="icon icon-tour" />{tour}</li>
        <li><ChatBubbleBottomCenterTextIcon className="icon icon-tour" /><a>Reviews</a></li>
      </ul>
    </div>
  );
}

export default SchoolEntry;