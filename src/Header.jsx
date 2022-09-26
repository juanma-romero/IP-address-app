import { useState} from 'react'

const Header = ({setLng, setLat, goTo}) => {
  const [result, setResult] = useState() 
  const [ipInput, setIpInput] = useState('')
  const [ipAddress, setIpAddress] = useState('')

  const handleSubmit = (e) => {
        e.preventDefault()        
        setIpAddress(ipInput)        
        setIpInput('') 
        fetchData()   
  }     
 
  const fetchData = async ()=>{
    const url = `http://ip-api.com/json/${ipAddress}?`    
    const resp = await fetch( url )
    const responseJson= await resp.json() 
    setResult( responseJson )    
    setLng(responseJson.lon)
    setLat(responseJson.lat)
    goTo()     
  }     

  return (
    <main>
      <h1>IP Address Tracker</h1>
      <div className="inputAndResult">
        <form name="requestForm" onSubmit={handleSubmit}>            
          <input 
            placeholder="   Search for any IP address or domain"
            type='text' 
            id='ipAddress' 
            name="ipAddress"
            value={ipInput}
            onChange={(e)=>setIpInput(e.target.value)}
            />  
          <button
            id='botonEnter' 
            type="submit"                          
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth="3" d="m2 1 6 6-6 6"/></svg>
          </button>
        </form>
        <div className='banner'>
          <div className='cadaBanner'>
            <p className='titleBanner'>IP ADDRESS</p>
            <p className='valueBanner'>{result?result.query:'--'}</p>
          </div>
          <div className='cadaBanner'>
            <p className='titleBanner'>LOCATION</p>
            <p className='valueBanner'>{result?result.city:'--'}</p>
          </div>
          <div className='cadaBanner'>
            <p className='titleBanner'>COUNTRY</p>
            <p className='valueBanner'>{result?result.country:'--'}</p>
          </div>
          <div className='cadaBanner'>
            <p className='titleBanner'>ISP</p>
            <p className='valueBanner'>{result?result.isp:'--'}</p>
          </div>  
        </div>  
      </div>  
    </main>
  )
}

export default Header