import React from "react";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";

function Deal() {
  const data = [
    {
      img: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      name: "Body Care",
      rate: "Min.60% off",
    },
    {
      img: "https://m.media-amazon.com/images/I/51mksfax5-S._AC_UF350,350_QL80_.jpg",
      name: "Classic note book",
      rate: "Min.60% off",
    },
    {
      img: "https://w0.peakpx.com/wallpaper/1017/297/HD-wallpaper-coffee-cloth-beans-hot-black-cup.jpg",
      name: "Coffee mug",
      rate: "Min.60% off",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8I29MOi5SaBHpeYNV02Q8XxaAgO9WBeFReiK5Aae6o89HEYzQbpIU3ptn7n1P4l2F5kE&usqp=CAU",
      name: "Mouse pad",
      rate: "Min.60% off",
    },
  ];
  return (
    <>
      <Row>
        <h3 className="m-4" style={{fontWeight:'bolder' ,fontStyle:'italic'}}>Deal of the Day</h3>
        {
            data.map((item)=>(
               <Col>
        <Card className="m-3 ms-3" style={{ width: "15rem", marginLeft: "25px"}}>
              <Card.Img variant="top" src={item.img} />
            <Card.Body style={{backgroundColor:'silver'}}>
            <Card.Title className="text-center">{item.name}</Card.Title>
            <Card.Text className="text-center"  style={{ fontWeight: "bolder" }} >{item.rate}</Card.Text>          
          </Card.Body>
        </Card>
               </Col> 
            ))
        }

      </Row>
    </>
  );
}

export default Deal;
