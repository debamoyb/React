import { useState,useEffect } from 'react'

function UserDetails() {

const [user,setUser]=useState([])

useEffect(()=>{
    allUsers()
},[])

const allUsers=()=>{                
    fetch("https://randomuser.me/api/?results=20")
    .then((res)=>res.json())
    .then((data) =>{
        console.log(data)
       setUser(data.results) 
    })
}
console.log(user)

const maleUserList=user.filter((genderIs)=>{         
    return genderIs.gender==='male';    
})
console.log(maleUserList)

const maleUsers=()=>{                      
   setUser(maleUserList)     
}

const femaleUserList=user.filter((genderIs)=>{        
    return genderIs.gender==='female';    
})
console.log(femaleUserList)

const femaleUsers=()=>{                       
    setUser(femaleUserList)
 }

  return (
    <div>
        <h1 style={{margin:"2rem",textAlign:"left"}}>User Details</h1>
        <p style={{margin:"2rem",textAlign:"left"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vel iusto accusamus explicabo eaque perspiciatis similique eveniet deleniti soluta totam! Voluptate, sunt perspiciatis! Quis, atque laboriosam. Cupiditate libero minus, voluptatibus dolore quasi maiores asperiores quo optio sunt in nisi exercitationem aliquam error eaque laudantium, autem placeat dolor soluta recusandae reprehenderit repellendus quidem? Iure, reiciendis a quasi provident nam corrupti culpa fugiat iusto dolorum est laudantium, eveniet dicta doloremque qui quibusdam veniam laboriosam ex pariatur quisquam ea voluptatem expedita laborum. </p>
        <div style={{display:"flex",margin:"2rem",gap:"3rem"}}>
            <div>
                <input type="radio" id='all' name='user' onChange={allUsers} />
            <label>All</label>
            </div>
            <div>
                <input type="radio" id='male' name='user' onChange={maleUsers}  />
            <label>Male</label>
            </div>
            <div>
                <input type="radio" id='female' name='user' onChange={femaleUsers}/>
            <label>Female</label>
            </div>
         </div>
    {
   user.length>0 && 
   <table cellPadding={20} style={{width:"95%",margin:"50px auto"}}>
            <thead >
                <tr style={{backgroundColor:"black",color:"white"}}>
                    <th>IMAGE</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>GENDER</th>
                </tr>
            </thead>
            <tbody>
                { 
                user.map((ele)=>{
                    return<tr>
                        <td><img src={ele.picture.thumbnail}/></td>
                        <td>{ele.name.title}{" "}{ele.name.first}{" "}{ele.name.last}</td>
                        <td>{ele.email}</td>
                        <td>{ele.gender}</td>
                    </tr>
                })
                }
            </tbody>
        </table>
    }
    </div>
  )
}

export default UserDetails