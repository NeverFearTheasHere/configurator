import React, { ComponentType } from 'react';
import Document, {
  Head,
  Main,
  NextScript,
  NextDocumentContext,
  PageProps,
} from 'next/document';
import flush from 'styled-jsx/server';

const SITE_NAME = 'Configurator';
const SITE_TITLE = 'Configurator';
const SITE_DESCRIPTION = 'Configurator';
const SITE_IMAGE = ''; // TODO - get the RED logo

type DocumentProps = PageProps & {
  pageContext: any;
};

class ConfiguratorDocument extends Document<DocumentProps> {
  static async getInitialProps(ctx: NextDocumentContext) {
    let pageContext: any;
    const page = ctx.renderPage((Component: ComponentType<DocumentProps>) => {
      const WrappedComponent = (props: DocumentProps) => {
        pageContext = props.pageContext;
        return <Component {...props} pageContext={pageContext} />;
      };

      return WrappedComponent;
    });

    return {
      ...page,
      pageContext,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: (
        <React.Fragment>
          <style
            id="jss-server-side"
            dangerouslySetInnerHTML={{
              __html: pageContext!.sheetsRegistry.toString(),
            }}
          />
          {flush() || null}
        </React.Fragment>
      ),
    };
  }

  render() {
    const { pageContext } = this.props;

    return (
      <html lang="en" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={SITE_NAME} />
          <meta property="og:title" content={SITE_TITLE} />
          <meta property="og:description" content={SITE_DESCRIPTION} />
          <meta property="og:image" content={SITE_IMAGE} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={SITE_NAME} />
          <meta name="twitter:title" content={SITE_TITLE} />
          <meta name="twitter:description" content={SITE_DESCRIPTION} />
          <meta property="twitter:image" content={SITE_IMAGE} />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <meta
            name="theme-color"
            content={pageContext.theme.palette.primary.main}
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Lato:300,400,500"
          />
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=default,Array.prototype.find,Array.prototype.includes,String.prototype.includes,Array.prototype.findIndex,Object.entries" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default ConfiguratorDocument;
