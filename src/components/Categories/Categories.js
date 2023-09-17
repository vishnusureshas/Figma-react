import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Categories() {
  const data = [
    {
      img: "https://i.pinimg.com/1200x/bd/94/c7/bd94c768c08bec627ac24fddf3533526.jpg",
    },
    {
      img: "https://www.doublerbags.in/cdn/shop/products/mixall_1024x1024@2x.jpg?v=1641297128",
    },
    {
      img: "https://media.istockphoto.com/id/1214474355/photo/various-household-cleaning-products.jpg?s=1024x1024&w=is&k=20&c=Axu0RjrFUz6TGACRVWOeTfpjTX3Y8TaTJoRsKEV3M14=",
    },
    {
      img: "https://www.hokmakeup.com/cdn/shop/files/Categories_Banners-Makeup.jpg?v=1686401939",
    },
  ];
  return (
    <div>
      <Row>
        <h3 className="m-4" style={{fontWeight:'bolder',fontStyle:'italic'}}>Shop by categories</h3>
        {data.map((item) => (
          <Col sm={12} md={8} lg={6} xl={3}>
            <Card style={{ width: "18rem",marginLeft:'25px' }}>
              <Card.Img variant="top"src={item.img}/>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Categories;
