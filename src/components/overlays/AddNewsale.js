import React,{useState,useEffect} from 'react'
import "./AddNewPurchase.css"
import {BsArrowLeft} from "react-icons/bs";
import axios from 'axios';


function AddNewSale() {
    const [client,setClient] = useState("")
    const [product,setProduct] = useState("")
    const [price,setPrice] = useState(0)
    const [unit,setUnit] = useState("KG")
    const [quantity,setQuantity] = useState(0)
    const [cash,setCash] = useState(0)
    const [date_,setDate] = useState("27/12/2020")
    const [time,setTime] = useState("05:30")
    const [credit,setCredit] = useState(0);
    const [total_amount,setTotalAmount] = useState(0)
    const userid="108sLjKgFLRKWXEXvIGNLAYOUku1";
    const offline_id = 6;


    const handleSale = (e)=>{
        const sale_data = JSON.stringify({
            "person":[client],
            "product_name":[product],
            "price":[total_amount],
            "unit":[unit],
            "quantity":[quantity],
            "sell":["0"],
            "unit_size":["1"],
            "offline_id":[offline_id.toString()],
            "purchase":[cash],
            "product":[product],
            "date":[date_],
            "time":[time]
        })

        setCash(0);
        setClient(0);
        setPrice("");
        setProduct("");
        setQuantity(0);
        setUnit(0);
        setDate("")
        setTime("")

        axios.post(`http://ec2-18-191-151-100.us-east-2.compute.amazonaws.com/sellregister/document/${offline_id}/${userid}`,
        sale_data).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
    }

  

    useEffect(()=>{
        setTotalAmount(price * quantity);
    },[quantity])

    useEffect(()=>{
        setCredit(total_amount-cash);
    },[cash])
    return (
        <div className="purchase_sidebar">
            <div className="purchase_sidebar_header">
                <div className="purchase_title">
                    <BsArrowLeft />
                    <div style={{marginLeft:"10px"}}>Add New Purchase</div>
                </div>
            </div>

            <div className="purchase_sidebar_form">
                <div className="purchase_sidebar_date_time">
                    
                    <input type="date" value={date_} className="date_time" onChange={(e)=>{setDate(e.target.value)}}/>

                    <input type="time" value={time} className="date_time" onChange={(e)=>{setTime(e.target.value)}}/>

                    
                    {/* <div className="date_time">
                        05:27 PM
                    </div> */}
                </div>


                <div className="purchase_sidebar_input">
                    <div className="input_label">
                        Client Name
                    </div>
                    <div className="purchase_input_box">
                            <input type="text" value={client} className="input_element" style={{height:"60px"}} placeholder="Ex- Ramesh" onChange={(e)=>{setClient(e.target.value)}}/>
                    </div>
                </div>

                <div className="purchase_sidebar_input">
                    <div className="input_label">
                        Enter Product
                    </div>
                    <div className="purchase_input_box">
                            <input type="text" value={product} className="input_element" style={{height:"60px"}} onChange={(e)=>{setProduct(e.target.value)}} placeholder="Ex- Pizza"/>
                    </div>
                </div>

                <div className="purchase_sidebar_price">
                    <div className="price">
                        <div className="input_label">
                            Price
                        </div>
                        <div className="purchase_input_box">
                            <input type="text" value={price} className="input_element" style={{height:"60px"}} onChange={(e)=>{setPrice(e.target.value)}} />
                        </div>
                    </div> 


                    <div className="price">
                        <div className="input_label">
                            Price Unit
                        </div>
                        <div className="price_unit">
                                <input type="text" value={unit} onChange={(e)=>{setUnit(e.target.value)}} style={{height:"60px",width:"100px"}} placeholder="1"/>
                                <div className="unit_button">KG</div>
                        </div>
                    </div>
                </div>

                <div    className="purchase_sidebarPrice" 
                        style={{fontWeight:"700",fontSize:"22px" ,marginTop:"10px",display:"flex",flexDirection:"column",
                        alignItems:"flex-start",justifyContent:"",paddingTop:"15px"}}>
                        <div className="input_label">
                            Total Quantity
                        </div>   
                        <div  style={{display:"flex",flexDirection:"row"}}>
                            <input type="number" value={quantity} className="input_element price" 
                                
                            onChange={(e)=>{setQuantity(e.target.value)}} style={{padding:"0px 10px"}} placeholder="1"/>
                            
                            <div style={{width:"500px"}} >
                                <div>Total Amount</div>
                                <div>$ {total_amount}</div>
                            </div>
                        </div>
                </div>


                <div className="purchase_sidebarPrice" style={{fontWeight:"700",fontSize:"22px" ,display:"flex",flexDirection:"column",
                        alignItems:"flex-start",justifyContent:"",paddingTop:"15px"}}>
                        <div className="input_label">
                            Cash
                        </div>   
                        <div  style={{display:"flex",flexDirection:"row"}}>
                            <input type="number" value={cash} onChange={(e)=>{setCash(e.target.value)}} className="input_element price" style={{padding:"0px 10px"}} placeholder="1"/>
                            <div style={{width:"500px"}} >
                                
                                <div>Credit</div>
                                <div>$ {credit}</div>
                            </div>
                        </div>
                </div>


               
            </div>
            <div className="sidebar_footer" style={{position:"absolute",bottom:"15px    "}}>
                <div className="footer_button" onClick={handleSale}>
                    Save
                </div>
            </div>
        </div>
    )
}

export default AddNewSale
