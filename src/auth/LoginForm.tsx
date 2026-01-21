import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LoginContext } from "../context/LoginContext";

const getPasswordBorderClass = (status: any) => {
  if (status === "error") return "border-red-500";
  if (status === "weak") return "border-amber-700";
  if (status === "medium") return "border-orange-500";
  return "border-[#C7CCD0]";
};

const getPasswordTextColorClass = (status: any) => {
  if (status === "error") return "text-red-500";
  if (status === "weak") return "text-amber-700";
  if (status === "medium") return "text-orange-500";
  return "text-black";
};

const PasswordVisibilityToggle = ({ isVisible, onToggle, hasValue }: any) => {
  if (!hasValue) return null;
  return (
    <div className="absolute top-2 right-2 lg:top-[50%] lg:right-3">
      {isVisible ? (
        <FaEye
          color="#7B809A"
          className="cursor-pointer"
          size={20}
          onClick={onToggle}
        />
      ) : (
        <FaEyeSlash
          color="#7B809A"
          className="cursor-pointer"
          size={20}
          onClick={onToggle}
        />
      )}
    </div>
  );
};

const StatusMessage = ({ status, message }: any) => {
  if (status === "idle") return null;
  const isError = status === "error";
  const colorClass = isError ? "text-red-500" : "text-green-600";
  return <p className={`text-xs lg:text-sm ${colorClass}`}>{message}</p>;
};

const ConfirmPasswordStatusMessage = ({ status, message }: any) => {
  if (status === "idle") return null;
  const colorClass = status === "error" ? "text-red-500" : "text-black";
  return <p className={`text-xs lg:text-sm ${colorClass}`}>{message}</p>;
};

const LoginForm = () => {
  const {
    showHidePassword,
    setShowHidePassword,
    email,
    emailStatus,
    password,
    passwordStatus,
    handlePasswordChange,
    handleEmailChange,
    handleSubmit,
    handleNameChange,
    name,
    nameStatus,
    confirmPassword,
    confirmPasswordStatus,
    handleConfirmPasswordChange,
    isLogin,
    setIsLogin,
  }: any = useContext(LoginContext);

  const [toggleSwitch, setToggleSwitch] = useState(false);

  const passwordBorderClass = getPasswordBorderClass(passwordStatus.status);
  const passwordTextColorClass = getPasswordTextColorClass(
    passwordStatus.status,
  );

  return (
    <section className="flex w-full ml-10 flex-col gap-2 rounded-xl  p-4 xl:w-fit">
      {/* heading */}
      <div className="flex flex-col items-start gap-3">
        <h1 className="text-lg font-semibold lg:text-4xl">
          {isLogin ? <>Welcome<br/>back!</> : "Sign Up"}
        </h1>
      </div>

      {/* name input */}
      {!isLogin && (
        <div className="mx-auto h-12 w-full sm:mt-4 sm:w-80 lg:mt-10 lg:h-15 lg:w-fit xl:mt-14.5">
          <label htmlFor="name">
            <p className="form-label">Name</p>
            <input
              value={name}
              onChange={handleNameChange}
              name="name"
              id="name"
              type="text"
              autoComplete="on"
              placeholder="Name"
              className={`form-input ${
                nameStatus.status === "error"
                  ? "border-red-500"
                  : "border-[#C7CCD0]"
              }`}
            />
          </label>

          <StatusMessage
            status={nameStatus.status}
            message={nameStatus.message}
          />
        </div>
      )}

      {/* email input */}
      <div
        className={`${isLogin ? "mt-5 lg:mt-10 xl:mt-14.5" : "mt-0"} mx-auto h-12 w-full sm:w-80 lg:h-20 lg:w-fit`}
      >
        <label htmlFor="email">
          <p className="form-label">Email</p>
          <input
            value={email}
            onChange={handleEmailChange}
            name="email"
            id="email"
            type="email"
            autoComplete="on"
            placeholder="Enter your email address"
            className={`form-input ${
              emailStatus.status === "error"
                ? "border-red-500"
                : "border-[#C7CCD0]"
            }`}
          />
        </label>

        <StatusMessage
          status={emailStatus.status}
          message={emailStatus.message}
        />
      </div>

      {/* password input */}
      <div className="relative mx-auto h-14 w-full sm:h-12 sm:w-80 lg:h-20 lg:w-fit">
        <div>
          <label htmlFor="password">
            <p className="form-label">Password</p>
            <input
              value={password}
              onChange={handlePasswordChange}
              placeholder={isLogin ? "Enter your password" : "Enter password"}
              className={`${passwordBorderClass} pr-10 pl-4 form-input`}
              type={showHidePassword ? "text" : "password"}
              name="password"
              id="password"
              autoComplete="on"
            />
          </label>

          <PasswordVisibilityToggle
            isVisible={showHidePassword}
            onToggle={() => setShowHidePassword(!showHidePassword)}
            hasValue={password?.trim().length > 0}
          />
        </div>

        {passwordStatus.status !== "idle" && (
          <p className={`text-xs lg:text-sm ${passwordTextColorClass}`}>
            {passwordStatus.message}
          </p>
        )}
      </div>

      {/* confirm password input */}
      {!isLogin && (
        <div className="relative mx-auto h-12 w-full sm:w-80 lg:h-15 lg:w-fit">
          <div>
            <label htmlFor="confirmPassword">
              <p className="form-label">Confirm Password</p>
              <input
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="Confirm password"
                className={`${confirmPasswordStatus.status === "error" ? "border-red-500" : "border-[#C7CCD0]"} pr-10 pl-4 form-input`}
                type={showHidePassword ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                autoComplete="on"
              />
            </label>

            <PasswordVisibilityToggle
              isVisible={showHidePassword}
              onToggle={() => setShowHidePassword(!showHidePassword)}
              hasValue={confirmPassword?.trim().length > 0}
            />
          </div>

          <ConfirmPasswordStatusMessage
            status={confirmPasswordStatus.status}
            message={confirmPasswordStatus.message}
          />
        </div>
      )}

      {/* remember me button */}

      <div className="mt-2 flex items-center gap-2 sm:ml-5 lg:ml-0">
        <button
          onClick={() => setToggleSwitch(!toggleSwitch)}
          className={`relative inline-flex h-3 w-8 cursor-pointer items-center rounded-full transition-colors duration-300 lg:h-4 lg:w-9 ${toggleSwitch ? "bg-[#DA1F63]" : "bg-gray-300"}`}
        >
          <span
            className={`absolute h-4 w-4 rounded-full border border-gray-400 bg-white shadow-xl/70 shadow-black transition-all duration-300 lg:h-5 lg:w-5 ${toggleSwitch ? "translate-x-5" : "translate-x-0"} -top-0.5`}
          />
        </button>
        <p className="text-grey text-xs lg:text-sm">Remember me</p>
      </div>

      {/* sign in button */}

      <button
        onClick={handleSubmit}
        className="mt-4 h-10 w-full cursor-pointer rounded-lg bg-linear-to-b from-[#E93B77] to-[#DA1F63] p-2 text-xs font-bold text-white lg:mt-11"
      >
        {isLogin ? "SIGN IN" : "SIGN UP"}
      </button>

      {/* sign up button */}

      <div className="text-grey mx-auto mt-2 flex items-center gap-2 text-xs lg:mt-8 lg:text-sm">
        <p>
          {isLogin ? "Don't" : "Already"} have an account?{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="cursor-pointer font-bold text-[#DA1F63]"
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default LoginForm;
