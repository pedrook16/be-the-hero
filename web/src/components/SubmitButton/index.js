import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Button({ children, type }) {
  return <Container type={type}>{children}</Container>;
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
