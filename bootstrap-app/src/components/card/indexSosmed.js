import React from 'react';

function CardSosmed() {
  const dataSosmed = [
    {
      id: 1,
      src: "https://sahabat.pegadaian.co.id/wp-content/uploads/2021/07/facebook-hover.png",
    },
    {
      id: 2,
      src: "https://sahabat.pegadaian.co.id/wp-content/uploads/2021/07/twitter-hover.png",
    },
    {
      id: 3,
      src: "https://sahabat.pegadaian.co.id/wp-content/uploads/2021/07/instagram-revamp-hover.png",
    },
    {
        id: 4,
        src: "https://sahabat.pegadaian.co.id/wp-content/uploads/2021/07/youtube-hover.png",
    }

  ];

  return (
    <>
      <div className="row">
        {dataSosmed.map((sosmed) => (
          <div key={sosmed.id} className="col-sm-3">
            <div className="card" style={{width: "54px", height: "54px"}}>
              <div className="card-body">
                <img src={sosmed.src} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardSosmed;
