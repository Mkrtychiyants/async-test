import GameSavingLoader from '../GameSavingLoader';
import json from '../parser';
import read from '../reader';

jest.mock('../parser.js');
jest.mock('../reader.js');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call loadUser once', async (done) => {
  read.mockRejectedValue(new Error('Async error message'));
  json.mockRejectedValue(new Error('Async error message'));
  const dd = await GameSavingLoader.load();
  await expect(dd).rejects.toThrow();
  done();
});
