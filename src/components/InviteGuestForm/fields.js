import { Checkbox } from '../Checkbox';
import { InputField } from '../InputField';
import { DropDown } from '../Select';
import { options } from './constants';

export const inviteGuestFormFields = {
  name: {
    name: 'name',
    label: 'Name',
    Component: InputField,
  },
  isGoing: {
    name: 'isGoing',
    label: 'isGoing',
    type: 'checkbox',
    Component: Checkbox,
  },
  food: {
    name: 'food',
    label: 'Pick your favorite food:',
    options,
    Component: DropDown,
  },
};
