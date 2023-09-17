import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import star from '../../assets/start.jpg'

function Discount() {
    const items = [
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2fF48jew12YL5l7WXG8lvWLVVxYuEyhLCi3UBG0BN0CeAPox2ZjCkUGBDxmaZkhzbW5k&usqp=CAU",
          id:'Herbal Witch',
          name: "Matcha Tea Soap with Healing Properties",
          rate: "$188",
          icon: "https://t3.ftcdn.net/jpg/02/82/28/04/360_F_282280461_TGstFnrgEjDyiGfTxndBizvibaNrJrCd.jpg",
        },
        {
          img: "https://m.media-amazon.com/images/I/612+H0BgivL.jpg",
          id:'Natural Mansoons',
          name: " Mansoons paste tabs",
          rate: "$196",
          icon: "https://t3.ftcdn.net/jpg/02/82/28/04/360_F_282280461_TGstFnrgEjDyiGfTxndBizvibaNrJrCd.jpg",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQII_FHz45S3okDCXh976p77hcfMBdrQ1sVRQ-6GrfJAyp77bTmf8F2eIGxSNpKRBGQVKw&usqp=CAU",
          id:'Wind Hill',
          name: "Wind Hill baby natural laundery detergent",
          rate: "$250",
          icon: "https://t3.ftcdn.net/jpg/02/82/28/04/360_F_282280461_TGstFnrgEjDyiGfTxndBizvibaNrJrCd.jpg",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkAoWqVXFPGxIKcBkLg9qaMwuUqSDaBL4lnnwhbj8RQlEKm6AoiOYjbfERUgGLdvgLDaE&usqp=CAU",
          id:'Peacock',
          name: "Peacock Travel steal water bottle",
          rate: "$355",
          icon: "https://t3.ftcdn.net/jpg/02/82/28/04/360_F_282280461_TGstFnrgEjDyiGfTxndBizvibaNrJrCd.jpg",
        },
        {
          img: "https://i.pinimg.com/originals/06/df/b9/06dfb9a512c417a51fb8ad1e756c0aa1.jpg",
          id:'The Wood',
          name: "Wooden [hone stand with multi functions",
          rate: "$325",
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
              <h5 className="text-center">{item.id}</h5>
                <Card.Title className="text-center">{item.name}</Card.Title>
                <Card.Text className="text-center" style={{fontWeight:'bolder'}}>
                  {item.rate}
                  <Card.Img variant="top" src={star} />
                </Card.Text>
               
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Discount
