import React from 'react';
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline';

function SearchSchool ({schools, setCurrentList}) {
  const[term, setTerm] = React.useState('')
  const onChange = (e) => {
    setTerm(e.target.value);
  };

  const search = (e) => {
    const searchedList = [];
    schools.forEach((school) => {
      const nameLowerCase = school.name.toLowerCase();
      const termLowerCase = term.toLowerCase();
      if (nameLowerCase.indexOf(termLowerCase) > -1) {
       searchedList.push(school);
      }
    });
    setCurrentList(searchedList);
    const inputEl = document.getElementsByClassName('search');
    inputEl[0].value = '';
  }

  return (
    <div className="container-search">
      <input className="search" type="text" placeholder="search" onChange={onChange} />
      <MagnifyingGlassIcon className="icon icon-search" onClick={search} />
    </div>
  );
}

export default SearchSchool;