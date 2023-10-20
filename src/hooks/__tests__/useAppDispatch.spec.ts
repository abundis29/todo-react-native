import { useAppDispatch } from '../useAppDispatch';
import { useDispatch } from 'react-redux';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('useAppDispatch', () => {
  it('should call useDispatch', () => {
    useAppDispatch();
    expect(useDispatch).toHaveBeenCalled();
  });
});
