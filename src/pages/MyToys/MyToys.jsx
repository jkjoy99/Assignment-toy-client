import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import UpdateToy from '../UpdateToy/UpdateToy';
import Delete from '../Delete/Delete';
import { Link } from 'react-router-dom';


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
   



    useEffect(() => {
        fetch(`https://assignment-11-toy-server.vercel.app/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [user])


   

    return (
        <div className="overflow-x-auto w-full ">

           

            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>TOY img</th>
                        <th>Supplier</th>
                        <th>Toy name</th>
                        <th>Price</th>
                        <th>Quantity </th>
                        <th>Update </th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        toys?.map((toy, index) => 
                            <tr key={toy._id}>
                            <td>{index + 1}</td>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={toy.photo} />
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            {toy.supplier}
                        </td>
                        <td>{toy.name}</td>
                        <td> ${toy.price}</td>
                        <td> {toy.quantity}</td>
                        <th>
                           <Link to={`/update/${toy._id}`}> <button>Update</button> </Link>
                        </th>
                        <th>
                            <Delete
                            toy={toy}
                            toys={toys}
                            setToys={setToys}
                            
                            ></Delete>
                        </th>
                    </tr>
                        
            
                       
                        )
                    }
                </tbody>

            </table>
        </div>
    );
};

export default MyToys;