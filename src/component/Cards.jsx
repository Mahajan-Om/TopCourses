import React, { useState } from 'react'
import Card from './Card'

const Cards = ({courses,category}) => {  // {courses is used to destructure the prop so we can directly use courses.map but if we have passed props so we have to do prop.courses.map }
    
    const [likedcourses,setlikedcourses]=useState([]); // ab likedcourses me sare liked kiye hue courses pde hue hai ab isko card me as a prop bhej denge 

    // hamRE PASS key -value pair me values pdi hui hai but hume sb ek hi array me chahiye becz hume map function ka use krna hai so object.values(courses) se bs values le li keys se koi len DENA nhi hai ab is values foreach loop lagaya jisse diiferent array mil gye values ke ander se ab phirse foreach loop lagaya jisse indiviual array ke ander se bhi ek value mil gyi ab isko final array me push kr diya  
    // return you the list of all courses received from api response
    const getcourses = () =>{

        if(category === "All"){
            const allcourses = [];
            Object.values(courses).forEach((array)=>{
                array.forEach((coursedata)=>{
                    allcourses.push(coursedata)
                })
            })
    
            return allcourses; // api call hua data field ke ander 5 key value pair hai ab bs pehli coursecategory li aur usme se bhi ek object ko uthaya aur allcourses me dala
        }
        else{
            //
            return courses[category];  // agr category all pe hai to sare cards ko bhej diya agr specific category selected hai to specific category ke array ko hi bheja
        }

    }
  
  
    return (

    <div className='flex flex-wrap justify-center mb-4 gap-4'> 
        {
            getcourses().map((course)=>( // getcourses se allcourses ka array mil jayega usme ek ek element pe map function lagaya 
                <Card key={course.id} course={course} likedcourses={likedcourses} setlikedcourses={setlikedcourses}/> // har ek card ko ek course ka data mil jayega..// agr map ke ander curly braces ka use kiya to to return likhna padega nhi to kuch bhi render nhi hoga aur return nhi likhna curly brces ki jgh round brackets use karo ...
            ))
        }

    </div> // getcourses se data ek array mila jisme me se ek ek ka use krke Card bna liya
  )
}

export default Cards;