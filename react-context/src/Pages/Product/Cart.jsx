import React from 'react'
import useProduct from '../../Hooks/useProduct'
function Cart() {
  const { cart, subTotal, total, tax, amount} = useProduct()
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12 text-center">
                <h4 className="display-4 text-dark">Cart</h4>
            </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="table table-responsive">
              <table className="table table-bordered table-striped table-hover">
                <thread>
                  <tr>
                    <th>#</th>
                    <th>id</th>
                    <th>title</th>
                    <th>price</th>
                    <th>Action</th>
                  </tr>
                </thread>
                <tbody>
                  {
                    cart?.map((val,index)=>{
                      return(
                        <tr key={index}>
                          <td>{val?.id}</td>
                          <td>{val?.title}</td>

                          <td>
                            <img src={val?.thumbnail} alt="no product found" 
                            className='img-fluid' width={100} height={100}/>
                          </td>
                          <td> &#8377; { val?.price}</td>
                          <td>
                            <div className="flex items-center justify-between">
                              <span className="text-light badge bg-danger" style={{cursor:"pointer"}}>
                                <i className="bi bi-dash"></i>
                              </span>
                              <strong className="ms-2 me-2">{val?.quantity}</strong>
                              <span className="text-light badge bg-success" style={{cursor: "pointer"}}>
                                <i className='bi bi-plus'></i>
                              </span>
                            </div>
                          </td>
                          <td>
                              &#8377; {subTotal}
                          </td>
                          <td>
                            <button className="btn btn-sm btn-outline-danger">
                              <i className='bi bi-plus'></i>
                            </button>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
          <div className='card'>
            <div className="card-header">
              <h4>Product Summary</h4>
            </div>

            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Amount;</strong>
                  <span className="float-end"> &#8377; {total}</span>
                </li>
              </ul>
            </div>

            <div className="card-footer">
              <button className="btn btn-outline-primary float-end">
                Continue to check out <i className='bi bi-arrow-right'></i>
              </button>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Cart
