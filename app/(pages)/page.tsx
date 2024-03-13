import Hero from '../components/hero/Hero';
import LoadAnimationW from '../components/wrappers/LoadAnimationW';
LoadAnimationW

const HomePage = () => {
  return (
    <main>
      <LoadAnimationW>
        <Hero />
      </LoadAnimationW>
    </main>
  );
};

export default HomePage;
