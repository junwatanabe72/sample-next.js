import React from 'react';
import styled from 'styled-components';
import fs from 'fs';
import Link from 'next/link';
import Layout from '../components/Layout';
import { readContentFiles } from '../lib/content-loader';
import { useSelector } from 'react-redux';
import { initalState } from '../duck/MyButton/userReducer';

const StyledDiv = styled.div`
  margin-bottom: 2em;
`;

const StyledH2 = styled.h2`
  text-decoration: none;
`;
const Index: React.FC = (props: any) => {
  const state = useSelector<typeof initalState, typeof initalState>((state) => state);
  const { posts, hasArchive } = props;
  return (
    <Layout>
      {state.map((user) => {
        return (
          <ul>
            <li>{user.name}</li>
            <li>{user.id}</li>
          </ul>
        );
      })}
      {posts.map((post, num) => (
        <StyledDiv key={num}>
          <StyledH2>
            <Link href="/posts/[id]" as={`/posts/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </StyledH2>
          <div>
            <span>{post.published}</span>
          </div>
        </StyledDiv>
      ))}
      {hasArchive ? (
        <div className="home-archive">
          <Link href="/archive/[page]" as="/archive/1">
            <a>アーカイブ</a>
          </Link>
        </div>
      ) : (
        ``
      )}
      <Link href="/home">
        <a>home</a>
      </Link>
      <Link href="/about">
        <a>about</a>
      </Link>
    </Layout>
  );
};
export default Index;

export async function getStaticProps({ params }) {
  const MAX_COUNT = 5;
  const posts = await readContentFiles({ fs });
  const hasArchive = posts.length > MAX_COUNT;
  return {
    props: {
      posts: posts.slice(0, MAX_COUNT),
      hasArchive,
    },
  };
}
