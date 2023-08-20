import React from 'react'

export default function CartDetail(props) {
    const { cart, calculateGrandTotal, vatPercentage, discountPercentage } = props
    return (
        <div className='cart_popup'>
            <span>Receipt</span>
            <span className="sale-no">Sale NO...001</span>
            <span className="date">Date:21-08-2023 12:30:13</span>
            <table>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>products</td>
                        <td>Quantity</td>
                        <td>SubTotal</td>
                    </tr>

                </thead>
                <tbody>


                    {cart.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{(item.price * item.quantity).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>


            </table>

            <div className="total_items">
                <span>Total Items</span>
                <span></span>
                <span>Total</span>
                <span>{calculateGrandTotal()}INR</span>
            </div>
            <div className="disc">
                <span>{discountPercentage}%</span>
            </div>

            <div className="vat">
                <span>{vatPercentage}%</span>
            </div>
        </div>
    )
}
