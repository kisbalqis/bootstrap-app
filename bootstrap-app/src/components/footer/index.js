import React from 'react'
import CardSosmed from '../card/indexSosmed'

function FooterComponets() {
  return (
    <>
        <footer >
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="row">
                        <h5><b>Tautan Cepat</b></h5>
                            <div className="col-3">
                                <a className="btn btn-linktext-decoration-none"><small>Product</small></a>
                            </div>
                            <div className="col-3">
                              <a className="btn btn-linktext-decoration-none"><small>Acara</small></a>
                            </div>
                        </div>
                        <div className="col-3">
                                <a className="btn btn-linktext-decoration-none"><small>Product</small></a>
                            </div>
                            <div className="col-3">
                              <a className="btn btn-linktext-decoration-none"><small>Acara</small></a>
                            </div>
                    </div>
                    <div className="col-4">
                        <div className="row">
                        <h5><b>Download Pegadaian Digital</b></h5>
                        <div className="col-4 mt-2 d-flex">
                           <img
                                    src="https://sahabat.pegadaian.co.id/wp-content/uploads/2023/10/google-play-badge.webp"
                                    className="img-fluid"
                                    width="150"
                                />
                             <img
                                    src="https://sahabat.pegadaian.co.id/wp-content/uploads/2023/10/badge-app.webp"
                                    className="img-fluid"
                                    width="145"
                                />
                        </div>
                        
                        </div>
                        <div className="col-12">
                        <div className="mt-5">
                            <b>PT Pegadaian terdaftar dan diawasi oleh OJK</b>
                        </div>
                        </div>
                    </div>
                    <div className="col-4">
                      <h5><b>Kantor Pusat Pegadaian</b></h5>
                      <div className="row">
                        <div className="col-10">
                            <i className="bi bi-pin-fill"></i>
                            <smal className="mx-2">Jl. Kramat Raya 162 Jakarta Pusat 10430 Indonesia</smal>
                        </div>
                        <div className="col-12 d-flex">
                           <div>
                           <i className="bi bi-telephone"></i>
                            <smal className="mx-1">021 3155 550</smal>
                           </div>
                           <div>
                           <i className="bi bi-printer"></i>
                            <smal className="mx-1">021 3155 550</smal>
                           </div>
                        </div>
                        <div className="col-12 mt-3 my-3">
                            <img src="https://sahabat.pegadaian.co.id/wp-content/uploads/2021/08/call-center.svg"/>
                      </div>
                      <div className="col-12">
                     <h5><b>  Ikuti Media Sosial Kami</b></h5>
                     {/* <CardSosmed/> */}
                      </div>
                      </div>
                      
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default FooterComponets