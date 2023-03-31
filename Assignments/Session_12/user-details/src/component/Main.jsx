import {useState,useEffect} from 'react';
import './Main.css';

const Main = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
    .then(res => res.json())
    .then(data => setState(data.results));
  }, [])

  return (
    <>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>User Image</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>City</th>
            </tr>
          </thead>
            {
              state.map((e, idx) => {
                return (
                  <Table key={ idx } photo={ e.picture.medium } name={ `${e.name.first} ${e.name.last}` } gender={ e.gender } email={ e.email } city={ e.location.city } />
                )
              })
            }  
        </table>   
      </div>
    </>
  );
}

const Table = ({ name, photo, gender, email, city }) => {
    return (
      <tbody className='table-container'>
          <tr>
            <td>
              <img src={ photo } alt="no-img" />
            </td>
            <td>{ name }</td>
            <td>{ gender }</td>
            <td>{ email }</td>
            <td>{ city }</td>
          </tr>
      </tbody>
    )
  }
  
  export default Main