import Main from '../components/Main'
import Row from '../components/Row'
import Requests from '../requests'

const home = () => {
  return (
    <>
        <Main />
        <Row title='Anstehende' id='1' fetchUrl={Requests.requestUpcoming} />
        <Row title='Top Rated' id='2' fetchUrl={Requests.requestTopRated} />
        <Row title='Trends' id='3' fetchUrl={Requests.requestTrending} />
        <Row title='Populär' id='4' fetchUrl={Requests.requestPopular} />
        <Row title='Horror' id='5' fetchUrl={Requests.requestHorror} />
    </>
  )
}

export default home
