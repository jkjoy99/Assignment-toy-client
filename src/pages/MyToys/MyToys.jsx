import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import UpdateToy from '../UpdateToy/UpdateToy';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState("");


    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setToys(data)
            })
    }, [user])


    const handleSearch = () => {
        fetch(`http://localhost:5000/toyNameSearch/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setToys(data);
            });
    };


    const handleToyUpdate=(data) =>{
        console.log(data);
    }


    return (
        <div className="overflow-x-auto w-full ">

            <div className='flex'>
                <input onChange={(e) => setSearchText(e.target.value)} type="search" name="search" className='input input-bordered mt-4 mb-4 ml-96 ' /> {""}
                <button onClick={handleSearch} className="btn btn-outline btn-primary mt-4 mb-4 ml-2">Search</button>
            </div>

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
                        <th>Details </th>
                        <th>Updated</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        toys?.map((toy, index) => <tr>
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
                               <UpdateToy
                               key={toy._id}
                               toy={toy}
                               handleToyUpdate={handleToyUpdate}
                               ></UpdateToy>
                            </th>
                            <th>
                                <button className="btn btn-ghost btn-xs">DELETE</button>
                            </th>
                        </tr>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default MyToys;