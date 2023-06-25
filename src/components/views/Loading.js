import React from 'react';
import { Spinner } from 'react-bootstrap';

export const Loading = () => {
  return (
    <div className='text-center py-4'>
      <Spinner animation='border' variant='primary' role='status'></Spinner>
      <p>Loading...</p>
    </div>
  );
};
