import React from 'react'
import { object } from 'prop-types'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

import logo from '../assets/logo@128.png'
import AuthContext from '../context/auth'
import { Paragraph, Button, Box } from '../components'

export default class LoginPage extends React.PureComponent {
  static propTypes = {
    location: object.isRequired,
  }

  render () {
    const {
      location: { state },
    } = this.props

    const { from } = state || { from: { pathname: '/' } }

    return (
      <React.Fragment>
        <AuthContext.Authorized>
          <Redirect to={from} />
        </AuthContext.Authorized>
        <AuthContext.Unauthorized>
          {({ signIn, retriving }) => (
            <Container>
              <Card>
                <Logo />
                <Description>
                  Get in Guys
                </Description>
                <Button disabled={retriving} variant='DarkGrey' onClick={signIn} size='Small'>
                  {retriving ? 'Signing in...' : 'Sign in as root'}
                </Button>
              </Card>
            </Container>
          )}
        </AuthContext.Unauthorized>
      </React.Fragment>
    )
  }
}

const Container = Box.extend`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Card = Box.extend`
  max-width: 576px;
  width: 100%;
  overflow: hidden;
  border-radius: 2px;
  padding: 16px;
  text-align: center;
`

const Logo = styled.img.attrs({
  src: logo,
})`
  width: 120px;
  height: 120px;
`

const Description = Paragraph.extend`
  max-width: 50ch;
  margin-left: auto;
  margin-right: auto;
`
