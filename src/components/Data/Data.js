import React from "react";
import "./Data.css";
// import Card from "react-bootstrap/Card";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

function Data() {
//   const data = [
//     {
//       number: "34,56,000",
//       content: "Happy Customers Who",
//       contents: "Trusted us",
//     },
//     {
//       number: "245,678",
//       content: "Zero Waste Product",
//       contents: "Sold",
//     },
//     {
//       number: "45,678kg",
//       content: "Plastic Pollution Preventd",
//       contents: "i last 5 years",
//     },
//   ];
  return (
    <div className="row">
        <div className="col-4 border ">
            <h1 className="text-center" style={{fontWeight:'bolder'}}>34,56,000</h1>
            <h4 className="text-center">Happy Customers Who</h4>
            <h4 className="text-center">Trusted us</h4>
        </div>
        <div className="col-4 border">
            <h1 className="text-center" style={{fontWeight:'bolder'}}>245,678+</h1>
            <h4 className="text-center">Zero Waste Product</h4>
            <h4 className="text-center">Sold</h4>
        </div>
        <div className="col-4 border">
            <h1 className="text-center" style={{fontWeight:'bolder'}}>45,678kg</h1>
            <h4 className="text-center">Plastic Pollution Prevented</h4>
            <h4 className="text-center">i last 5 years</h4>
        </div>

    </div>
    // <Card >
    //   <Row>
    //     {
    //      data.map((item) => (
    //       <Col sm={12} md={8} lg={6} xl={3}>
    //         <Card.Body>
    //           <Card.Title style={{textAlign:'center',fontWeight:'bolder'}}>{item.number}</Card.Title>
    //           <Card.Text style={{textAlign:'center',fontWeight:'bolder'}}>{item.content}</Card.Text>
    //           <Card.Text style={{textAlign:'center' ,fontWeight:'bolder'}}>{item.contents}</Card.Text>
    //         </Card.Body>
    //       </Col>
    //     ))}
    //   </Row>
    // </Card>
  );
}

export default Data;
