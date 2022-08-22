import logo from './logo.svg';
import './App.css';
import HeroSection from './Component/HeroSection/HeroSection';
import HowMint from './Component/HowMint/HowMint';
import SwapPortal from './Component/SwapPortal/SwapPortal';
import SocialConnect from './Component/SocialConnect/SocialConnect';
import Paralax2 from './Component/Paralax2/Paralax2';
import Paralax3 from './Component/Paralax3/Paralax3';
import UpgradedPunk from './Component/UpgradedPunk/UpgradedPunk';
import OgQuestions from './Component/OgQuestions/OgQuestions';
function App() {
  return (
    <div className="App">
      <HeroSection></HeroSection>
      <Paralax2></Paralax2>
      <UpgradedPunk></UpgradedPunk>
<SwapPortal></SwapPortal>
      <Paralax3/>
      <OgQuestions></OgQuestions>
      <SocialConnect></SocialConnect>
    </div>
  );
}

export default App;
