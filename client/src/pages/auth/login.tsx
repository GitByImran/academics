import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div>
      <div className="w-10/12 mx-auto">
        <div className="w-full md:w-6/12 mx-auto py-20">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-12 gap-3"
          >
            <div className="col-span-12">
              <label
                htmlFor="email"
                className="block text-lg font-normal text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: "Email is required" })}
                className={`text-lg text-gray-700 mt-3 p-3 w-full border border-gray-400 rounded-md outline-emerald-500 ${
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
                className="block text-lg font-normal text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className={`password-bullet text-lg text-gray-700 mt-3 p-3 w-full border border-gray-400 rounded-md outline-emerald-500 ${
                    errors.password ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your password"
                />
                <div
                  className="absolute top-1/2 bottom-0 right-5 cursor-pointer text-2xl text-gray-700 -mt-1"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <BsEyeSlash /> : <BsEye />}
                </div>
              </div>
              {errors.password && (
                <p className="text-red-500 mt-2">{errors.password.message}</p>
              )}
            </div>
            <div className="col-span-12">
              <button
                type="submit"
                className="px-10 py-3 my-2 text-white text-xl rounded-md bg-emerald-500"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
