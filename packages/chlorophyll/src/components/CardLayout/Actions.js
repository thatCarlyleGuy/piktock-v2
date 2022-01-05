import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Actions = ({ placement, children }) => {
  const actionsClasses = clsx([
    placement === 'left' && ['justify-start'],
    placement === 'right' && ['justify-end'],
    placement === 'spaced' && ['justify-between'],
  ]);

  return (
    <div className={`${actionsClasses} flex mt-6 space-x-2 items-center`}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          className: `${child.props.className} space-x-2`,
        })
      )}
    </div>
  );
};

Actions.propTypes = {
  children: PropTypes.node,
  placement: PropTypes.oneOf(['left', 'right', 'spaced']),
};
Actions.defaultProps = {
  placement: 'right',
  children: null,
};

export default Actions;
