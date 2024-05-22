import React from 'react'

function ButtonComponets({ text, onClick }) {

  return (
    <>
        {/* <button type="button" className="btn btn-outline-success">
            <small>Lihat Promo Lainnya</small>
        </button> */}
        <button type="button" className="btn btn-outline-success" onClick={onClick}>
          {text}
         </button>
    
    </>
  )
}

export default ButtonComponets