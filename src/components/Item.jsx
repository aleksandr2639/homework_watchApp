import { useState, useEffect } from "react";
import { getTimeZoneTime } from '../utils/getTimeZoneTim';

const Item = ({ id, timezone, city, deleteCity }) => {
  const [time, setTime] = useState(getTimeZoneTime(timezone));
  const { hours, minutes, seconds } = time;

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTimeZoneTime(timezone));
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  }, [timezone, id]);

  const onBtnDeleteClick = () => {
    deleteCity(id);
  }


  return (
    <li className="list_item">
      <span className="name_city">{city}</span>
      <span className="time_city">{hours}:{minutes}:{seconds}</span>
      <button className="delete_item"  onClick={onBtnDeleteClick}></button>
    </li>
  )
}

export default Item