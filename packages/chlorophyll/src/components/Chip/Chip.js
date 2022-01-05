import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Check, ChevronDown, X } from 'react-feather';

const ICON_SIZE = 18;

const Chip = ({
  label,
  leftIcon,
  rightIcon,
  variant,
  disabled,
  isElevated,
  onMenuClick,
  onUnselectClick,
}) => {
  const filterActiveVariant = variant === 'filter-active';
  const defaultVariant = [
    'assist',
    'filter',
    'filter-menu',
    'filter-unselectable',
  ].includes(variant);
  const chipClasses = clsx([
    disabled && ['opacity-40', 'cursor-default'],
    !disabled && [
      'cursor-pointer',
      'hover:bg-neutral-50',
      'hover:text-on-neutral-surface',
      'active:bg-neutral-100',
    ],
    filterActiveVariant && [
      'bg-secondary-container',
      'text-on-secondary-container',
    ],
    defaultVariant && [
      'border',
      'border-solid',
      'border-outline',
      'bg-neutral-surface',
      'text-on-neutral-surface',
    ],
    isElevated && ['shadow-md'],
  ]);

  const showingRightIcon =
    ['filter-menu', 'filter-unselectable', 'filter-menu'].includes(variant) ||
    rightIcon;
  const showingLeftIcon = variant === 'filter-active' || leftIcon;
  const labelClasses = clsx([
    showingLeftIcon && ['pr-4'],
    showingRightIcon && ['pl-4'],
    !showingRightIcon && !showingLeftIcon && ['px-4'],
  ]);

  return (
    <div
      className={`${chipClasses} w-[fit-content] label-lg rounded-lg flex items-center `}
    >
      {leftIcon && <div className="px-2 text-primary">{leftIcon}</div>}
      {variant === 'filter-active' && (
        <div className="px-2 text-primary">
          <Check size={ICON_SIZE} />
        </div>
      )}
      <div className={`${labelClasses} h-8 flex items-center`}>{label}</div>
      {rightIcon && <div className="px-2 text-primary">{rightIcon}</div>}
      {variant === 'filter-unselectable' && (
        <div className="px-2 text-primary" onClick={onUnselectClick}>
          <X size={ICON_SIZE} />
        </div>
      )}
      {variant === 'filter-menu' && (
        <div className="px-2 text-primary" onClick={onMenuClick}>
          <ChevronDown size={ICON_SIZE} />
        </div>
      )}
    </div>
  );
};

Chip.propTypes = {
  disabled: PropTypes.bool,
  isElevated: PropTypes.bool,
  label: PropTypes.string,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  onUnselectClick: PropTypes.func,
  onMenuClick: PropTypes.func,
  variant: PropTypes.oneOf([
    'assist',
    'filter',
    'filter-active',
    'filter-unselectable',
    'filter-menu',
    'input',
    'suggestion',
  ]),
};
Chip.defaultProps = {
  onUnselectClick: null,
  onMenuClick: null,
  disabled: false,
  isElevated: false,
  label: '',
  leftIcon: null,
  rightIcon: null,
  variant: 'assist',
};

Chip.ICON_SIZE = ICON_SIZE;

export default Chip;
