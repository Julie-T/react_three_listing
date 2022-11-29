import Listing from './components/Listing'
import data from './models/etsy.json'

function App() {
  return (
    <div className="item-list">
    <Listing items={data}/>
    </div>
  );
}

export default App;
