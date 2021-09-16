import React from 'react';

const Button = React.forwardRef(
  (
    {
      children,

      variant = 'contained',
      color = 'primary',
      textColor = 'white',
      size = 'lg',
      ...props
    },
    ref,
  ) => {
    const buttonSize = {
      sm: 'text-md xl:text-lg px-2 py-1 font-semibold rounded-md xl:rounded-lg',
      lg: 'text-lg xl:text-2xl px-3 py-1 rounded-lg',
    }[size];

    const buttonVariant = {
      contained: `bg-${color}-500 border-${color}-700`,
      outlined: `bg-transparent border-${color}-700`,
    }[variant];

    return (
      <>
        <button
          ref={ref}
          className={`border ${buttonSize} ${buttonVariant} text-${textColor}`}
          {...props}
        >
          {children}
        </button>
      </>
    );
  },
);

export default Button;
