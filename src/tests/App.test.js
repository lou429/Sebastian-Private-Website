import { render } from '@testing-library/react';
import App from '../App';

test('Render full app', () => {
  const { getByText } = render(<App/>);
  expect(getByText('Home')).toBeInTheDocument();
});
