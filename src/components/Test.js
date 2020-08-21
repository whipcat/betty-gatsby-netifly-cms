import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledHeader = styled.h2`
  color: red;
  font-weight: bold;
  font-size: 32px;
`

const StyledParagraph = styled.p`
  color: blue;
  font-size: 12px;
`

const Test = ({name, age}) => {
  return <>
    <StyledHeader>{name}</StyledHeader>
    <StyledParagraph>{age}</StyledParagraph>
  </>
}

Test.defaultProps = {
  name: "Bassie",
  age: 47
}

Test.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
}

export default Test
