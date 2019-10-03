import React from 'react';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import { Field } from '../FormFields';
import { Preloader } from '../Preloader';
import { StatusMessage } from '../StatusMessage';
import { Button } from '../Button';
import { INVITE_GUEST_FORM_NAME } from './constants';
import { inviteGuestFormFields } from './fields';
import { Form } from './styles';

const InviteGuestFormImpl = ({ handleSubmit, loading, message }) => (
  <Form onSubmit={handleSubmit}>
    <Field {...inviteGuestFormFields.name} />
    <br />
    <Field {...inviteGuestFormFields.isGoing} />
    <br />
    <Field {...inviteGuestFormFields.food} />
    <br />

    <Preloader loading={loading} />
    <StatusMessage message={message} />
    <Button>Invite</Button>
  </Form>
);

const enhance = compose(
  reduxForm({
    form: INVITE_GUEST_FORM_NAME,
  }),
);

export const InviteGuestForm = enhance(InviteGuestFormImpl);
