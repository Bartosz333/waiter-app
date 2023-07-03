import { Form } from 'react-bootstrap';

export const StatusSelect = ({ status, setStatus }) => {
  return (
    <Form.Select value={status} onChange={(e) => setStatus(e.target.value)}>
      <option>Busy</option>
      <option>Reserved</option>
      <option>Free</option>
      <option>Cleaning</option>
    </Form.Select>
  );
};
