import React from 'react'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Header from '../components/Header/Header'
import Home from '../components/Home/Home'
import Data from '../components/Data/Data'
import Seller from '../components/Sellers/Seller'
import Video from '../components/Videos/Video'
import Categories from '../components/Categories/Categories'
import Content from '../components/Content/Content'
import Dress from '../components/Dress/Dress'
import Recommend from '../components/Recommend/Recommend'
import Collection from '../components/Collections/Collection'
import Discount from '../components/Discounts/Discount'
import Deal from '../components/Deal/Deal'
import NewCollections from '../components/NewCollections/NewCollections'
import Images from '../components/Images/Images'
import EcoFriendly from '../components/Ecofriendly/EcoFriendly'
import Para from '../components/Para/Para'

function RouteLayout() {
  return (
    <>
      <Router>
         <Header/>
        <Routes>         
            <Route path='/' element={<Home/>}/>
            <Route path='/data' element={<Data/>}/>
            <Route path='/seller' element={<Seller/>}/>
            <Route path='/video' element={<Video/>}/>
            <Route path='/categories' element={<Categories/>}/>
            <Route path='/content' element={<Content/>}/>
            <Route path='/dress' element={<Dress/>}/>
            <Route path='/recommend' element={<Recommend/>}/>
            <Route path='/collection' element={<Collection/>}/>
            <Route path='/discount' element={<Discount/>}/>
            <Route path='/deal' element={<Deal/>}/>
            <Route path='/newcollections' element={<NewCollections/>}/>
            <Route path='/image' element={<Images/>}/>
            <Route path='/ecofriendly' element={<EcoFriendly/>}/>
            <Route path='/para' element={<Para/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default RouteLayout