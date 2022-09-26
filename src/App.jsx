import { useState, useRef } from 'react'
import mapboxgl from 'mapbox-gl' // eslint-disable-line import/no-webpack-loader-syntax
import './App.css'
import Map, {Marker} from 'react-map-gl'
import Header from './Header'

mapboxgl.accessToken = 'pk.eyJ1IjoianVhbm1hLXJvbWVybyIsImEiOiJjbDQ0d2d2dWgwNW80M2luanlqM2RnNTdjIn0.04LywtPiR8lchOAThRe8wg';

function App() {  
  const mapRef = useRef()
  const map = mapRef.current
  const [lng, setLng] = useState(-122.08385)
  const [lat, setLat] = useState(37.38605)   
  
  const [visibilityState, setVisibilityState] = useState('hidden')  

  const goTo = ()=> {    
    map.flyTo({center: [lng, lat], zoom: 14, duration: 3000})  
    setVisibilityState('visible')
  }

  return (
    <div>
      <Header  
        goTo={goTo}       
        setLng={setLng} 
        setLat={setLat}                  
      />
      <Map   
        className='mapa'
        ref={mapRef}
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 14
        }}
        style={{width:1360, height: 440}}
        mapStyle="mapbox://styles/mapbox/streets-v9"        
        >
        <Marker 
          longitude= {lng} 
          latitude= {lat} 
          anchor= "bottom"
          style={{visibility:visibilityState}}          
          >
          <img src="/icon-location.svg" />
        </Marker>
      </Map>       
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#" target="_blank">Juanma Romero</a>.
      </div>
    </div>
  )
}

export default App
