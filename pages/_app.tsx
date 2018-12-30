import React from 'react';
import NextApp, { Container } from 'next/app';
import { MuiThemeProvider, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import getPageContext from '../src/getPageContext';
import { SheetsRegistry, GenerateClassName } from 'jss';
import { StylesCreator } from '@material-ui/core/styles/withStyles';
import { StyleSheet } from 'jss';

type PageContext = {
  sheetsRegistry: SheetsRegistry;
  generateClassName: GenerateClassName;
  theme: Theme;
  sheetsManager: Map<
    StylesCreator,
    Map<
      Theme,
      {
        refs: number;
        sheet: StyleSheet<string>;
      }
    >
  >;
};

type Props = {};

class App extends NextApp<Props> {
  pageContext: PageContext | null = null;

  constructor(props: Props) {
    super(props as any);
    this.pageContext = getPageContext();
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      this.pageContext && (
        <Container>
          {/* Wrap every page in Jss and Theme providers */}
          <JssProvider
            registry={this.pageContext.sheetsRegistry}
            generateClassName={this.pageContext.generateClassName}
          >
            {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
            <MuiThemeProvider
              theme={this.pageContext.theme}
              sheetsManager={this.pageContext.sheetsManager}
            >
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              {/* Pass pageContext to the _document though the renderPage enhancer
                to render collected styles on server side. */}
              <Component pageContext={this.pageContext} {...pageProps} />
            </MuiThemeProvider>
          </JssProvider>
        </Container>
      )
    );
  }
}

export default App;
