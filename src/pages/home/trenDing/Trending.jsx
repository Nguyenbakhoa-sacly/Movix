import React, { useState } from 'react'
import { ContentWrapper, SwitchTabs, Carousel } from '../../../components';
import './Trending.scss';
import useFetch from '../../../hooks/useFetch';
const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");
  const { data, loading } = useFetch(`/trending/movie/${endpoint}`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");

  };

  return (
    <>
      <div className="carouselSection">
        <ContentWrapper>
          <span className="carouselTitle">Trending</span>
          <SwitchTabs
            data={["Day", "Week"]}
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

export default Trending
