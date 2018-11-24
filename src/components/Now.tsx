import React, { Fragment } from 'react'
import { Flex, Box } from 'reflexbox'
import { H2, Text, H3, Tooltip, Classes } from '@blueprintjs/core'

import './Now.css'

export default () => (
  <div className="now">
    <Box pb={2}>
      <H3>3/10</H3>
      <Text tagName="small" className="bp3-text-muted">Overall rating</Text>
    </Box>

    <Flex pb={2} align='flex-end' wrap className="now-snapshot">
      <Box w={1/2} pb={1}>
        <H2>Stormy <br /> 4-6ft</H2>
        <Text tagName="span">
          Well overhead <br />
          1.5 m @ 12.4s <Tooltip className={Classes.TOOLTIP_INDICATOR} content={"228°"}>SW</Tooltip> <br />
        </Text>
        <Text tagName="small" className="bp3-text-muted">SWELL</Text>
      </Box>

      <Box w={1/2} pb={1}>
        <H2>Fresh SW</H2>
        <Text tagName="span"><Tooltip className={Classes.TOOLTIP_INDICATOR} content={"30-40kt gusts"}>SW 26kt (onshore)</Tooltip><br /></Text>
        <Text tagName="small" className="bp3-text-muted">WIND</Text>
      </Box>

      <Box w={1/2} pb={1}>
        <H3>1.3m</H3>
        <Text tagName="span">
          Incoming: {" "}
          <strong>High</strong> in {" "}
          <Tooltip className={Classes.TOOLTIP_INDICATOR} content={"10:42am"}>3 hrs</Tooltip>
          <br />
        </Text>

        <Text tagName="small" className="bp3-text-muted">TIDE</Text>
      </Box>

      <Box w={1/2} pb={1}>
        <H3>19&deg;C</H3>
        <Text tagName="span">
          Overcast, becoming fine <br />
        </Text>

        <Text tagName="small" className="bp3-text-muted">WEATHER</Text>
      </Box>
    </Flex>

    <Box pb={2}>
      <H3>Surfcam</H3>
      <Text>Portsea SLSC</Text>

      <img className="now__surfcam" src="/cam.gif" />
    </Box>
  </div>
)