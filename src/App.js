import { useCallback, useState } from 'react';
import { Header } from './components/header/header';
import { MainPage } from './pages/main-page';
import './styles/colors.scss';
import './styles/index.scss';

function App() {
  const [search, setSearch] = useState();

  const setSearchCallback = useCallback((value) => {
    setSearch(value);
  }, []);

  return (
    <>
      <Header setSearch={setSearchCallback} />
      <MainPage search={search} />
    </>
  );
}

export default App;
