import React from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import { toast} from 'react-toastify';

 const Card = (props) => {

    let course = props.course;
    let likedcourses = props.likedcourses;
    let setlikedcourses=props.setlikedcourses;

    function clickHandler(){
        //logic ke liye hume malum chahiye ki kitne courses clicked hai kitne nhi to ek state bna lenge likedcourses ka jisme satring me values empty array hoga becz staing me sb non-liked hi hote hai but ye use-state ko cards me hi likhenge becz wha sare cards present hai naki card ke ander jh sirf ek hi card present hai 
        
        // pehle se hi clicked hai to ab agr click kiya to remove hone ka toast dikhega 
        if(likedcourses.includes(course.id)){
            setlikedcourses((prev)=> prev.filter((pid)=> (pid !== course.id)));
            toast.warning('like removed');
        }

        // pehle se clicked nhi hai isme bhi do cases hai i.e ek bhi course clicked nhi ya kuch courses clicked hai so agr kuch prev clicked hai to prev ke sath current course ko bhi add krdenege agr koi bhi clicked nhi hai to sirf current course ko hi add karenge liekdcourses wale use-state ke arrya me 
        else{

            //koi bhi clicked nhi hai
            if(likedcourses.length === 0){
                setlikedcourses([course.id]);
            }
            else{
                setlikedcourses((prev)=>[...prev,course.id]);
            }

            toast.success('like added')

        }
    }

  return (
    // clickhandler() aisa nhi krna becz it calls it immediately without assiging as a event handler
    // button ke ander kuch bhi likhne ke liye curley braces ka use krna pdta becz usko dikhane ke liye ki ye javascript ka code hai nhi to html ka code consider karega usko aur as it is dikhayega 
    <div className='w-[300px] bg-gray-700 rounded-md overflow-hidden'>   

        <div className='relative'>
            <img src={course.image.url}/> 

            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center'>
                <button onClick={clickHandler} >   
                    {
                        likedcourses.includes(course.id) ? (
                            <FcLike fontSize={"1.85rem"}/>
                        ) : (<FcLikePlaceholder fontSize={"1.85rem"}/>)
                    } 
                </button>
            </div>
        </div> 
             


        <div className='p-4'>
            <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
            <p className='mt-2 text-white'> 
                    {
                        course.description.length > 100 ? (course.description.substring(0,100) + "...") : (course.description)
                    }
            </p>
        </div>


    </div> // pehle img dal di api ka use krke ab uske niche button dalna tha heart ki icon ka to reacr-icons ko import karake Fclike wala custom html element bna liya 
  )
}

export default Card;
