// import { useForm } from 'react-hook-form';

// function RegisterFormComponent({submitHandler}) {
//   const { register, handleSubmit, reset } = useForm();
  
//   return (
//     <form onSubmit={handleSubmit((data) => { submitHandler(data); reset(); })}>
//       <input type="text" placeholder="Name" {...register("name", {required: true, maxLength: 80})} />
//       <input type="text" placeholder="Description" {...register("description", {required: true, maxLength: 500})} />
//       <input type="text" placeholder="Age Group" {...register("ageGroup", {required: true, maxLength: 100})} />
//       <input type="text" placeholder="Quantity" {...register("quantity", {required: true, maxLength: 100})} />
//       <input type="text" placeholder="Price" {...register("price", {required: true, maxLength: 100})} />
//       <input type="text" placeholder="Image" {...register("image", {required: true,})} />
//       <input type="submit" />
//     </form>
//   );
// }
// export default RegisterFormComponent;