import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import { Filter } from "./component/Filter";
import { filterData } from "./data";
import { apiUrl } from "./data";  // filterdata aur api data me usko app.js me use kr rhe hai to unko import bhi krna padega
import Cards from './component/Cards';
import Spinner from './component/Spinner';
import { toast, ToastContainer } from "react-toastify";
function App() {
  
  
  const[courses,setcourses]= useState(null);  // null ki jgh agr [] empty array use kiya to loading wala ternitory operator nhi bhi use kiya to chalega becz jb tk data nhi aaya tb tk value null thi aur hum null pe foreach lga rhe the isliye error aaya tha is error ko hatane ke liye simply empty array use krlo [] 
  const[loading,setloading]= useState(true);   // jb laoding ki value true hogi to sppiner dikhao aur jb false hai to cards dikhao 
  const[category,setcategory]=useState(filterData[0].title); // category ka use-state isliye banaya becz filter ke ander move krna tha aur deafault value uski all rkhdi aur sare changes filter me hi hoge so use filter me as a prop pass kr diya 
    
  const fetchdata = async() =>{

      setloading(true);  // ab jb tk data nhi aaya tb tk loading i.e spinner dikhao i.e loading ko true mark krdo ab niche api call jkrdi

      try{
        const res = await fetch(apiUrl);
        const output = await res.json(); // ab data ko variable me bhi store krna padega isliye useState ka use kr liya 
        setcourses(output.data);
      }
      catch{
        toast.error('something wrong');
      }

      // api call hogyi i.e  jese hi data mil gya  loading ko false krdo aur cards dikhao  
      setloading(false);
    }

    useEffect(()=>{
      fetchdata();
    },[]);

  // ab cards create krna hai to uske ander ka data api call krke layenge aur api wala task complete krne ke liye useEffect ka use karenge so api call hone ke bad useeffect call kr denege 
 
  return (

     // toast ko use krne ke liye Toast contaier banna pdta hai jisme sare toast i.e pop up store hote hai 
    <div className="min-h-screen flex flex-col bg-gray-500">

      <Navbar/>


      <ToastContainer/> 

      <div className="bg-gray-500">
      <Filter

          filterData={filterData} category={category}
          setcategory={setcategory}
          />

          {/* <Cards courses={courses}/> */}

          <div className="w-11/12 max-w-[1200px] 
          mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {
              loading ? (<Spinner/>) : ( <Cards courses={courses} category={category}/>)  // i.e loading true hai to spinner dikhao agr loading false hai to cards dikhao 
          }
          </div>
    </div>

  </div>
  );
}

export default App;
