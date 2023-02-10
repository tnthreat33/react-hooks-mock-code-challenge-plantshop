import React,{useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plant, setPlant]= useState([])
  const [search, setSearch] = useState("")

  useEffect(()=>{fetch("http://localhost:6001/plants")
  .then(res =>res.json())
  .then(data => setPlant(data))}, [])


  const filterArray = plant.filter((plant) =>
  plant.name.toLowerCase().includes(search.toLowerCase())
);

  return (
    <main>
      <NewPlantForm plants ={plant} setPlant = {setPlant}/>
      <Search setSearch = {setSearch}/>
      <PlantList plants={filterArray}/>
    </main>
  );
}

export default PlantPage;
