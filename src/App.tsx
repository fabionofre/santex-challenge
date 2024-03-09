import Header from './components/Header';
import ProductList from './components/ProductList';

function App() {
  return (
    <>
      <Header></Header>
      <div className="main-container">
        <video src="background-sam.mp4" loop muted playsInline autoPlay className="video-container"></video>
        <ProductList></ProductList>
      </div>
    </>
  );
}

export default App;
