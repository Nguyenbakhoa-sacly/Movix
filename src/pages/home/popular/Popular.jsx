import React, { useState } from 'react'
import { ContentWrapper, SwitchTabs, Carousel } from '../../../components';
import useFetch from '../../../hooks/useFetch';
const Popular = () => {
  const [endpoint, setEndpoint] = useState("movie");
  const { data, loading } = useFetch(`/${endpoint}/popular`);
  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
    console.log(tab);
  };

  return (
    <>
      <div className="carouselSection">
        <ContentWrapper>
          <span className="carouselTitle">What's Popular</span>
          <SwitchTabs
            data={["Movies", "TV Shows"]}
            onTabChange={onTabChange}
          />
        </ContentWrapper>
        <Carousel
          data={data?.results}
          endpoint={endpoint}
          loading={loading}
        />
      </div>
    </>
  )
}

export default Popular

