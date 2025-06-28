import React from 'react'
import './Spinner.css'

const Spinner = () => {
  return (  // ye spinner dekhte hi gyb ho jayega becz humne usko jb tk data nhi aata tb tk hi setloading ki value true rakhi hai jese hi data aata hai setloading false ho jata hai aur cards ka data show ho jata hai .
    <div className='flex flex-col items-center space-y-2'>
            <div className='Spinner'></div>  
            <p className='font-semibold text-blue-900 text-lg'>Loading...</p>
    </div>
  )
}

export default Spinner;