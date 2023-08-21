import React from 'react'

export default function CartDetail(props) {
    const { cart, calculateGrandTotal, vatPercentage, discountPercentage, setShowCart, calculateTotalQuantity } = props
    return (

        <div className='cart_popup_outer'>
            <div className="overlay" onClick={() => setShowCart(false)}></div>
            <div className='cart_popup_inner'>
                <span className='recpt'>Receipt</span>

                <div className='cart_detail'>
            <span className="sale-no">Sale NO...001</span>
            <span className="date">Date:21-08-2023 12:30:13</span>
            <table>
                <thead>
                    <tr>
                                <td className="serial_number">#</td>
                        <td>products</td>
                        <td>Quantity</td>
                        <td>SubTotal</td>
                    </tr>

                </thead>
                <tbody>


                    {cart.map((item, index) => (
                        <tr key={index}>
                            <td className='serial_number'>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{(item.price * item.quantity).toFixed(2)} INR</td>
                        </tr>
                    ))}
                </tbody>


            </table>

            <div className="total_items">
                <span>Total Items</span>
                        <div>
                            <span>{calculateTotalQuantity()} Total</span>

                        </div>
                <span>{calculateGrandTotal()}INR</span>
            </div>
            <div className="disc">
                        <span>Discount</span>
                <span>{discountPercentage}%</span>
            </div>

            <div className="vat">
                        <span>VAT</span>
                <span>{vatPercentage}%</span>
            </div>
                </div>
                <div className="cls-btn" onClick={() => setShowCart(false)}>Close</div>
            </div>
        </div>
    )
}
