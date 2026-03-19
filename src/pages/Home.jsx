import Hero from '../components/home/Hero';
import Identity from '../components/home/Identity';
import History from '../components/home/History';

const Home = () => {
  return (
    <div className="bg-abyss min-h-screen">
      <Hero />
      <Identity />
      <History />
    </div>
  );
};

export default Home;
