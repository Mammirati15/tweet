import React, {useState} from 'react';
import Tweet from './tweet';


function App(){ 
  const [users, setUsers] = useState([
    {name: "Ed", message: "Hello There"},
    {name: "Karin", message: "I Love You"},
    {name: "Emery", message:"Hi Daddy"}
  ]

  )

  return(
    <div className="app">
      {users.map(users => (
        <Tweet name={users.name} message={users.message} />
      ))}
    </div>
  )
}

export default App;