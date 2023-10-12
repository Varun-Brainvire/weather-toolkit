import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './weather';
import { useDispatch,useSelector } from 'react-redux';
import { getName,getData } from './Slices/weatherSlice';
import { getPosts } from './Slices/weatherSlice';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {

  const [city,setCity] = useState("")
  const key = "b85e1e72aab3b05793864ded202153d5"
  const [weatherData,setWeatherData] = useState([])
  const dispatch = useDispatch()
  const data = useSelector((state)=>state.data)
  console.log(data)
  useEffect(() => {
    // dispatch(getPosts())
  },[])

  const dataNew = useSelector((state) => state.weatherData.data)
  console.log(dataNew)

  const handleText = (e) => {
    setCity(e.target.value)
    dispatch(getName(e.target.value))
  }
  // console.log(city)


  const handleSubmit = async (e) => {
    if(city != "" && city != undefined) {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`)
      // const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${key}`)
      const data = await response.json()
      setWeatherData(data)
      // let temp = weatherData.main
      setCity("")
    }
    else {

    }
      
    }
    // console.log(weatherData)

    if(weatherData == undefined) {
      alert("Place you have entered does not exist")
    }

  return (
    <div className="App">
      <h3>Weather App</h3>
      <h3>Search here for Weather Information</h3>
      <input className='input' type='text' onChange={handleText} value={city}/>    
      <button className='button' onClick={() => {dispatch(getPosts())}} type='submit'>Search</button>

      <div className='dropdown'>

      </div>


      
      {dataNew.length !== 0 ? <Weather weatherData={dataNew}/> : "" }
      {weatherData.length !== 0 ? <Weather weatherData={weatherData}/> : ""  }
      {/* <Weather weatherData={weatherData} /> */}

    </div>
  );
}

export default App;
