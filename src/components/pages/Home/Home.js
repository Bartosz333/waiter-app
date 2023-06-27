import React, { useState, useEffect } from 'react';
import { Button, ListGroup, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTables, removeTableRequest } from '../../../redux/tablesRedux';
import { Link, useNavigate } from 'react-router-dom';
import { Loading } from '../../views/Loading';

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tables = useSelector(getAllTables);
  const [loading, setLoading] = useState(true); // We add the "loading" state

  useEffect(() => {
    // Sample API request or other operation that takes time
    setTimeout(() => {
      setLoading(false); // Set the "loading" state to false after 2 seconds
    }, 2000);
  }, []);

  const handleClick = (id) => {
    dispatch(removeTableRequest(id));
    navigate('/');
  };

  if (loading) {
    // Display the spinner if it's loading
    return <Loading />;
  }

  return (
    <div>
      <h1 className='my-4'>All tables</h1>
      <ListGroup variant='flush'>
        {tables.map((table) => (
          <ListGroup.Item key={table.id} status={table.status} className='px-0'>
            <Stack direction='horizontal' gap={4}>
              <h2 className='my-2'>Table {table.id}</h2>
              <p className='mb-0'>
                <strong>Status: </strong>
                {table.status}
              </p>
              <Link className='ms-auto' to={`/table/${table.id}`}>
                <Button variant='primary'>Show more</Button>
              </Link>
              <Button variant='primary' onClick={() => handleClick(table.id)}>
                <i className='fa fa-solid fa-trash'></i>
              </Button>
            </Stack>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
