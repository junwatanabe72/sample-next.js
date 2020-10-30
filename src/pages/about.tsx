import Link from 'next/link';
import Layout from '../components/Layout';
// pages/about.js
function About({ query }) {
  return (
    <Layout>
      <p>about</p>
      <Link href="/home">
        <a>home</a>
      </Link>
      <Link href="/post">
        <a>post</a>
      </Link>
    </Layout>
  );
}

export default About;
