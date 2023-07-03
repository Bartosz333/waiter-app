import { Col, Form, Row } from 'react-bootstrap';

export const BillInput = ({ bill, setBill }) => {
  return (
    <Row>
      <Col xs={7} sm={6} md={4}>
        <Form.Control
          type='number'
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        />
      </Col>
      <Col xs={5} sm={6}>
        <p className='dollar'>$</p>
      </Col>
    </Row>
  );
};
