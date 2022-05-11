import logo from './logo.svg';
import './App.css';
import ProductDetails from './components/ProductDetails';
import TataMg from './components/TataMg';
import FlashDeals from './components/FlashDeals';
import Trending from './components/Trending';
import ComboDeals from './components/ComboDeals';
import DealsDay from './components/DealsDay';
function App() {
  return (
    <div className="App">
     <ProductDetails/>
     <TataMg/>
     <FlashDeals/>
     <Trending/>
     <ComboDeals/>
     <DealsDay/>

    </div>
  );
}

export default App