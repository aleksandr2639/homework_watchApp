import { useState } from 'react';
import Form from './Form';
import List from './List';

const Container =() => {
  const [cities, setList] = useState([]);

  const addCity = (city) => {
    setList((prevList) => [...prevList, city]);
  };

  const deleteCity = (id) => {
    const updatedCities = cities.filter((city) => city.id !== id);
    setList(updatedCities);
  };


    return (
    <>
      <Form addCity={addCity} />
      <List cities={cities} deleteCity={deleteCity} />
    </>
  )
}

export default Container;