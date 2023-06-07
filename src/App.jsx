import Header from './components/Header/Header';
import Home from './pages/Home/Home';

// if more than 1 page, it good idea to use react-router-dom for routing
function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
