import React from 'react'
import FooterComponets from '../components/footer'

function Footer() {
  return (
    <>
     <div className="container container-fluid pb-0 mb-0 justify-content-center">
        <div className="row my-5">
        <div className="col">
            <div className="d-flex">
            <div>
                <img
                src="https://sahabat.pegadaian.co.id/wp-content/uploads/2023/10/handphone-750x817-1.webp"
                className="img-fluid"
                width="650"
                alt="Atur Keuangan"
                />
            </div>
            <div className="mx-4">
                <div className="row">
                  <div className="col-12 mt-4">
                  <h2><b>Atur Keuangan dalam Genggamanmu</b></h2>
                  </div>
                  <div className="col-6">
                    <p>
                      Wujudkan rencanamu dengan mengelola aset secara aman dan praktis melalui Pegadaian Digital. Nabung emas, cicil emas, dan layanan gadai untuk memenuhi kebutuhanmu jadi mudah!
                    </p>
                    <p><a className="btn-link text-decoration-none"> Baca Selengkapnya </a></p>
                  </div>
                  <div className="col-12 mt-4">
                    <p><b>Download Pegadaian Digital</b></p>
                   <div className="row">
                    <div className="col-2">
                      <img
                          src="https://sahabat.pegadaian.co.id/wp-content/uploads/2023/10/google-play-badge.webp"
                          className="img-fluid"
                          width="150"
                      />
                    </div>
                    <div className="col-2">
                    <img
                        src="https://sahabat.pegadaian.co.id/wp-content/uploads/2023/10/badge-app.webp"
                        className="img-fluid"
                        width="145"
                    />
                    </div>
                   
                   </div>
                 
                  </div>
                </div>
            </div>
            </div>
        </div>
        </div>
       
     </div>
     <FooterComponets/>
     
    </>
  )
}

export default Footer