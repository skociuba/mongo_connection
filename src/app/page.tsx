import FirstComponent from './components/FirstComponent';
import LastComponent from './components/LastComponent';
import MiddleComponent from './components/MiddleComponent';
import Hero from './components/Hero';

const Home: React.FC = () => (
  <>
    <div className="w-full overflow-hidden">
      <Hero />
      <FirstComponent />
      <MiddleComponent />
      <LastComponent />
    </div>
  </>
);

export default Home;
