import BodyHeading from '../components/BodyHeading';
import { render } from '@testing-library/react';

test('Heading content can be rendered', () => {
    let text = "Test heading"; 

    const { container, getByText } = render(<BodyHeading heading={text}/>);
    
    expect(getByText(text)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
});
