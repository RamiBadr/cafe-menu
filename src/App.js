import './App.css';
import Category from './Components/Category';
import Menu from './Components/Menu';
import data from './data/data'
import ContextProvider from './storage/ContextProvider';



function App() {

  return (
    <main>
      <section className='menu'>
        <div className='title'>
          <h2>Our Menu</h2>
        </div>
        <ContextProvider>
          <Category />
          <Menu />
        </ContextProvider>
      </section>
    </main>
  );
}

export default App;
