import React from 'react';
import SuperMarketTemplate from './SuperMarketTemplate';
import ShopItemList from './ShopItem/ShopItemList';
import BasketItemList from './Basket/BasketItemList';
import TotalPrice from '../TotalPrice';

const SuperMarket = () => {
  return <SuperMarketTemplate 
    items={<ShopItemList />} 
    basket={<BasketItemList />} 
    total={<TotalPrice/>}
    />;
};

export default SuperMarket;