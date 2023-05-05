import React from "react";

const InputField = React.forwardRef((props, ref) => {
  const { label, id, type, placeholder, name, state, ...rest } = props;
  return (
    <div className="mb-3">
      <label
        htmlhtmlFor={id}
        className={`text-sm font-bold  text-navy-700 dark:text-white`}
      >
        {label}
      </label>
      <input
        ref={ref}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={`mt-2 h-12 w-full rounded-sm border bg-white/0 p-3 text-sm outline-none ${
          state === "error"
            ? "border-red-500  dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
            : state === "success"
            ? "border-green-500   dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
            : "border-gray-200 dark:!border-white/10 dark:text-white"
        }`}
        {...rest}
      />
    </div>
  );
});

export default InputField;
