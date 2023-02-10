import React, {useState} from "react";

function NewPlantForm({plants, setPlants}) {
  const [form, setForm] = useState({})

  let handleChange = (e)=>{
    let value = e.target.value;
    let name = e.target.name;
    setForm({...form, [name]:value})
  }

  let handleSubmit = (e)=>{
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then(data => setPlants([data], ...plants))
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit= {handleSubmit}>
        <input onChange = {handleChange} type="text" name="name" placeholder="Plant name" />
        <input onChange = {handleChange}type="text" name="image" placeholder="Image URL" />
        <input onChange = {handleChange}type="number" name="price" step="0.01" placeholder="Price" />
        <button onChange = {handleChange}type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
