import {render, screen, fireEvent} from '@testing-library/react-native';
import ApiErrorMessage from '../../src/components/ApiErrorMessage/ApiErrorMessage';

describe('Api Error Message', () => {
  it('renders default error message', () => {
    render(<ApiErrorMessage />);
    expect(screen.getByText('Error')).toBeOnTheScreen();
    expect(screen.getByText('Unknown Error')).toBeOnTheScreen();
  });

  it('renders given error message', () => {
    render(<ApiErrorMessage title="title" message="message" />);
    expect(screen.getByText('title')).toBeOnTheScreen();
    expect(screen.getByText('message')).toBeOnTheScreen();
  });

  it('calls retry callback when pressing the button', () => {
    const mockRetry = jest.fn();
    render(<ApiErrorMessage onRetry={mockRetry} />);

    fireEvent.press(screen.getByText('Retry'));
    expect(mockRetry).toBeCalled();
  });
});
