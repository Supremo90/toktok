import React, {useEffect,useState} from "react";
import './App.css';
import Header from './Header';
import Photo from './Photo';
import axios from 'axios';





function App() {
  const [elem, setElem] = useState([]);

  
  useEffect(() => {
    async function fetchelements(){
     // Make a request for a user with a given ID
      axios.get('http://localhost:9000/v')
      .then(function (response) {
        // handle success
        setElem(response.data);
       
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    }

    fetchelements();
  }, []);

  return (
    <div className="toktok_app">
      <Header/>
      <hr/><br/>
      
      <div class="container-fluid toktok_structure">
        
          <div class="row">
            <div class="col-6">
            {elem.map(({url,likes}) => (
                <Photo url= {url} likes={likes}/>
              ))}
            
            </div>
            <div class="col-6">.col-6</div>
          </div>

     </div>

    </div>
  );
}

export default App;


