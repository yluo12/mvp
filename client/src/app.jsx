import React from 'react';
import axios from 'axios';
import { NextUIProvider } from '@nextui-org/react';
import NavBar from './components/NavBar.jsx';
import SearchSchool from './components/SearchSchool.jsx';
import AddSchoolForm from './components/AddSchool.jsx';
import SchoolList from './components/SchoolList.jsx';
import SchoolMap from './components/SchoolMap.jsx';

function App () {
  const [schools, setSchools] = React.useState([]);
  const [currentList, setCurrentList] = React.useState([]);

  const fetchSchools = () => {
    axios({
      url: '/schools',
      method: 'get'
    })
      .then((res) => {
        console.log(res.data, 'this is school list from app.jsx');
        setSchools(res.data);
        setCurrentList(res.data);
      })
      .catch((err) => {
        throw new Error(err, 'Failed to get school list');
      });
  };

  React.useEffect(() => {
    fetchSchools();
  }, []);

  return (
    <NextUIProvider>
      <NavBar />
      <section className="schoolList">
        <SearchSchool schools={schools} setCurrentList={setCurrentList}/>
        <AddSchoolForm fetchSchools={fetchSchools} />
        <SchoolList currentList={currentList} fetchSchools={fetchSchools}/>
      </section>
      <section>
        <SchoolMap currentList={currentList}/>
      </section>
    </NextUIProvider>
  );
}

export default App;