import BodyComponent from '../components/BodyContent';
import { render } from '@testing-library/react';

test('Body content can be rendered', () => {
    let text = "Test render"; 

    const { container, getByText } = render(
        <BodyComponent>
            <p>
                {text}
            </p>
        </BodyComponent>
    );
    
    expect(getByText(text)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
});