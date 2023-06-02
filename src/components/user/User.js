import React from 'react'
import "./User.scss"
const User = () => {
  return (
   <>
   <div className="bg">
    <div className="container">
        <div className="row">
            <div className="col-md-4 d-md-flex justify-content-center">
                <div className="user-1 fs-1">3800+ <span className='text-uppercase fs-4'> user active</span></div>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
                <div className="user-1  fs-1">230+ <span className='text-uppercase fs-4'> trusted by company</span></div>
            </div>
            <div className="col-md-4 d-flex justify-content-end">
                <div className="user-1  fs-1">$230M+ <span className='text-uppercase fs-4'> Transaction</span></div>
            </div>

        </div>
    </div>
   </div>
   </>
  )
}

export default User