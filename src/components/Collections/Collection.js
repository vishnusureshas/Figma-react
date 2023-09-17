import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import start from '../../assets/start.jpg'

function Collection() {
  const items = [
    {
      img: "https://i5.walmartimages.com/asr/0ff4cb2c-50fb-4067-bc45-ba49d452081e.0d0c55c24cb0b8aef882966ded451d1b.jpeg?odnHeight=320&odnWidth=320&odnBg=FFFFFF",
      id:'Stojo',
      name: "Collapsible coffee Travel cup",
      rate: "$2563",
      icon: "https://t3.ftcdn.net/jpg/02/82/28/04/360_F_282280461_TGstFnrgEjDyiGfTxndBizvibaNrJrCd.jpg",
    },
    {
      img: "https://rythumitra.org/wp-content/uploads/2022/11/buds-1.jpg",
      id:'Beco',
      name: "Beco cotton buds with cotton stick",
      rate: "$375",
      icon: "https://t3.ftcdn.net/jpg/02/82/28/04/360_F_282280461_TGstFnrgEjDyiGfTxndBizvibaNrJrCd.jpg",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQov2A18wieVOZD33Ng6Ei2eQYR-Qd0J7tveg&usqp=CAU",
      id:'Puremazing',
      name: "Pureamazing Sweet vanila joy ",
      rate: "$199",
      icon: "https://t3.ftcdn.net/jpg/02/82/28/04/360_F_282280461_TGstFnrgEjDyiGfTxndBizvibaNrJrCd.jpg",
    },
    {
      img: "https://www.nobbys.in/cdn/shop/files/Golden-Grass-Tissue-Box-Nobbys-36.jpg?v=1687526328",
      id:'Nobbys',
      name: "Nobbys seagrass Natural tissue",
      rate: "$749",
      icon: "https://t3.ftcdn.net/jpg/02/82/28/04/360_F_282280461_TGstFnrgEjDyiGfTxndBizvibaNrJrCd.jpg",
    },
    {
      img: "https://5.imimg.com/data5/ANDROID/Default/2021/11/KG/ZR/LU/99567769/product-jpeg.jpg",
      id:'Vitro Naturals',
      name: "Vitro Naturals Floor cleaner",
      rate: "$350",
      icon: "https://t3.ftcdn.net/jpg/02/82/28/04/360_F_282280461_TGstFnrgEjDyiGfTxndBizvibaNrJrCd.jpg",
    },
  ];
  return (
    <>
      <Row>
        <h3 className="text-center m-4" style={{fontWeight:'bolder',fontStyle:'italic'}}>Special Collections</h3>
        {items.map((item) => (
          <Col>
            <Card className="m-4" style={{ width: "12rem" }}>
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
              <Card.Title className="text-center">{item.id}</Card.Title>
                <Card.Title className="text-center">{item.name}</Card.Title>
                <Card.Text className="text-center" style={{fontWeight:'bolder'}}>
                  {item.rate}
                  <Card.Img variant="top" src={start} />
                </Card.Text>
               
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Collection;
