import { useForm } from 'react-hook-form';
import { useUpdateUser } from './useUpdateUser';

import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import SpinnerMini from '../../ui/SpinnerMini';
function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;


  const { updateUser, isUpdating } = useUpdateUser()
  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: () => reset() });
  }

  function handleReset() {

    reset();
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label='New Password (min 8 chars)'
        error={errors?.password?.message}
      >
        <Input
          type='password'
          id='password'
          // this makes the form better for password managers
          autoComplete='current-password'
          disabled={isUpdating}
          {...register('password', {
            required: 'This field is required',
            minLength: {
              value: 8,
              message: 'Password needs a minimum of 8 characters',
            },
          })}
        />
      </FormRow>

      <FormRow
        label='Confirm New password'
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type='password'
          autoComplete='new-password'
          id='passwordConfirm'
          disabled={isUpdating}
          {...register('passwordConfirm', {
            required: 'This field is required',
            validate: (value) =>
              getValues().password === value || 'Passwords need to match',
          })}
        />
      </FormRow>
      <FormRow>
        <Button onClick={handleReset} type='reset' variation='secondary'>
          Cancel
        </Button>
        <Button disabled={isUpdating}>
          {isUpdating ? <SpinnerMini /> : 'Update password'}
        </Button>
      </FormRow>
    </Form>
  );
}

export default UpdatePasswordForm;
