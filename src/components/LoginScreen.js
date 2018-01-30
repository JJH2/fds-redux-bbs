import React, { Component } from 'react';
import { Header, Grid, Button, Segment, Icon, Divider } from 'semantic-ui-react'
import styled from 'styled-components';

const FullHeightGrid = styled(Grid)`
  height: 100vh;
`


export default class LoginScreen extends Component {
  render() {
    return (
      <FullHeightGrid centered verticalAlign="middle">
        <Grid.Column style={{ width: '280px' }} textAlign='center'>
          <Segment style={{ paddingTop: '2em' }} stacked padded="very">
            <Divider horizontal inverted><Header size='huge'>로그인</Header></Divider>
            <Button color='google plus' fluid>
              <Icon name='google plus' /> Google Plus
            </Button>
            <Button color='twitter' fluid>
              <Icon name='twitter' /> Twitter
            </Button>
          </Segment>
        </Grid.Column>
      </FullHeightGrid>
    );
  }
}
