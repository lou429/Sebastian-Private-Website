import { render } from '@testing-library/react';
import ContentWrapper from '../components/contentwrapper';

test('Content wrapper snapshot', () => {
    const { container } = render(
        <ContentWrapper heading="heading">
            <p>text</p>
        </ContentWrapper>
    );

    expect(container).toMatchSnapshot();
})

test('Does content wrapper render', () => {
    let heading = "render test heading";
    let text = "render test content";

    const { getByText } = render(
        <ContentWrapper heading={heading}>
            <p>{text}</p>
        </ContentWrapper>
    );

    expect(getByText(text)).toBeInTheDocument();
    expect(getByText(heading)).toBeInTheDocument();
});