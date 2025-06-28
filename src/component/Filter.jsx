// write rafc to create boiler plate 
import React from 'react';

export const Filter = ({ filterData , category ,setcategory}) => { // {filterdata} aisa likho ya (props) likho aur return ke ander let filterdata = props.filterdata nikal lo 
  
  function filterHandler(title){
    setcategory(title);  // jo bhi title wale button pe click hoga uski value categroy me store ho jayegi ab app.jsx me category ke basis pe decide hoga ki konse cards shoe krne hai konse nhi 
  }
  // ek specific width me chahiye tha filter isliye w-11/12 de diya
  return (
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center'>  
      {filterData.map((data) => (
        <button className={`text-lg px-2 py-1 rounded-md font-medium 
            text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
            ${category === data.title ? // category jo select hai usko dark krdo baki sare filter light
            "bg-opacity-60 border-white" :
            "bg-opacity-40 border-transparent"}
            `}
         key={data.id} onClick={()=>filterHandler(data.title)}>  
          {data.title}
        </button>
      ))}
    </div>
  );
};

