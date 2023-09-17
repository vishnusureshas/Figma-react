import React from 'react'
import './Home.css';
import green from '../../assets/green.jpg'
import Data from '../Data/Data';
import Seller from '../Sellers/Seller';
import Video from '../Videos/Video';
import Categories from '../Categories/Categories';
import Content from '../Content/Content';
import Dress from '../Dress/Dress';
import Recommend from '../Recommend/Recommend';
import Collection from '../Collections/Collection';
import Discount from '../Discounts/Discount';
import Deal from '../Deal/Deal';
import NewCollections from '../NewCollections/NewCollections';
import Images from '../Images/Images';
import EcoFriendly from '../Ecofriendly/EcoFriendly';
import Para from '../Para/Para';
// import green2 from '../../assets/green2.jpg'

function Home() {
  return (
    <div className='header'>
       <div className='header-content'>
           <h1>ZERO WASTE <br></br>LIVING</h1> <br></br>         
           <h5>For the Eco Friendly future</h5>
           <img src={green} alt='' />  
         
           <button className='btn btn-primary m-4'>How to order</button> 
           <button className='btn btn-danger m-4 '>See Categories</button>      
       </div>
       <Data/>
       <Seller/>
       <Video/>
       <Categories/>
       <Content/>
       <Dress/>
       <Recommend/>
       <Collection/>
       <Discount/>
       <Deal/>
       <NewCollections/>
       <Images/>
       <EcoFriendly/>
       <Para/>
    </div>
    
  )
}

export default Home
