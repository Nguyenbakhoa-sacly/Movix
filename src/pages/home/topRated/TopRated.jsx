import React, { useState } from 'react'
import { ContentWrapper, SwitchTabs, Carousel } from '../../../components';
import useFetch from '../../../hooks/useFetch';
const TopRated = () => {
  const [endpoint, setEndpoint] = useState("movie");
  const { data, loading } = useFetch(`/${endpoint}/top_rated`);
  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
    console.log(tab);
  };

  return (
    <>
      <div className="carouselSection">
        <ContentWrapper>
          <span className="carouselTitle">Top Rated</span>
          <SwitchTabs
            data={["Movies", "TV Shows"]}
            onTabChange={onTabChange}
          />
        </ContentWrapper>
        <Carousel
          endpoint={endpoint}
          data={data?.results}
          loading={loading} />
      </div>
    </>
  )
}

export default TopRated

