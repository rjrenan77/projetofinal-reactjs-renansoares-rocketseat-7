import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function DefaulLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

DefaulLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
