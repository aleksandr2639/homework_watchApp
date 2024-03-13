import { useState } from 'react';
import uuid4 from 'uuid4';

const Form = ({ addCity }) => {
  const [form, setForm] = useState({ city: '', timezone: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({...prevForm, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const city = { id: uuid4(), ...form }
    addCity(city);
    setForm({ city: '', timezone: '' });
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="city" className="label_city">Choose the city</label>
            <input type="text" id="city" name="city" value={form.city} onChange={handleChange} placeholder="Example, London" className="input_city" required={true}></input>
        </div>
        <div>
            <label htmlFor="timezone" className="label_timezone">Choose the timezone</label>
            <input type="number" id="timezone" name="timezone" value={form.timezone} onChange={handleChange} placeholder="Example, 1q" className="input_timezone" required={true}></input>
        </div>
        <button className="button_submit"></button>
    </form>
  )
}

export default Form