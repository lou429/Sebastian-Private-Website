import {render} from '@testing-library/react';
import Tooltip from '../components/tooltip';

test('Tooltip snapshot test', () => {
    const { container } = render(
        <Tooltip text="Test render">
            <h1>Heading</h1>
        </Tooltip>
    );

    expect(container).toMatchSnapshot();
})

test('Can tooltips render', () => {
    let text = "Tooltip test";

    const { getByText } = render(
        <Tooltip text={text}>
            <h1>Heading</h1>
        </Tooltip>
    );

    expect(getByText(text)).toBeInTheDocument();
});
