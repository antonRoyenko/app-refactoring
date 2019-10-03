import { options } from './constants';

export const inviteGuestFormFields = {
  name: {
    name: 'name',
    label: 'Name',
  },
  isGoing: {
    name: 'isGoing',
    label: 'isGoing',
    type: 'checkbox',
  },
  food: {
    name: 'food',
    label: 'Pick your favorite food:',
    options,
  },
};
