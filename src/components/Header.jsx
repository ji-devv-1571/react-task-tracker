import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button.jsx';
const Header = ({ title, onAdd, showAddBtn }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
        color={showAddBtn ? 'red' : 'green'}
        text={showAddBtn ? 'Close' : 'Add'}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  // without required title: PropTypes.string,
  title: PropTypes.string.isRequired, // with Required
};

export default Header;
