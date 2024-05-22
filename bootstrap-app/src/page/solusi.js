import React from 'react'
import CardSolusi from '../components/card/indexSolusi';

function Solusi() {
  return (
    <>
      <div className="container">
        <div className="d-flex mt-5">
            <div>
            <img src="https://sahabat.pegadaian.co.id/wp-content/uploads/2023/10/produk-home-1-423x430-1.webp" />
            </div>
            <div className="mx-4">
            <div>
            <h3><b>Solusi Keuangan Terbaik untuk Kamu</b></h3>
            <p className="mt-3">Dapatkan solusi perencanaan keuangan demi kemudahan dan kenyamanan di masa depan.</p>
            </div>
            <div>
                <CardSolusi/>
            </div>
            </div>
        </div>
       </div>
    </>
  )
}

export default Solusi