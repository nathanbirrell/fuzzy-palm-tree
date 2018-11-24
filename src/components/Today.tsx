import React, { Fragment } from 'react'
import { H3, H6, Text } from '@blueprintjs/core'
import Now from './Now'

interface Props {}

export default (props: Props) => (
  <Fragment>
    <Now />

    <H3>Today&apos;s Outlook</H3>

    <Text tagName="p">Onshore breeze persisting throughout the day, swell easing.</Text>

    <H6>Swell</H6>
    <H6>Wind</H6>
    <H6>Tide</H6>
  </Fragment>
)