import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { withStyles, createStyles } from '@mui/material';

const DotIndicator = withStyles(createStyles, { name: 'DotIndicator' })(
    ({ active, className, classes, ...props }) => (
        <button 
          type={'button'}
          tabIndex={0}
          className={cx(
            'DotIndicator-root',
            className,
            classes.root,
            active && `-active ${classes.active}`
          )}
          {...props}
          />
    )
);

DotIndicator.propTypes = {
    className: PropTypes.string,
    active: PropTypes.bool,
};

DotIndicator.defaultProps = {
    className: '',
    active: false,
};

DotIndicator.displayName = 'DotIndicator';

export default DotIndicator;
