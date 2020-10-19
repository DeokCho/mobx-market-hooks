import React from 'react'
import './BasketItem.css'
import {useObserver} from 'mobx-react'

const BasketItem = ({name, price, count, onTake}) => {
    return useObserver (()=>(
        <div className="BasketItem">
            <div className="name">{name}</div>
            <div className="price">{price}원</div>
            <div className="count">{count}</div>
            <div className="return" onClick={()=>onTake(name)}></div>
        </div>
    ))
} 

export default BasketItem