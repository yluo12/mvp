import React from 'react';
import SchoolEntry from './SchoolEntry.jsx';

function SchoolList ({currentList, fetchSchools}) {
  return (
    <div>
      {currentList.map((school) => {
        return <SchoolEntry school={school} key={school._id} fetchSchools={fetchSchools}/>
      })}
    </div>
  );
}

export default SchoolList;