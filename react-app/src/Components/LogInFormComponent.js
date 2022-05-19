import { useForm } from 'react-hook-form';

function LogInFormComponent({submitHandler}) {
  const { register, handleSubmit, reset } = useForm();
  
  return (
    <form onSubmit={handleSubmit((data) => { submitHandler(data); reset(); })}>
      <input  type="text" placeholder="Email" {...register("email", {required: true, maxLength: 100})}/>
      <input  type="text" placeholder="Password" {...register("password", {required: true, maxLength: 100})}/>
      <input type="submit" />
    </form>
  );
}

export default LogInFormComponent;





// import { useForm } from "react-hook-form";

// function StudentForm({ submitHandler }) {
//     const { register, handleSubmit, reset } = useForm();

//     return (
//         <form onSubmit={handleSubmit((data) => { submitHandler(data); reset(); })}>
//             <input {...register("firstName")} placeholder="First name" />
//             {/* <input {...register("lastName")} placeholder="Last name" />
//             <input {...register("email")} placeholder="Email" />
//             <input {...register("password")} placeholder="Password" /> */}
//             <input type="submit" />
//         </form>
//     )
// }

// export default StudentForm;