import fs from 'fs';
import path from 'path';
import Layout from '../../components/Layout';
import { listContentFiles, readContentFile } from '../../lib/content-loader';

const Post: React.FC = (params: any) => {
  return (
    <Layout title={params.title}>
      <div className="post-meta">
        <span>{params.published}</span>
      </div>
      <div className="post-body" dangerouslySetInnerHTML={{ __html: params.content }} />
    </Layout>
  );
};
/**
 *
 * ページコンポーネントで使用する値を用意する
 */
export async function getStaticProps({ params }) {
  const content = await readContentFile(fs, params.slug);
  return {
    props: {
      ...content,
    },
  };
}
/**
 * 有効な URL パラメータを全件返す
 */
export async function getStaticPaths() {
  const paths = listContentFiles({ fs }).map((filename) => ({
    params: {
      slug: `${path.parse(filename).name}.md`,
    },
  }));
  return { paths, fallback: false };
}

export default Post;
