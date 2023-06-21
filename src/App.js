import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/pages/Home/Home';
import { NotFound } from './components/pages/NotFound/NotFound';
import { Table } from './components/pages/Tables/Table';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTables } from './redux/tablesRedux';
import { Footer } from './components/views/Footer';
import { Header } from './components/views/Header';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/table/:id' element={<Table />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
