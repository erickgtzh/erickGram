import Button from '../../src/components/Button/Button';
import {render} from '@testing-library/react-native';

it('should render the Button', () => {
  const {toJSON} = render(<Button />);
  expect(toJSON()).toMatchSnapshot();
});
