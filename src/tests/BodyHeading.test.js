import BodyHeading from '../components/BodyHeading';
import { render } from '@testing-library/react';

test('Heading content can be rendered', () => {
    let text = "Test heading"; 
    const { getByText } = render(<BodyHeading heading={text}/>);
    expect(getByText(text)).toBeInTheDocument();
});

test('Heading content snapshot', () => {
    const { container } = render(<BodyHeading heading="Test heading"/>);
    expect(container).toMatchSnapshot();
});
