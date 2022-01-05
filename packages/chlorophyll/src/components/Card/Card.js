import PropTypes from 'prop-types';
import clsx from 'clsx';

const Card = ({ className, variant, children }) => {
  const cardClasses = clsx([
    variant === 'elevated' && [
      'bg-neutral-surface',
      'text-on-neutral-surface',
      'shadow',
    ],
    variant === 'filled' && ['bg-surface-variant', 'text-on-surface-variant'],
    variant === 'outlined' && [
      'bg-neutral-surface',
      'text-on-neutral-surface',
      'border',
      'border-outline',
    ],
  ]);
  return (
    <div
      className={`${cardClasses} ${className} rounded-xl p-4 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60`}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(['elevated', 'filled', 'outlined']),
};

Card.defaultProps = {
  variant: 'filled',
  children: null,
  className: '',
};

export default Card;
