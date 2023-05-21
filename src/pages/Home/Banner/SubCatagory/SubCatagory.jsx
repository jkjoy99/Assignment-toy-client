
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';




const SubCatagory = () => {
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState("Imp");

  useEffect(() => {
    fetch(`https://assignment-11-toy-server.vercel.app/subCatagory/${activeTab}`)
      .then(res => res.json())
      .then(data => {
        setCategories(data);
      })
  }, [activeTab])

  // const data =categories?.filter((categore)=> categore.category==activeTab)
  // console.log(data);

  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  return (
    <div>
      <h2 className='text-center text-6xl text-purple-500 font-semibold pt-5'>Shop bye Category</h2>
      <Tabs>
        <TabList>
          <Tab onClick={() => handleTabClick("Implement")}>Implement</Tab>
          <Tab onClick={() => handleTabClick("Eng Tools")}>Eng Tools 2</Tab>
          <Tab onClick={() => handleTabClick("Architecture")}>Architecture</Tab>
        </TabList>

        <div className='grid md:grid-cols-3 gap-4 mt-10'>
          {
            categories?.map((categore) => (

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




