import {fireEvent, render, screen} from '@testing-library/react-native';
import CreatePostScreen from '../../src/screens/CreatePostScreen/CreatePostScreen';
import {MockedProvider} from '@apollo/client/testing';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';
import {Storage} from 'aws-amplify';
import {createPost} from '../../src/screens/CreatePostScreen/queries';

jest.spyOn(Alert, 'alert');
jest
  .spyOn(Storage, 'put')
  .mockImplementation((key, object, config) => Promise.resolve({key}));
jest.mock('uuid', () => ({
  v4: () => '123',
}));

const mockNavigation = jest.fn();
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useRoute: () => ({
      params: {
        image: '/image_uri.png',
      },
    }),
    useNavigation: () => ({
      popToTop: jest.fn(),
      navigate: mockNavigation,
    }),
  };
});

jest.mock('react-native-keyboard-aware-scroll-view', () => {
  const KeyboardAwareScrollView = require('react-native').ScrollView;
  return {KeyboardAwareScrollView};
});

const input = {
  image: '123.png',
  images: undefined,
  video: undefined,
  description: 'description',
  location: 'location',
  nofComments: 0,
  nofLikes: 0,
  userID: '',
  type: 'POST',
};

const mocks = [
  {
    request: {
      query: createPost,
      variables: {
        input,
      },
    },
    result: {
      data: {
        createPost: {
          id: '1',
          ...input,
          video: '',
          images: [],
          User: {
            id: '1',
            nofPosts: 1,
          },
          createdAt: '1',
          updatedAt: '1',
          _version: 1,
          _deleted: false,
          _lastChangedAt: 1,
        },
      },
    },
  },
];

const errorMocks = [
  {
    request: {
      query: createPost,
      variables: {
        input,
      },
    },
    error: new Error('Error uploading the post'),
  },
];

describe('Create Post Screen', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the CreatePostScreen', () => {
    render(
      <MockedProvider mocks={mocks}>
        <NavigationContainer>
          <CreatePostScreen />
        </NavigationContainer>
      </MockedProvider>,
    );
  });

  it('should submit the form', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <NavigationContainer>
          <CreatePostScreen />
        </NavigationContainer>
      </MockedProvider>,
    );

    fireEvent.changeText(
      screen.getByPlaceholderText('Write a caption...'),
      'description',
    );
    fireEvent.changeText(screen.getByPlaceholderText('Location'), 'location');

    fireEvent.press(screen.getByText('Submit'));

    await screen.findByText('Submit');

    expect(Alert.alert).not.toBeCalled();
    expect(mockNavigation).toBeCalledWith('HomeStack');
  });

  it('should alert an error if it fails to upload the post', async () => {
    render(
      <MockedProvider mocks={errorMocks}>
        <NavigationContainer>
          <CreatePostScreen />
        </NavigationContainer>
      </MockedProvider>,
    );

    fireEvent.changeText(
      screen.getByPlaceholderText('Write a caption...'),
      'description',
    );
    fireEvent.changeText(screen.getByPlaceholderText('Location'), 'location');

    fireEvent.press(screen.getByText('Submit'));

    await screen.findByText('Submit');

    expect(Alert.alert.mock.calls[0][0]).toBe('Error uploading the post');
    expect(mockNavigation).not.toBeCalledWith('HomeStack');
  });
});
