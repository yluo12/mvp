import React from 'react';
import SchoolEntry from './SchoolEntry.jsx';

function SchoolList ({currentList}) {
  return (
    <div>
      {currentList.map((school) => {
        return <SchoolEntry school={school} key={school._id}/>
      })}
    </div>
  );
}

export default SchoolList;