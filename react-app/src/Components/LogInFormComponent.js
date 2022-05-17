import { useForm } from 'react-hook-form';

function LogInFormComponent(submitHandler) {
  const { register, handleSubmit, reset } = useForm();
  
  return (
    <form onSubmit={handleSubmit((data) => { submitHandler(data); reset(); })}>
      <input {...register("email", {required: true, maxLength: 100})} type="text" placeholder="Email" />
      <input {...register("password", {required: true, maxLength: 100})} type="text" placeholder="Password" />
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