import React, { useState } from 'react';
import  Card  from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardsData from './CardData';
import "./styles.css";


const Cards = () => {
  const [data, setData] = useState(CardsData);
  console.log(data);
  return (
    <div className='container mt-3'>
      <h2 className='text-center'>Add to Cart Projects</h2>
      <div className='row d-flex justify-content-centner align-items-center'>
        {data.map((element, id) => {
          return(
            <>
              <Card style={{ width: '18rem', border: "none" }} className='mx-2 mt-4 card_style'>
                <Card.Img variant="top" src={element.imgdata} style={{height: "16rem"}} className='mt-3'/>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                      Price : ₹ {element.price}
                  </Card.Text>
                  <div className='button_div d-flec justifyo-content-center'>
                    <Button variant="primary" className='col-lg-12'>Add to Cart</Button>
                  </div>
                </Card.Body>
              </Card>
            </>
          )
        }
        )}
      </div>
    </div>
  )
}

export default Cards