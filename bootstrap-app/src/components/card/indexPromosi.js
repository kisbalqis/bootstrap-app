import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function CardPromosi() {
  const cardInfo = [
    {
      tgl: "25 April - 06 Mei 2025",
      img: "https://sahabat.pegadaian.co.id/wp-content/uploads/2024/04/Banner-Gajian-Emas-Apr-mei-2024-2x1-1-scaled.webp",
      judul: "GAJIAN TIBA, Pakai Promo Pegadaian Digital Aja",
      subtitle: "Diskon Hingga 1 Juta Rupiah!",
      kodeKupon: "GAJIANEMAS",
      lastUpdated: "Last updated 3 mins ago"
    }
  ];

  return (
    <>
      {cardInfo.map((card, index) => (
        <div key={index} className="card mb-3" style={{ width: "1205px" }}>
          <div className="row g-0">
            <div className="col-md-8">
              <img src={card.img} className="img-fluid" alt={card.judul} />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <p className="card-text text-end">
                  <small className="text-muted">{card.lastUpdated}</small>
                </p>
                <h6 className="card-title mt-3">
                  {card.judul}
                  <p>{card.subtitle}</p>
                </h6>
                <p className="card-text text-secondary">
                  <small><b>Untuk info lebih lanjut, klik link di bawah ini</b></small>
                </p>
                <p className="card-text text-success">
                  <a href="#" className="btn btn-link text-decoration-none">
                    <small><b>Baca Selengkapnya</b></small>
                  </a>
                </p>
                <div className="text-card-end">
                  <p className="mb-0 text-secondary">
                    <div className="d-flex">
                      <i className="bi bi-ticket"></i>
                      <small className="mx-1"><b>Kode Promo:</b></small>
                    </div>
                  </p>
                  <div className="d-flex">
                    <div className="col">
                      <b>{card.kodeKupon}</b>
                    </div>
                    <div className="col text-end">
                      <a className="btn btn-link text-decoration-none">Salin</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardPromosi;
