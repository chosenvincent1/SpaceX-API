import './App.css';
import Banner from './components/Banner';
import SearchForm from './components/SearchForm';
import DataGrid from './components/DataGrid';
import PopUp from './components/PopUp';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [capsules, setCapsules] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [search, setSearch] = useState({status: '', originalLaunch: '', type: ''})

  useEffect(()=>{
    const fetchCapsules = async ()=> {
      const response = await axios.get('https://api.spacexdata.com/v3/capsules');
      if(response.status === 200) {
        setCapsules(response.data);
        setIsLoading(false);
      }
      console.log(response);
    }
    fetchCapsules();
  }, [])

  if(isLoading){
    return <div>Loading...</div>
  }

  return (
    <div>
      {selectedItem && <PopUp selectedItem={selectedItem} onClose={()=> setSelectedItem(null)} />}
      <Banner />
      <SearchForm search={search} setSearch={setSearch} />
      <DataGrid capsules={capsules} handleClickedItem={setSelectedItem} search={search} />
    </div>
  )
}

export default App
