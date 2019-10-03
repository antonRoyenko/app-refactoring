import { useMemo } from 'react';

export function useAppData() {
  const initialValues = useMemo(
    () => ({
      name: 'Bob',
      food: 'Pizza',
      isGoing: true,
    }),
    [],
  );

  return { initialValues };
}
