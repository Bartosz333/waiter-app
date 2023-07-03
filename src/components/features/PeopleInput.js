import { Col, Form, Row } from 'react-bootstrap';

export const PeopleInput = ({
  peopleAmount,
  maxPeopleAmount,
  handlePeopleAmountChange,
  handleMaxPeopleAmountChange,
}) => {
  return (
    <Row>
      <Col xs={6} sm={5} md={5}>
        <Form.Control
          type='number'
          min='0'
          max={maxPeopleAmount}
          value={peopleAmount || ''}
          onChange={handlePeopleAmountChange}
        />
      </Col>
      <Col xs={1} sm={2} className='dollar'>
        /
      </Col>
      <Col xs={5} sm={5} md={5}>
        <Form.Control
          type='number'
          min='0'
          max='10'
          value={maxPeopleAmount || ''}
          onChange={handleMaxPeopleAmountChange}
        />
      </Col>
    </Row>
  );
};
