import { render } from '@testing-library/react';
import ContentWrapper from '../components/contentwrapper';

test('Does content wrapper render', () => {
    let heading = "render test heading";
    let text = "render test content";

    const { container, getByText } = render(
        <ContentWrapper heading={heading}>
            <p>{text}</p>
        </ContentWrapper>
    );

    expect(getByText(text)).toBeInTheDocument();
    expect(getByText(heading)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
});