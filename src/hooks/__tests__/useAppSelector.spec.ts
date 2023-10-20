import { useAppSelector } from '../useAppSelector';
import { useSelector } from 'react-redux';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));


describe('useAppSelector', () => {
  it('should call useSelector', () => {
    const mockSelector = state => state.todoReducer;
    useAppSelector(mockSelector);
    expect(useSelector).toHaveBeenCalled();
  });
});
