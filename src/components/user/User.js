import React from 'react'
import "./User.scss"
const User = () => {
  return (
  <>
  <div className="bg gf">
    <div className="container dfd">
      <div className="row text-white  text-uppercase fw-bold text-user fs-3 gfy">
        <div className="col-md-4  gf">
          <div className=' user-one'>
          3800+ <span className='text-gradient '> user active </span>
          </div>
        </div>
        <div className="col-md-4   gf">
          <div className=' d-flex justify-content-center ' >
          230+ <span className='text-gradient '> Trusted Company </span>
          </div>
        </div>
        <div className="col-md-4  gf">
          <div className=' user-three ' >
          $230M+ <span className='text-gradient '> Transaction </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default User