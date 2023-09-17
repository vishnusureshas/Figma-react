import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Dress() {
  const image = [
    {
      img: "https://gd.image-gmkt.com/li/215/600/713600215.g_520-w_g.jpg",
    },
    {
      img: "https://i.etsystatic.com/6972338/r/il/510671/2611996577/il_570xN.2611996577_gp5k.jpg",
    },
    {
      img: "https://gd.image-gmkt.com/li/215/600/713600215.g_520-w_g.jpg",
    },
    {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Rr7tOdftxVEvN3pT0qIeF2Z2xCu7iXqrAuVBonbZcE2uZlTmVe9mDZ88fJZMhYceXEo&usqp=CAU'
    }
  ];
  return (
    <div>
      <Carousel data-bs-theme="dark">
        {
            image.map((item)=> (
                <Carousel.Item sm={12} md={8} lg={6} xl={3}>
                <img
                  className="d-block w-5 h-5"
                  src={item.img}
                  alt="First slide"
                  style={{marginLeft:'500px'}}
                />
              </Carousel.Item>  
            ))
        }
          
      </Carousel>
    </div>
  );
}

export default Dress;
