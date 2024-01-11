export default jest.fn(() => ({
  getToken: jest.fn(() => Promise.resolve('myMockToken')),
  requestPermission: jest.fn(() => Promise.resolve(1)),
  setBackgroundMessageHandler: jest.fn(),
  onMessage: jest.fn(),
  onNotificationOpenedApp: jest.fn(),
  getInitialNotification: jest.fn(),
  registerDeviceForRemoteMessages: jest.fn(),
}));
