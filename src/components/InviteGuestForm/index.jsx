import React from 'react';
import { Input } from '../Input';
import { Checkbox } from '../Checkbox';
import { DropDown } from '../Select';
import { Preloader } from '../Preloader';
import { StatusMessage } from '../StatusMessage';
import { Button } from '../Button';
import { inviteGuestFormFields } from './fields';

export const InviteGuestForm = ({
  handleSubmit,
  nameValue,
  handleInputChange,
  isGoing,
  loading,
  message,
  foodValue,
}) => (
  <form onSubmit={handleSubmit} className="guest-invite">
    <Input
      {...inviteGuestFormFields.name}
      value={nameValue}
      onChange={handleInputChange}
    />
    <br />
    <Checkbox
      {...inviteGuestFormFields.isGoing}
      checked={isGoing}
      onChange={handleInputChange}
    />
    <br />
    <DropDown
      {...inviteGuestFormFields.food}
      value={foodValue}
      onChange={handleInputChange}
    />
    <br />

    <Preloader loading={loading} />
    <StatusMessage message={message} />
    <Button>Invite</Button>
  </form>
);

InviteGuestForm.propTypes = {};
