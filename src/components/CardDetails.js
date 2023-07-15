import React from 'react';
import Table from 'react-bootstrap/Table';

const CardDetails = () => {
  return (
    <>
      <div className='container mt-2'>
        <h2 className='text-center'>Items Details Page</h2>
        <div className='iteamsdetails'>
          <div className='items_img'>
            <img className='mx-2' src='https://b.zmtcdn.com/data/pictures/3/18514413/0a17b72e9fec52a3ca736f4c2ea3646f_o2_featured_v2.jpg' />
          </div>
          <div className='details'>
            <Table>
              <tr>
                <td>
                  <p><strong>Restaurent</strong> : Masala Theory</p>
                  <p><strong>Price</strong> : ₹ 300</p>
                  <p><strong>Dishes</strong> : North Idian, Biryani, Mughlai</p>
                  <p><strong>Total</strong> : ₹ 300</p>
                </td>
                <td>
                    <p><strong>Rating :</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}> ★	</span></p>
                    <p><strong>Order Review :</strong> <span >	</span></p>
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