import React from 'react'
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const Supervillain = ({ supervillain }) => {
  return <li>{supervillain.name}</li>
}

export default createFragmentContainer(
  Supervillain,
  graphql`
    fragment Supervillain_supervillain on Supervillain {
      id
      name
    }
  `,
)
