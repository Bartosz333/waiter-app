import React from 'react';
import { Spinner } from 'react-bootstrap';

export const Loading = () => {
  return (
    <div className='text-center py-4'>
      <Spinner animation='border' variant='primary' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
      <p>Loading...</p>
    </div>
  );
};
