import { useState } from 'react'
import './Project.css'

function Crud() {
  const [user, setUser] = useState({
    name: "", email: "", number: "", place: "",
  })
  const [data, setDate] = useState([]);
  const [condition,setCondition] = useState(false)
  const [storeid,setStoreid] = useState(0);

  const handleinput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value })
  }
  const addUser = () => {
    const { name, number, place, email } = user;
    if (!name || !email || !place || !number) {
      return alert("All field are mandotry");
    }
    setDate([...data, user]);
    setUser({ name: "", email: "", number: "", place: "", });

  }
  const DeleteUser = (id) => {
    const find = data.filter((ele, i) => {
      return i !== id;
    })
    setDate(find);
  }
  const UpdateUser = (id)=>{
    const find = data[id];
    setUser({ name: find.name, email: find.email, number: find.number, place: find.place, });
    setStoreid(id);
    setCondition(true);
    
  }
  const updatedata = ()=>{
    const find = [...data];
    find[storeid] = user;
    setDate(find);
    setStoreid(0);
    setCondition(false);
    setUser({ name: "", email: "", number: "", place: "", });
  }
  return (
    <>
      <div className='crud-inputhold'>
        <div className='crud-inputcard'>
          <input type="text" name="name" placeholder='Enter your name' value={user.name} onChange={handleinput} />
          <input type="text" name="email" placeholder='Enter your email' value={user.email} onChange={handleinput} />
          <input type="text" name="number" placeholder='Enter your number' value={user.number} onChange={handleinput} />
          <input type="text" name="place" placeholder='Enter your place' value={user.place} onChange={handleinput} />
        </div>
        <div>
          {
            !condition ?<button className='crud-button' onClick={addUser}>Add your data</button> 
            :<button className='crud-button' onClick={updatedata}>Update your data</button>
          }
          
        </div>
      </div>
      <div className='crud-table'>
        {
          data.map((ele, i) => {
            return (
              <div key={i} className='crud-usercard'>
                <h3>No. {i + 1}</h3>
                <div className='crud-divname'>
                  <div className='crud-usernume'>
                    <h4>Name: </h4>
                    <h5>{ele.name}</h5>
                  </div>
                  <div className='crud-usernume'>
                    <h4>Email: </h4>
                    <h5>{ele.email}</h5>
                  </div>
                  <div className='crud-usernume'>
                    <h4>Number: </h4>
                    <h5>{ele.number}</h5>
                  </div>
                  <div className='crud-usernume'>
                    <h4>Place: </h4>
                    <h5>{ele.place}</h5>
                  </div>
                </div>
                <div className='crud-userbutton'>
                  <button className='deletebut' onClick={() => DeleteUser(i)}>Delete</button>
                  <button className='updatebut' onClick={() => UpdateUser(i)}>Update</button>
                </div>
              </div>
            )
          })
        }
      </div>



    </>
  )
}

export default Crud;