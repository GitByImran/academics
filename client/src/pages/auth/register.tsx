import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  username: string;
  email: string;
  password: string;
  retypePassword: string;
}

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="w-10/12 mx-auto">
        <div className="w-full md:w-6/12 mx-auto py-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-12 gap-3"
          >
            <div className="col-span-12">
              <label
                htmlFor="username"
                className="block text-lg font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                {...register("username", { required: "Username is required" })}
                className={`text-xl text-gray-700 mt-3 p-3 w-full border-2 border-gray-400 rounded-md outline-emerald-500 ${
                  errors.username ? "border-red-500" : ""
                }`}
                placeholder="Enter your username"
              />
              {errors.username && (
                <p className="text-red-500 mt-2">{errors.username.message}</p>
              )}
            </div>
            <div className="col-span-12">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: "Email is required" })}
                className={`text-xl text-gray-700 mt-3 p-3 w-full border-2 border-gray-400 rounded-md outline-emerald-500 ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 mt-2">{errors.email.message}</p>
              )}
            </div>
            <div className="col-span-12">
              <label
                htmlFor="password"
                className="block text-lg font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", { required: "Password is required" })}
                className={`text-xl text-gray-700 mt-3 p-3 w-full border-2 border-gray-400 rounded-md outline-emerald-500 ${
                  errors.password ? "border-red-500" : ""
                }`}
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-red-500 mt-2">{errors.password.message}</p>
              )}
            </div>
            <div className="col-span-12">
              <label
                htmlFor="retypePassword"
                className="block text-lg font-medium text-gray-700"
              >
                Retype Password
              </label>
              <input
                type="password"
                id="retypePassword"
                {...register("retypePassword", {
                  validate: (value) =>
                    value === getValues("password") || "Passwords do not match",
                })}
                className={`text-xl text-gray-700 mt-3 p-3 w-full border-2 border-gray-400 rounded-md outline-emerald-500 ${
                  errors.retypePassword ? "border-red-500" : ""
                }`}
                placeholder="Retype your password"
              />
              {errors.retypePassword && (
                <p className="text-red-500 mt-2">
                  {errors.retypePassword.message}
                </p>
              )}
            </div>
            <div className="col-span-12">
              <button
                type="submit"
                className="px-10 py-3 my-2 text-white text-xl rounded-md bg-emerald-500"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
