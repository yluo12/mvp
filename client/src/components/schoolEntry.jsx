import React from 'react';
import axios from 'axios';
import { HeartIcon, UsersIcon, MapPinIcon, ChatBubbleBottomCenterTextIcon, XMarkIcon } from '@heroicons/react/24/outline';

function SchoolEntry ({school, fetchSchools}) {
  const location = `${school.address.split(',')[1]}, ${school.address.split(',')[2]}`;
  const [like, setLike] = React.useState(school.like ? 'like' : 'dislike');
  const [tour, setTour] = React.useState(String(school.tour ? 'toured' : 'tour'));
  const [showCloseBtn, setShowCloseBtn] = React.useState(false);

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

  const hoverHandlerShow = () => {
    setShowCloseBtn(true);
  };

  const hoverHandlerNotShow = () => {
    setShowCloseBtn(false);
  };

  const deleteHandler = (e) => {
    axios({
      url: '/schools',
      method: 'DELETE',
      data: {'name': school.name, 'zipCode': school.zipCode}
    })
      .then((dbRes) => {
        fetchSchools();
      })
      .catch((err) => {
        throw new Error(err, 'Cannot delete this school');
      });
  };

  React.useEffect(() => {
    fetchSchools();
  }, [like]);

  React.useEffect(() => {
    fetchSchools();
  }, [tour]);

  return (
    <div onMouseEnter={hoverHandlerShow} onMouseLeave={hoverHandlerNotShow}>
      <p>{school.name}</p>
      <ul className="tag-list">
        <li>{school.tags}</li>
        <li><MapPinIcon className="icon icon-location" />{location}</li>
      </ul>
      <p>{school.description}</p>
      <ul className="icon-list">
        <li onClick={likeHandler}><HeartIcon className="icon icon-like" />{like}</li>
        <li onClick={tourHandler}><UsersIcon className="icon icon-tour" />{tour}</li>
        <li><ChatBubbleBottomCenterTextIcon className="icon icon-review" /><a>Reviews</a></li>
      </ul>
      {showCloseBtn && <XMarkIcon className="icon icon-review" onClick={deleteHandler}/>}
    </div>
  );
}

export default SchoolEntry;