import React from 'react';

function Carousel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
  <div className="carousel-item active">
    <img src="https://sahabat.pegadaian.co.id/wp-content/uploads/2024/05/contoh-surat-izin-tempat-usaha.webp" className="d-block w-100" style={{ width: '1640px', height: '650px' }} alt="Slide 1"/>
  </div>
  <div className="carousel-item">
    <img src="https://sahabat.pegadaian.co.id/wp-content/uploads/2024/05/contoh-surat-izin-tempat-usaha.webp" className="d-block w-100" style={{ width: '1640px', height: '650px' }} alt="Slide 2"/>
  </div>
  <div className="carousel-item">
    <img src="https://sahabat.pegadaian.co.id/wp-content/uploads/2024/05/contoh-surat-izin-tempat-usaha.webp" className="d-block w-100" style={{ width: '1640px', height: '650px' }} alt="Slide 3"/>
  </div>
</div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
