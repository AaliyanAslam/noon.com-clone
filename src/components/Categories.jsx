import React from 'react'

const Categories = () => {

const categories = [
{
    path : "https://f.nooncdn.com/mpcms/EN0001/assets/2b5a5f4e-5b9d-48f3-ae5d-cd00f52fcc2e.gif",
    id: 1,
    
},
{
    path : "https://f.nooncdn.com/mpcms/EN0002/assets/d5678b54-b81e-4caf-8bd2-1033f4e84803.png",
    id: 2,
    
},
{
    path : "https://f.nooncdn.com/mpcms/EN0001/assets/c914d754-deb2-4696-9369-2dd9ec230941.png",
    id:3
},
{
    path : "https://f.nooncdn.com/mpcms/EN0001/assets/a93c2203-40a2-4eb6-b7c9-5f79b2a804fb.png",
    id:4
},
{
    path : "https://f.nooncdn.com/mpcms/EN0001/assets/71e68fed-e518-40ba-91a3-c6eebd40194a.png",
    id:5
},
{
    path : "https://f.nooncdn.com/mpcms/EN0001/assets/774ab4c6-2e57-408f-ab63-0947b634a5a9.png",
    id:6
},
{
    path : "https://f.nooncdn.com/mpcms/EN0001/assets/a901e2cb-4af3-48f3-9231-99f985e6c860.png",
    id:7
},
{
    path : "https://f.nooncdn.com/mpcms/EN0001/assets/7c6266a1-5948-43fd-9a0d-899f0c0affc1.png",
    id:8
},
{
    path : "https://f.nooncdn.com/mpcms/EN0001/assets/bfcd38fe-1d54-4800-8df4-c06ccafaa0d2.png",
    id:9
},
{
    path : "https://f.nooncdn.com/mpcms/EN0001/assets/8bbd2ee5-40f3-4d2d-bc40-fe4041d55607.png",
    id:10
},
{
    path : "https://f.nooncdn.com/mpcms/EN0001/assets/49d1511b-6e1b-498b-8cca-e323954f9c02.png",
    id:11
},
{
    path : "https://f.nooncdn.com/mpcms/EN0001/assets/a646a43b-f901-4346-86b8-3b4026cfa8b0.png",
    id:12
},


]


  return (
    <>
  <div className=' gap-2 p-3 bg-amber-100 grid grid-cols-6 sm:grid-cols-6 md:grid-cols-10 lg:grid-cols-12 md:gap-2'>

        {categories.map(item => {
            return <img className='h-20 sm:h-17 md:h-25 lg:h-28 xl:h-32 2xl:h-33 cursor-pointer' key={item.id} src={item.path} alt="" />
        })}
  </div>

    
    
    </>
  )
}

export default Categories