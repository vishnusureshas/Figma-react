import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";

function Recommend() {
  const data = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuR8iEB_wvg_pr-N49iOPe4Shb5z5ZPCT9ig&usqp=CAU",
      name: "Kids Wear",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTck_MHLwvx9QklL6VIZhc3NNdBlTfc4dmgwdbCjaLryIj2Dh1msB0aDss4qtjzKJ9oQ2M&usqp=CAU",
      name: "Plant pots",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Dnm35bt_6XmS7_NAJtwqb5vGauDhGGGn2R3GagTxXlI8mK6xajOqPSIgatUxnIzYKR8&usqp=CAU",
      name: "Pillow Cusion Cover",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGINKNltw45fOp8yFi-pk9PLurKPqDicNxUAplpppiZ87prI2AJh-xdHZgMrAB4W5iCJ0&usqp=CAU",
      name: "Floor Cleaner",
    },
  ];
  return (
    <Row>
      <h3 className="m-3" style={{fontWeight:'bolder',fontStyle:'italic'}}>Recommended For You</h3>
      {data.map((item) => (
        <Col sm={12} md={8} lg={6} xl={3}>
          <Card className="m-3" style={{ width: "15rem" ,marginLeft:'160px'}}>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
              <Card.Title className="text-center" style={{fontWeight:'bolder'}}>{item.name}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Recommend;
