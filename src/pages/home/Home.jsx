import React from 'react'
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './trenDing/Trending'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'
import './Home.scss'
const Home = () => {
  return (
    <>
      <div className='homePage'>
        <HeroBanner />
        <Trending />
        <Popular />
        <TopRated />
      </div>
    </>
  )
}

export default Home
