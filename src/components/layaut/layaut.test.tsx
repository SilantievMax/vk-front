import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Layaut } from './layaut';

describe('Layaut', () => {
  it('should render children correctly', () => {
    const { getByText } = render(
      <Layaut>
        <div>Child 1</div>
        <div>Child 2</div>
      </Layaut>,
    );

    expect(getByText('Child 1')).toBeInTheDocument();
    expect(getByText('Child 2')).toBeInTheDocument();
  });

  it('should apply correct CSS classes', () => {
    const { container } = render(
      <Layaut>
        <div>Child</div>
      </Layaut>,
    );

    const layautElement = container.firstChild;
    expect(layautElement).toHaveClass('ml-auto');
    expect(layautElement).toHaveClass('mr-auto');
    expect(layautElement).toHaveClass('flex');
    expect(layautElement).toHaveClass('max-w-7xl');
    expect(layautElement).toHaveClass('flex-col');
    expect(layautElement).toHaveClass('gap-4');
    expect(layautElement).toHaveClass('px-2');
    expect(layautElement).toHaveClass('pt-4');
  });
});
