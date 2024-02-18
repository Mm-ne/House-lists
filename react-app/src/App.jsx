/* eslint-disable no-unused-vars */

import { useState } from 'react'
import './App.css'

import Banner from './components/Banner';
import HousesList from './components/HousesList';

import House from './components/House';

function App() {
  const [selectedHouse, setSelectedHouse] = useState();

  return (
    <>
      <Banner />
      {selectedHouse ? (<House house= {selectedHouse} />)
      :(<HousesList selectHouse={setSelectedHouse} />)}
      

    </>
  )
}

export default App
