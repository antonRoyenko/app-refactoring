import { useSelector } from 'react-redux';
import {
  makeSelectGuests,
  makeSelectLoading,
  makeSelectMessage,
} from './selectors';

export function useAppData() {
  const loading = useSelector(makeSelectLoading);
  const guests = useSelector(makeSelectGuests);
  const message = useSelector(makeSelectMessage);

  return { loading, guests, message };
}
