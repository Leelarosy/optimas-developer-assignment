import React, {useState, createContext} from 'react';

import Login from './Components/Login';
import Users from './Components/Users';
const appContext = createContext();
function App() {
  const [value,setValue] = useState('');
  const updateValue = (data) =>{
    setValue(data)
  }
  return (

    <appContext.Provider value={{value,updateValue}}>
    <div className="App">
    {value ?  <Users /> : <Login />}
     </div>
    </appContext.Provider>
  );
}

export default App;
export {appContext}