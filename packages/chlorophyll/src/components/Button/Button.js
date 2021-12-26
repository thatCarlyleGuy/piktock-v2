/* eslint-disable react/prop-types */

const Button = ({ className, text }) => (
  <button
    type="button"
    className={`${className} bg-white text-gray-medium font-medium px-[22.5px] border-0`}
  >
    {text} yup
  </button>
);

export default Button;
