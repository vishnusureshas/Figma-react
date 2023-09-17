import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import star from '../../assets/start.jpg'

function NewCollections() {
  const items = [
    {
      img: "https://m.media-amazon.com/images/I/61BldZLLRqL._AC_UF1000,1000_QL80_.jpg",
      id: "Wish Care",
      name: "Wish Care multi purpose Travel pouch",
      rate: "$488",
      icon: "https://t3.ftcdn.net/jpg/02/82/28/04/360_F_282280461_TGstFnrgEjDyiGfTxndBizvibaNrJrCd.jpg",
    },
    {
      img: "https://www.bigbasket.com/media/uploads/p/m/40271492_1-envome-10-square-areca-leaf-plate-eco-friendly-lightweight-leakproof-chemical-free.jpg",
      id: "Envome",
      name: "Envome bamboo eco friendly plate",
      rate: "$200",
      icon: "https://t3.ftcdn.net/jpg/02/82/28/04/360_F_282280461_TGstFnrgEjDyiGfTxndBizvibaNrJrCd.jpg",
    },
    {
      img: "https://image.made-in-china.com/2f0j00jVQrPviGvWkE/100-Cotton-Organic-Eco-Friendly-Makeup-Remover-Cosmetic-Pads.jpg",
      id: "Riway",
      name: "Riway premium cotton rounds",
      rate: "$150",
      icon: "https://t3.ftcdn.net/jpg/02/82/28/04/360_F_282280461_TGstFnrgEjDyiGfTxndBizvibaNrJrCd.jpg",
    },
    {
      img: "https://www.thebagbroker.com/au/wp-content/uploads/2022/07/500.SUP_.nk_.v-3.jpg",
      id: "The Mend",
      name: "Mend eco friendly pouch",
      rate: "$155",
      icon: "https://t3.ftcdn.net/jpg/02/82/28/04/360_F_282280461_TGstFnrgEjDyiGfTxndBizvibaNrJrCd.jpg",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ffj26__Mne4G9f0apemRZ53sNpZGKKPfUjFGuIBANuKkMJMrgRec3SxumF6MrbEGflA&usqp=CAU",
      id: "Vintage",
      name: "Vintage bamboo toy",
      rate: "$450",
      icon: "https://t3.ftcdn.net/jpg/02/82/28/04/360_F_282280461_TGstFnrgEjDyiGfTxndBizvibaNrJrCd.jpg",
    },
  ];
  return (
    <>
      <Row>
        <h3 className="m-4 text-center" style={{fontWeight:'bolder',fontStyle:'italic'}}>New Collections</h3>
        {items.map((data) => (
          <Col className="m-4">
            <Card style={{ width: "12rem" }}>
              <Card.Img variant="top" src={data.img} />
              <Card.Body>
              <h5 className="text-center">{data.id}</h5>
                <Card.Title className="text-center">{data.name}</Card.Title>
                <Card.Text className="text-center" style={{fontWeight:'bolder'}}>
                 {data.rate}
                </Card.Text>
                <Card.Img variant="top" src={star}/>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default NewCollections;
