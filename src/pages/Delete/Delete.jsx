import React from 'react';
import Swal from 'sweetalert2';
import webTitle from '../WebTitle/WebTitle';

const Delete = ({ toy, setToys, toys }) => {
    
    webTitle('Delete')
    const { _id } = toy

    const handleToyDelete = _id => {
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

                fetch(`https://assignment-11-toy-server.vercel.app/toy/${_id}`,{
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter(to => to._id !== _id)
                            setToys(remaining);
                        }
                    })

            }
        })
    }
    return (
        <div>
            <button onClick={() => handleToyDelete(_id)} className="btn btn-ghost btn-xs">DELETE</button>
        </div>
    );
};

export default Delete;