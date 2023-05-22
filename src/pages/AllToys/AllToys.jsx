import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import webTitle from '../WebTitle/WebTitle';
// import ShowToys from '../Home/ShowToys/ShowToys';

const AllToys = () => {
    const [toys, setToys] = useState([])
    const [searchText, setSearchText] = useState("");
    const parpaze = 20
    useEffect(() => {
        fetch(`https://assignment-11-toy-server.vercel.app/toy?limit=${parpaze}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [parpaze])


    const handleSearch = () => {
        fetch(`https://assignment-11-toy-server.vercel.app/toyNameSearch/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setToys(data);
            });
    };

    webTitle('AllToys')
    return (
        <div>
            <h2 className='text-center text-6xl text-purple-500 font-semibold pt-5 pb-6'>View All Toys: {toys.length}</h2>

            <div className='flex'>
                <input onChange={(e) => setSearchText(e.target.value)} type="search" name="search" className='input input-bordered mt-4 mb-4 ml-96 ' /> {""}
                <button onClick={handleSearch} className="btn btn-outline btn-primary mt-4 mb-4 ml-2">Search</button>
            </div>

            {/*  */}

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
                            <th>category </th>
                            <th>View Details</th>
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
                                    <td> {toy.category}</td>
                                    <div className="card-actions">
                                        <Link to={`/details/${toy._id}`}>
                                            <button className="btn btn-primary mt-4">View Details</button>
                                        </Link>
                                    </div>

                                </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllToys;