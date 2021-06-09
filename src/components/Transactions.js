import React from 'react'
import {useStateValue} from "../central_store/StateProvider";

function Transactions({bookId}) {
    console.log("trans", bookId);
    const [{books},dispatch]= useStateValue();
    console.log("Trans", books);

    return (
        <div className="transactions">
            {/* Transations lists displaying table */}
            <table className="table">
                <tr className="table_heading">
                    <th style={{width:"100px"}}>Date&Time</th>
                    <th>Client</th>
                    <th>Product</th>
                    <th style={{width:"80px"}}>Entity Type</th>
                    <th>Total Amount</th>
                    <th>Cash</th>
                    <th>Credit</th>
                </tr>
                {
                    books.map((item)=>(
                    item.offline_id === bookId ?
                      (  <tr>
                        <td>{item.sellbook.date}</td>
                        <td>Data-1</td>
                        <td>Data-1</td>
                        <td>Data-1</td>
                        <td>Data-1</td>
                        <td>{item.sellbook.cash}</td>
                        <td>Data-1</td>
                    </tr>) : " "
                    ))
                }
               
            </table>
        </div>
    )
}

export default Transactions
