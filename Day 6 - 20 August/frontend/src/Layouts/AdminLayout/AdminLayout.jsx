import React from 'react';

import SideBar from '../../Components/SideBar/SideBar';

const AdminLayout = (props) => {
  return (
    <>  
        {/* Side Bar */}
        <div>
          <div className='bg-gray-200 w-1/5 px-5 py-5'>
            <SideBar setAuth={props.setAuth}/>
          </div> 
          {/* Content */}
          <div className='border-2 border-[gold]'> 

          </div>
        </div>
    </>
  )
}

export default AdminLayout
