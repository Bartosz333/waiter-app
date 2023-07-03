import { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getTableById, sendData } from '../../../redux/tablesRedux';
import './Table.scss';
import { BillInput } from '../../features/BillInput';
import { PeopleInput } from '../../features/PeopleInput';
import { StatusSelect } from '../../features/StatusSelect';

export const Table = () => {
  const { id } = useParams();
  const table = useSelector((state) => getTableById(state, id));

  const [status, setStatus] = useState(table.status);
  const [peopleAmount, setPeopleAmount] = useState(Number(table.peopleAmount));
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(
    Number(table.maxPeopleAmount)
  );
  const [bill, setBill] = useState(Number(table.bill));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === 'Cleaning' || status === 'Free') {
      setPeopleAmount(0);
    }
    if (status !== 'Busy') {
      setBill('0');
    }
  }, [status]);

  const handlePeopleAmountChange = (e) => {
    const newValue = Number(e.target.value);
    setPeopleAmount(newValue);
    if (newValue === maxPeopleAmount) {
      setMaxPeopleAmount(newValue);
    }
  };

  const handleMaxPeopleAmountChange = (e) => {
    const newValue = Number(e.target.value);
    setMaxPeopleAmount(newValue);
    if (peopleAmount !== newValue) {
      setPeopleAmount(newValue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted!');
    const obj = {
      id: id,
      status: status,
      bill: bill.toString(),
      peopleAmount: peopleAmount.toString(),
      maxPeopleAmount: maxPeopleAmount.toString(),
    };
    dispatch(sendData(obj));
    console.log(obj);
    navigate('/');
  };

  if (!table) return <Navigate to='/' />;
  return (
    <div>
      <h1 className='my-4'>Table {table.id}</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className='my-3'>
          <Form.Label column sm={3} md={2}>
            <strong>Status:</strong>
          </Form.Label>
          <Col sm={9} md={4} lg={3}>
            <StatusSelect status={status} setStatus={setStatus} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='my-3'>
          <Form.Label column sm={3} md={2}>
            <strong>People:</strong>
          </Form.Label>
          <Col sm={9} md={4} lg={3}>
            <PeopleInput
              peopleAmount={peopleAmount}
              maxPeopleAmount={maxPeopleAmount}
              handlePeopleAmountChange={handlePeopleAmountChange}
              handleMaxPeopleAmountChange={handleMaxPeopleAmountChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className={status !== 'Busy' ? 'd-none' : 'my-3'}>
          <Form.Label column sm={3} md={2}>
            <strong>Bill:</strong>
          </Form.Label>
          <Col sm={9} md={6} lg={4}>
            <BillInput bill={bill} setBill={setBill} />
          </Col>
        </Form.Group>
        <Button variant='primary' type='submit'>
          Update
        </Button>
      </Form>
    </div>
  );
};
