import React from 'react'

function ProfileCard({name, age, bio}) {
    return (
        <div className='flex  justify-center  items-center  min-h-screen bg-gray-100'>
            <div className='bg-white  p-4  rounded-lg  shadow-md  max-w-sm  mx-auto  h-[200px]  flex  flex-col  justify-between  items-center'>
                <h1>Name : {name}</h1>
                <p>Age : {age}</p>
                <p>Bio : {bio}</p>
            </div>
        </div>
    )
}

export default ProfileCard