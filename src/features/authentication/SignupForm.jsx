import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "./useSignUp";
import SpinnerMini from '../../ui/SpinnerMini'
// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { signup, isLoading } = useSignup()
  const { register, formState, getValues, handleSubmit, reset } = useForm()
  const { errors } = formState
  function onSubmit({ fullName, email, password }) {
    signup({ fullName, email, password }, { onSettled: () => reset() })
  }
  function formErrors(err) {
    console.log(err)
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit, formErrors)} >
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input type="text" id="fullName" disabled={isLoading}  {...register("fullName", { required: 'This Filed is Required' })} />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input type="email" id="email" disabled={isLoading} {...register("email", {
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "place Provide a vaild email address"
          }
        })} />
      </FormRow>

      <FormRow label="Password (min 8 characters)" error={errors?.password?.message}>
        <Input type="password" id="password" disabled={isLoading}  {...register("password", {
          required: 'This Filed is Required', minLength: {
            value: 8,
            message: 'Password must be at least 8 characters'
          }
        })} />
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input type="password" id="passwordConfirm" disabled={isLoading}  {...register("passwordConfirm", {
          required: 'This Filed is Required', validate: (value) => value === getValues().password || "Password need to be matched"
        })} />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" onClick={reset} type="reset">
          Cancel
        </Button>
        <Button disabled={isLoading} >
          {isLoading ? <SpinnerMini /> : 'Create new user'}

        </Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
