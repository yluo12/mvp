import React from 'react';
import axios from 'axios';
import ReviewModal from './ReviewModal.jsx';
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

    console.log(e.target);
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
      <p className="school-name">{school.name}</p>
      <ul className="tag-list">
        <li className="tag-opening">{school.tags}</li>
        <li className="tag-type">{school.type}</li>
        <li className="tag-location"><MapPinIcon className="icon icon-location" />{location}</li>
      </ul>
      <p className="school-description">{school.description}</p>
      <ul className="icon-list">
        <li onClick={likeHandler}><HeartIcon className="icon icon-like" style={like === 'like' ? {"fill": "#f03e3e", "stroke": "#f03e3e"} : {}}/>{like}</li>
        <li onClick={tourHandler}><UsersIcon className="icon icon-tour" />{tour}</li>
        <ReviewModal school={school} fetchSchools={fetchSchools}/>
      </ul>
      {showCloseBtn && <XMarkIcon className="icon icon-close" onClick={deleteHandler}/>}
    </div>
  );
}

export default SchoolEntry;