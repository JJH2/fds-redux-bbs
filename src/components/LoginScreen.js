import React, { Component } from 'react';
import { Header, Grid, Button, Segment, Icon, Divider } from 'semantic-ui-react';
import styled from 'styled-components';


const FullHeightGrid = styled(Grid)`
  height: 100vh;
`;

export default class LoginScreen extends Component {
  static defaultProp = {
    onGoogleLogin: () => {},
  }
  render() {
    return (
      <FullHeightGrid centered verticalAlign="middle">
        <Grid.Column style={{ width: '280px' }} textAlign="center">
          <Segment style={{ paddingTop: '2em' }} stacked padded="very">
            <Divider horizontal inverted>
              <Header size="huge">로그인</Header>
            </Divider>
            <Button color="google plus" fluid onClick={this.props.onGoogleLogin}>
              <Icon name="google plus" /> Google Plus
            </Button>
            <Button style={{ marginTop: '10px' }} color="twitter" fluid>
              <Icon name="twitter" /> Twitter
            </Button>
          </Segment>
        </Grid.Column>
      </FullHeightGrid>
    );
  }
}
