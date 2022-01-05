import PropTypes from 'prop-types';
import clsx from 'clsx';

export const ICON_SIZE = 16;
export const LARGE_ICON_SIZE = 24;

const Button = ({
  className,
  variant,
  leftIcon,
  rightIcon,
  size,
  label,
  fillContainer,
  disabled,
}) => {
  const buttonClasses = clsx([
    variant === 'elevated' && [
      'shadow',
      'bg-primary-container',
      'text-on-primary-container',
      'active:bg-primary',
      'active:text-on-primary',
    ],
    variant === 'filled' && [
      'bg-primary',
      'text-on-primary',
      'active:bg-primary-container',
      'active:text-on-primary-container',
    ],
    variant === 'filled-tonal' && [
      'bg-secondary-container',
      'text-on-secondary-container',
      'active:bg-secondary',
      'active:text-on-secondary',
    ],
    variant === 'outlined' && [
      'bg-transparent',
      'text-on-neutral-surface',
      'border',
      'border-solid',
      'border-outline',
      'active:bg-primary-container',
      'active:text-on-primary-container',
      'active:border-opacity-0',
    ],
    variant === 'text' && [
      'bg-transparent',
      'text-primary',
      'active:bg-primary-container',
      'active:text-on-primary-container',
    ],

    size === 'small' && ['label-sm', 'px-4', 'py-3'],
    size === 'medium' && ['label-md', 'px-6', 'py-3'],
    size === 'large' && ['label-lg', 'px-8', 'py-3'],

    fillContainer && ['w-full'],
    disabled ? ['opacity-50', 'pointer-events-none'] : ['cursor-pointer'],
  ]);

  return (
    <button
      className={`${buttonClasses} ${className} rounded-full outline-none focus:outline-none ease-linear transition-all duration-150`}
      type="button"
      disabled={!!disabled}
    >
      <div className="flex items-center justify-center gap-2.5">
        {leftIcon}
        {label}
        {rightIcon}
      </div>
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  fillContainer: PropTypes.bool,
  disabled: PropTypes.bool,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf([
    'elevated',
    'filled',
    'filled-tonal',
    'outlined',
    'text',
    'fab',
  ]),
};

Button.defaultProps = {
  label: '',
  disabled: false,
  fillContainer: false,
  leftIcon: null,
  rightIcon: null,
  size: 'medium',
  variant: 'filled',
};

Button.ICON_SIZE = ICON_SIZE;
Button.LARGE_ICON_SIZE = LARGE_ICON_SIZE;

export default Button;
