
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';



const SubCatagory = () => {
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState("Imp");

useEffect(()=>{
  fetch(`http://localhost:5000/subCatagory/${activeTab}`)
        .then(res => res.json())
        .then(data => {
          setCategories(data);
        })
},[activeTab])
 
// const data =categories?.filter((categore)=> categore.category==activeTab)
// console.log(data);

const handleTabClick = (category) => {
  setActiveTab(category);
};

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab  onClick={() => handleTabClick("Implement")}>Implement</Tab>
          <Tab  onClick={() => handleTabClick("Eng Tools")}>Eng Tools 2</Tab>
          <Tab  onClick={() => handleTabClick("Architecture")}>Architecture</Tab>
        </TabList>

       <div className='grid md:grid-cols-3 gap-4 mt-10'>
       {
          categories?.map((categore)=>(
           
            <div className='grid md:grid-cols-3 gap-4'>
            <div className="card w-96  bg-indigo-200 shadow-xl rounded-xl">
               <figure className="px-10 pt-10">
                   <img src={categore.image} alt="Shoes" className="rounded-xl pt-4 h-80 bg-base-100 shadow-xl " />
               </figure>
               <div className="card-body items-center text-center">
                   <h2 className="card-title">Toy Name : {categore.name}</h2>
                   <p className='card-title'>Price :${categore.price}</p>
                   <h2 className="card-title">Toy Quantity : {categore.quantity}</h2>
                   <h2 className="card-title">Toy supplier : {categore.category}</h2>
                   <h2 className="card-title">Toy Details : {categore.details}</h2>
                   <h2 className="card-title">Toy Rating : {categore.rating}</h2>

                   <div className="card-actions">
                      <Link to={`/details/${categore._id}`}>
                      <button className="btn btn-primary mt-4">View Details</button>
                      </Link>
                   </div>
               </div>
           </div>
       </div>
           
          ))
        }
       </div>
      </Tabs>
    </div>
  );
};

export default SubCatagory;




