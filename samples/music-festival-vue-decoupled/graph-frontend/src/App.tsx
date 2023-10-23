import './scss/main.scss';
import { Locales, useStartQuery } from './generated';
import { useCountryTestQuery } from './country-generated';
import Header from './components/header';
import LandingPage from './pages/LandingPage/LandingPage';
import ArtistContainerPage from './pages/ArtistContainerPage';
import ArtistDetailsPage from './pages/ArtistDetailsPage';

const App = () => {

  let relativePath = window.location.pathname.length > 1 ? window.location.pathname : '/en'
  if (relativePath.endsWith('/')) {
    relativePath = relativePath.substring(0, relativePath.length - 1)
  }
  const urlSegments = relativePath.split('/')
  const language = urlSegments.length == 0 ? 'en' : (urlSegments[0].length > 0 ? urlSegments[0] : (urlSegments.length > 1 ? urlSegments[1] : 'en'))
  const locale = language.replace('-', '_')

  const countryData = useCountryTestQuery({
    endpoint: 'https://countries.trevorblades.com',
    fetchParams: {
      headers: [['Content-Type', 'application/json']]
    }
  });

  const { data } = useStartQuery({ relativePath: relativePath, locale: locale as Locales });

  if (data) {
    return (
      <>
        <Header/>

        {
          data?.Content?.items?.map((content, idx) => {
            if (content?.__typename === 'LandingPage') {
              return (
                <LandingPage content={content} countryData={countryData.data} key={idx} />
              );
            }
            else if (content?.__typename === 'ArtistContainerPage') {

              return (
                <ArtistContainerPage content={content} key={idx} />
              )
            }
            else if (content?.__typename === 'ArtistDetailsPage') {

              return (
                <ArtistDetailsPage content={content} key={idx} />
              )
            }
          })
        }
      </>
    );
  }

  return (
    <div className="App">
      Loading
    </div>
  );
};

export default App;