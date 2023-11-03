import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () =>{
    const loadedUsers = useLoaderData();
    const [users,setUsers] = useState(loadedUsers);
    const handleDelete = _id =>{
        console.log(_id);
        Swal.fire({
           title: 'Are you sure?',
           text: "You won't be able to revert this!",
           icon: 'warning',
           showCancelButton: true,
           confirmButtonColor: '#3085d6',
           cancelButtonColor: '#d33',
           confirmButtonText: 'Yes, delete it!'
         }).then((result) => {
           if (result.isConfirmed) {
           fetch(`http://localhost:5000/user/${_id}`,{
               method : 'DELETE'
           })
            .then(res=> res.json())
            .then(data =>{
               console.log(data);
               if(data.deletedCount > 0){
               Swal.fire(
                   'Deleted!',
                   'Your coffee has been deleted.',
                   'success'
               )
               const remainingusers = users.filter(user => user._id !== _id);
               setUsers(remainingusers);
               }
            })
           }
         })
       
      }

    return(
        <div>
         <h2>Users: {loadedUsers.length}</h2>
         <div>
         <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Email</th>
                    <th>Created at</th>
                    <th>Last Logged In</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                {
                    users.map(user => 
                   <tr key={user._id}>
                        <th>1</th>
                        <td>{user.email}</td>
                        <td>{user.createAt}</td>
                        <td>{user.lastLoggedAt}</td>
                        <td>
                            <button
                            onClick={() => handleDelete(user._id)} className="btn">X</button>
                        </td>
                  </tr>)
                }
                
                </tbody>
            </table>
            </div>
         </div>
        </div>
    );
};

export default Users;