import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Loader } from '@/components/loader/loader';

describe('Loader', () => {
  it('should render correctly', () => {
    const { container } = render(<Loader className='test-class' />);
    const loaderElement = container.querySelector('svg');

    expect(loaderElement).toBeInTheDocument();
    expect(loaderElement).toHaveClass('animate-spin');
    expect(loaderElement).toHaveClass('test-class');
  });
});
