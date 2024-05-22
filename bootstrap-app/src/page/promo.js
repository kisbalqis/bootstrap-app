import React from 'react'
import CardPromosi from '../components/card/indexPromosi'
import ButtonComponets from '../components/button'

function Promo() {
  const handleClick = () => {
    alert('Button on Page 1 clicked!');
  };
  return (
    <>
    <div className="container promo">
      <div className="mt-5">
        <h3><b>Promo</b></h3>
      </div>
      <div className="mt-5">
      <CardPromosi/>
      </div>
      <div className="d-grid gap-2 col-6 mx-auto m-5">
        <ButtonComponets text="Lihat Promosi Lainnya" onClick={handleClick}/>
      </div>
    </div>
    </>
  )
}

export default Promo