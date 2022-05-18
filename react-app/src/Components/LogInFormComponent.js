import { useForm } from 'react-hook-form';

function LogInFormComponent(submitHandler) {
  const { register, handleSubmit, reset } = useForm();
  
  return (
    <form onSubmit={handleSubmit((data) => { submitHandler.handleSubmit(data); reset(); })}>
      <input  type="text" placeholder="Email" {...register("email", {required: true, maxLength: 100})}/>
      <input  type="text" placeholder="Password" {...register("password", {required: true, maxLength: 100})}/>
      <input type="submit" />
    </form>
  );
}

export default LogInFormComponent;


// const { register, handleSubmit, formState: { errors } } = useForm();
// const onSubmit = data => console.log(data);
// console.log(errors);

// return (
//   <form onSubmit={handleSubmit(onSubmit)}>