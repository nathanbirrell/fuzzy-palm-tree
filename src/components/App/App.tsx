import React, { Component } from 'react'
import 'normalize.css/normalize.css'
import '@blueprintjs/core/lib/css/blueprint.css'
// import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import { Flex, Box } from 'reflexbox'

import Header from '../Header'
import Today from '../Today'
import Forecast from '../Forecast'

import './App.css'
import { Tabs, Tab } from '@blueprintjs/core'

class App extends Component {
  render() {
    return (
      <Flex p={2} justify="center">
        <Box className="app">
          <Header />

          <Tabs id="LocationSection" defaultSelectedTabId="now">
            <Tab id="now" title="Now" panel={<Today />} />

            <Tab id="forecast" title="This Week" panel={<Forecast />} />
          </Tabs>
        </Box>
      </Flex>
    )
  }
}

export default App
