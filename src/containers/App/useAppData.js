import { useMemo } from 'react';
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

  const initialValues = useMemo(
    () => ({
      name: 'Bob',
      food: 'Pizza',
      isGoing: true,
    }),
    [],
  );

  return { loading, guests, message, initialValues };
}
