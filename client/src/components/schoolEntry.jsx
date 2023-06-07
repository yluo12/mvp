import React from 'react';
import { HeartIcon, UsersIcon, MapPinIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

function SchoolEntry ({school}) {
  const location = `${school.address.split(',')[1]}, ${school.address.split(',')[2]}`;
  // const [location, setLocation] = React.useState();
  return (
    <div>
      <p>{school.name}</p>
      <ul className="tag-list">
        <li>{school.tags}</li>
        <li><MapPinIcon className="icon icon-tour" />{location}</li>
        <li>{school.description}</li>
      </ul>
      <ul className="icon-list">
        <li><HeartIcon className="icon icon-like" />like</li>
        <li><UsersIcon className="icon icon-tour" />tour</li>
        <li><ChatBubbleBottomCenterTextIcon className="icon icon-tour" /><a>Reviews</a></li>
      </ul>
    </div>
  );
}

export default SchoolEntry;