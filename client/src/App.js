import React from 'react'
import { QueryRenderer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

import environment from './Environment'

import logo from './logo.svg'
import './App.css'
import Supervillain from './Supervillain'

const AppAllSupervillainsQuery = graphql`
  query AppAllPostQuery {
    allSupervillains {
      ...Supervillain_supervillain
    }
  }
`

function App() {
  return (
    <div className="App">
      <QueryRenderer
        environment={environment}
        query={AppAllSupervillainsQuery}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return (
              <ul>
                {props.allSupervillains.map(villain => (
                  <Supervillain key={villain.id} supervillain={villain} />
                ))}
              </ul>
            )
          }
          return <div>Loading</div>
        }}
      />
    </div>
  )
}

export default App
