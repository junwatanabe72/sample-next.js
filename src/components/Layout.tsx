import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { GlobalStyle } from '../../styles/global';
const PageDiv = styled.div`
  padding: 2em 1em;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 4em;
`;
const StyledA = styled.a`
  color: inherit;
  text-decoration: none;
`;

const StyledFooter = styled.footer`
  margin-top: 4em;
  padding-top: 2em;
  padding-bottom: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layout = (props) => {
  const { title, children } = props;
  const siteTitle = '後藤のブログ';
  return (
    <PageDiv>
      <Head>
        <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledHeader>
        <h1>
          <Link href="/">
            <StyledA>{siteTitle}</StyledA>
          </Link>
        </h1>
      </StyledHeader>
      <GlobalStyle />
      <main>
        {title ? <h1 className="page-title">{title}</h1> : ``}
        <div className="page-main">{children}</div>
      </main>
      <StyledFooter>&copy; {siteTitle}</StyledFooter>
    </PageDiv>
  );
};
export default Layout;
