import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useFetch from '../../../hooks/useFetch'
import { Img, ContentWrapper } from '../../../components'
import './HeroBanner.scss'

const HeroBanner = () => {
  const [background, setBackground] = useState("")
  const [query, setQuery] = useState("")
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home)
  const { data, loading } = useFetch('/movie/upcoming');

  useEffect(() => {
    // noi voi phan phia truoc url ben app 
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data])

  const searchQueryhandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  }

  return (
    <div className='heroBanner'>
      {
        !loading &&
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      }
      <div className="opacity-layer">
      </div>
      <ContentWrapper>
        <div className='wrapper'>
          <div className="heroBannerContent">
            <span className="title">Wecome!</span>
            <span className="subTitle">
              Millions of movies, TV shows and people
              to discover
              Explore now
            </span>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search for a movie or tv show...."
                onKeyUp={searchQueryhandler}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button>Search</button>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default HeroBanner
