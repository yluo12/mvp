import React from 'react';
import axios from 'axios';
import NavBar from './components/NavBar.jsx';
import SearchSchool from './components/SearchSchool.jsx';
import AddSchool from './components/AddSchool.jsx';
import SchoolList from './components/SchoolList.jsx';
import SchoolMap from './components/SchoolMap.jsx';

function App () {
  const [schools, setSchools] = React.useState([]);

  React.useEffect(() => {
    axios({
      url: '/schools',
      method: 'get'
    })
      .then((res) => {
        console.log(res, 'this is school list from app.jsx');
        setSchools(res);
      })
      .catch((err) => {
        throw new Error(err, 'Failed to get school list');
      });
  }, []);

  return (
    <div>
      <NavBar />
      <section className="schoolList">
        <SearchSchool />
        <AddSchool />
        <SchoolList />
      </section>
      <section className="map">
        <SchoolMap />
      </section>
    </div>
  );
}

export default App;