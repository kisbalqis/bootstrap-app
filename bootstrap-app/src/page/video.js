import React, { useEffect, useRef } from 'react';
import ButtonComponets from '../components/button';


const Video = () => {
    const items = [
        { id: 1, imageSrc: "https://sahabat.pegadaian.co.id/wp-content/uploads/2022/03/Tutorial-Gadai-Efek-melalui-Aplikasi-Pegadaian-Digital-350x250.webp", title: "Gadai Efect", subTitle: "8 Cara mendapatkan penghasilan tambahan" },
        { id: 2, imageSrc: "https://sahabat.pegadaian.co.id/wp-content/uploads/2022/03/THUMBNAIL-1280x720-Youtube-Kelak-2-750x536.webp", title: "Webseries", subTitle: "Kelak Season 2 dari 2 Episode" },
        { id: 3, imageSrc: "https://sahabat.pegadaian.co.id/wp-content/uploads/2022/03/Cara-dan-Keuntungan-Gadai-Efek-Bisa-Buat-Kebutuhan-Konsumtif-Produktif-dan-Investasi-350x250.webp", title: "Gadai Efek", subTitle: "Subtitle 3" },
        { id: 4, imageSrc: "http://placehold.it/380?text=4", title: "Card 4", subTitle: "Subtitle 4" },
        { id: 5, imageSrc: "http://placehold.it/380?text=5", title: "Card 5", subTitle: "Subtitle 5" },
        { id: 6, imageSrc: "http://placehold.it/380?text=6", title: "Card 6", subTitle: "Subtitle 6" }
      ];
    
      const chunkSize = 3; // Number of cards per slide
      const slides = [];
      for (let i = 0; i < items.length; i += chunkSize) {
        slides.push(items.slice(i, i + chunkSize));
      }
    
      const handleClick = () => {
        alert('Button on Page 1 clicked!');
      };


  return (
  <>
      <div className="container">
        <div className="mt-5">
               <h3><b>Video Terbaru</b></h3>
            </div>
                <div id="carouselExample" className="carousel slide mt-5" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {slides.map((slide, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                            <div className="d-flex">
                            {slide.map(item => (
                                <div className="card m-2" key={item.id}>
                                <img src={item.imageSrc} className="card-img" alt={`Slide ${item.id}`} style={{ width: '390px', height: '230px' }}/>
                                <div class="card-img-overlay">
                                    <h5 className="card-title text-cards">
                                    <button type="button" class="btn btn-success btn-sm">{item.title}</button></h5>
                                    <p className="card-text text-cards">{item.subTitle}</p>
                                    {/* <p className="card-text">Last updated 3 mins ago</p> */}
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="d-grid gap-2 col-6 mx-auto m-5">
              <ButtonComponets text="Lihat Artikel Lainnya" onClick={handleClick}/>
            </div>
            </div>
          
    </>
  );
};

export default Video;
