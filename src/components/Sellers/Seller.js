import React from "react";
import "./Seller.css";
import Card from "react-bootstrap/Card";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";

function Seller() {
  const data = [
    {
      img: "https://www.promo-duck.com/cdn/shop/products/Cover_fbfe18bc-8b77-4624-b780-5480b9321b49.jpg?v=1680915460&width=1445",
      name: "plant pots",
      rate: "Min.60% off",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVWsdZNPWXhueFkVkC7pcls4Kam8XmgIHYIRYcUDEFRJ2nlef-PWPsXtNoag7Q6I2LRq4&usqp=CAU",
      name: "Hair care shamboo",
      rate: "Up to 50%off",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS41rKgj2EkUhILNV0TGdhROtP0Z8KURi4uEQ&usqp=CAU",
      name: "Hair care shamboo",
      rate: "Up to 40%off",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfBBYU7QGZQMTrgitw62ovrkPPCWbAf9gmP78jLJZLgRQHYmGcBK53UEAG0thCdOeJuuc&usqp=CAU",
      name: "Storage Box",
      rate: "Up to 40%off",
    },
  ];
  return (
    <>
    <Row>
      <h3 className="m-4" style={{fontWeight:'bolder',fontStyle:'italic'}}>Shop Our Best Sellers</h3>
      {data.map((item) => (
        <Col sm={12} md={8} lg={6} xl={3}>
          <Card style={{ width: "15rem" ,marginLeft:'25px'}}>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
              <Card.Title className="text-center">{item.name}</Card.Title>
              <Card.Text className="text-center" style={{fontWeight:'bolder'}}>
                {item.rate}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    <div className="row m-5">
        <div className="col-6">
            <h2 style={{fontWeight:'bold'}}>Green box's choice over other</h2>
            <h2 style={{fontWeight:'bold'}}>eco-friendly products sites.</h2>
        </div>
        <div className="col-6 ">
            <h5>Green box offers eco-friendly products including</h5> 
            <h5>households items,personal care products,clothing</h5>
            <h5>and accessories which are designed to be</h5>
            <h5>sustainable and have a minimal impact on the</h5>
            <h5>environment</h5>
            <button className="m-4 " style={{backgroundColor:'green',height:'40px',color:'white'}}>Learn More</button>
        </div>
    </div>
    </>
  );
}

export default Seller;
