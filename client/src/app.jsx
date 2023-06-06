import React from 'react';
import axios from 'axios';

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
      <navBar />
      <section className="schoolList">
        <searchSchool />
        <addSchool />
        <schoolList />
      </section>
      <section className="map">
        <schoolMap />
      </section>
    </div>
  );
}

export default App;