import React from 'react'

const CardMenu = () => {
  return (
    <>
    
          <div className="card">
            {menus.map((menu, index) => (
              <div
                className="mb-3 animate__animated animate__fadeIn "
                key={index}
              >
                <div className="card-body">
      <h5 className="card-title"></h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
              </div>
            ))}
          </div>
        
    <div className="card">
    
    <div className="card-body">
      <h5 className="card-title"></h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
    </>
  )
}

export default CardMenu