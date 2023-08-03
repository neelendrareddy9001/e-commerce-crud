import React from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import { DLT } from '../redux/actions/Actions';
import { useNavigate, useParams } from 'react-router-dom';


const CardDetails = () => {

  const getCardData = useSelector(({CartReducers}) => CartReducers.SelectedCard);
  console.log(getCardData,"getCardData")

  const history = useNavigate();

  const dispatch = useDispatch();

  const dlt = (id) => {
    dispatch(DLT(id));
    history("/");
  }

  const {id,rname, price,imgdata, address, rating,somedata } = getCardData;



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
                    <p><strong>Remove :</strong> <span ><i className='fas fa-trash'  style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={() => dlt(id)}></i>	</span></p>
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