
import { useState ,useEffect} from 'react';
import axios from 'axios';
import PhoneList from './components/PhoneList';
import { ShowPhone } from './components/ShowPhone';


import './App.css';


function App() {

  const [show ,setShow]=useState(false)
  const [phones, setPhones] = useState([])
  const [phone, setPhone] =useState([])
  
  const url = 'http://localhost:8080'


  const getPhone = async (idPhone) => { 
    try { 
      const phone = await axios.get(`${url}/phones/${idPhone}`)
      setPhone(phone.data)
    } catch (err) { 
      console.log('hay un error',err)

    }
  }

  const getInfoPhone = (e) => { 
    e.preventDefault()
    setShow(true)
    getPhone()


  }


  const getListPhone = async () => { 
    try {
      const phones = await axios.get(`${url}/phones`);
      setPhones(phones.data)
      console.log(phones)
    } catch (error) { 
      console.log(error)
    }
    
  }

  useEffect(() => {
    getListPhone()

  }, [])
  

  return (
    <div className="App">
      <h1>Télefonos</h1>
      {
        !show ? (<PhoneList lista={phones} fun={getInfoPhone } />):null
          
      }
      
    </div>
  );
}

export default App;
