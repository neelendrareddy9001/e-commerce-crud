import React from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

const CardDetails = () => {

  const getCardData = useSelector(({CartReducers}) => CartReducers.SelectedCard);
  console.log(getCardData,"getCardData")

  const {rname, price,imgdata, address, rating,somedata } = getCardData;



  return (
    <>
      <div className='container mt-2'>
        <h2 className='text-center'>Items Details Page</h2>
        <div className='iteamsdetails'>
          <div className='items_img'>
            <img className='mx-2' alt={rname} src={imgdata} />
          </div>
          <div className='details'>
            <Table>
              <tr>
                <td>
                  <p><strong>Restaurent</strong> : {rname}</p>
                  <p><strong>Price</strong> : ₹ {price}</p>
                  <p><strong>Dishes</strong> : {address}</p>
                </td>
                <td>
                    <p><strong>Rating :</strong>{rating} <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}> ★	</span></p>
                    <p><strong>Order Review :</strong><span >{somedata}	</span></p>
                    <p><strong>Remove :</strong> <span ><i className='fas fa-trash'  style={{color:"red",fontSize:20,cursor:"pointer"}}></i>	</span></p>
                  </td>
              </tr>
            </Table>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardDetails