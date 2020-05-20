import React from 'react';
import PropTypes from 'prop-types';
import './circular-pb.css';

const CircularProgressBar = ({
  goal,
  balance,
  color
}) => {
  const classNames = (...args) => {
    return args.map(item => {
      if (typeof item !== 'object') return item;
      return item && Object.entries(item).filter(([, value]) => value).map(([key]) => key).join(' ');
    }).join(' ');
  };

  const percentageBar = () => {
    return balance / goal * 360;
  };

  return /*#__PURE__*/React.createElement("div", {
    className: classNames('container', {
      'half': percentageBar() > 179
    }),
    style: {
      backgroundColor: color
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "inner",
    style: {
      transform: `rotate(${percentageBar()}deg) translate(-50%, 0px)`,
      backgroundColor: color
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "outer"
  }));
};

CircularProgressBar.propTypes = {
  goal: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
  color: PropTypes.string
};
CircularProgressBar.defaultProps = {
  color: '#000'
};
export default CircularProgressBar;