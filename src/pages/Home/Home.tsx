import {} from 'react';
import './Home.scss'
import HomeIntro from './HomeIntro';
import BiggestLabels from './BiggestLabels';

function Home() {
  return (
    <div id='home'>
        <HomeIntro />
        <BiggestLabels />
    </div>
  )
}

export default Home