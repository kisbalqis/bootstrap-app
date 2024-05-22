import React from 'react';

function CardSolusi() {
  const cardImage = [
    {
      title: "Tabungan Emas",
      image: "https://sahabat.pegadaian.co.id/wp-content/uploads/2021/07/ico-tabungan-emas.svg"
    },
    {
      title: "Gadai Emas",
      image: "https://sahabat.pegadaian.co.id/wp-content/uploads/2021/08/cincin.svg"
    },
    {
      title: "Product Lainnya",
      image: "https://sahabat.pegadaian.co.id/wp-content/uploads/2021/08/ico-pinjaman-usaha.svg"
    },
    {
      title: "Tabungan Emas",
      image: "https://sahabat.pegadaian.co.id/wp-content/uploads/2021/07/ico-tabungan-emas.svg"
    },
    {
      title: "Gadai Emas",
      image: "https://sahabat.pegadaian.co.id/wp-content/uploads/2021/08/cincin.svg"
    },
    {
      title: "Product Lainnya",
      image: "https://sahabat.pegadaian.co.id/wp-content/uploads/2021/08/ico-pinjaman-usaha.svg"
    }
  ];

  const chunkedCardImages = Array.from({ length: Math.ceil(cardImage.length / 3) }, (_, index) =>
    cardImage.slice(index * 3, (index + 1) * 3)
  );

  return (
    <>
      {chunkedCardImages.map((chunk, index) => (
        <div key={index} className="d-flex flex-row">
          {chunk.map((item, i) => (
            <div key={i} className="card mx-2 mt-3" style={{ width: "15em", height: "8em" }}>
              <div className="card-body align-items-center justify-content-center" style={{ padding: "9px", margin: "9px" }}>
                <img src={item.image} alt="" style={{ maxWidth: "100%", maxHeight: "100%", display: "block" }} className="mx-auto" />
                <p className="small text-center mb-0">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

export default CardSolusi;
