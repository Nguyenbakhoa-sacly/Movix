
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { fetchDataFromAPI } from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApifiguration, getGenres } from './store/homeSlice'
import { Home, Detail, Explore, SearchResult, NotFound } from './pages'
import { Header, Footer } from './components'
function App() {

  const dispatch = useDispatch()
  const { url } = useSelector((state) => state.home)
  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, [])

  const fetchApiConfig = () => {
    fetchDataFromAPI('/configuration')
      .then((res) => {
        // console.log(res)
        const url = {
          //lay phan url phia truoc
          backdrop: res.images.secure_base_url + 'original/',
          poster: res.images.secure_base_url + 'original/',
          profile: res.images.secure_base_url + 'original/',
        }
        dispatch(getApifiguration(url));

      })
      .catch((err) => {
        console.log(err)
      })
  };

  const genresCall = async () => {
    let promises = [];
    let endPoint = ['tv', 'movie']
    let allGenres = {};

    endPoint.forEach((url) => {
      promises.push(fetchDataFromAPI(`/genre/${url}/list`));
    })
    const data = await Promise.all(promises);

    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item))
    })
    dispatch(getGenres(allGenres));

  }
  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Home />} />
        <Route
          path='/:mediaType/:id'
          element={<Detail />} />
        <Route
          path='/search/:query'
          element={<SearchResult />} />
        <Route
          path='/explore/:mediaType'
          element={<Explore />} />
        <Route
          path='/*'
          element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
