import React from 'react';
import { useForm } from 'react-hook-form';

function RegisterFormComponent() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" {...register("name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Description" {...register("description", {required: true, maxLength: 500})} />
      <input type="text" placeholder="Age Group" {...register("ageGroup", {required: true, maxLength: 100})} />
      <input type="text" placeholder="Quantity" {...register("quantity", {required: true, maxLength: 100})} />
      <input type="text" placeholder="Price" {...register("price", {required: true, maxLength: 100})} />
      <input type="text" placeholder="Image" {...register("image", {required: true, maxLength: 100})} />
      <input type="submit" />
    </form>
  );
}
export default RegisterFormComponent;