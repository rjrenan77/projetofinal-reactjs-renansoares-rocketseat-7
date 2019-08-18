import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';
import { Wrapper } from './styles';

export default function DefaulLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

DefaulLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
