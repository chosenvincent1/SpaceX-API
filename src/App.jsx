import './App.css';
import Banner from './components/Banner';
import SearchForm from './components/SearchForm';
import DataGrid from './components/DataGrid';
import Pagination from './components/Pagination';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    const fetchCapsules = async ()=> {
      const response = await axios.get('https://api.spacexdata.com/v3/capsules');
      console.log(response);
    }
  }, [])
  return (
    <>
      <Banner />
      <SearchForm />
      <DataGrid />
      <Pagination />

    </>
  )
}

export default App
