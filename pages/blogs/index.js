import styles from '../../styles/Blogs.module.css';
import Link from 'next/link';
import axios from 'axios';
import config from '../../components/api/config';
export const getStaticProps = async () => {
  let suffix = '';
  const data = await axios
    .get(config.prefixUrl + suffix)
    .then((res) => res.data);
  return {
    props: { blogs: data },
    revalidate: 1,
  };
};

const Blogs = ({ blogs }) => {
  return (
    <div>
      <h1>All Blogs</h1>
      {blogs.map((blog) => (
        <Link href={'/blogs/' + blog.id} key={blog.id}>
          <a className={styles.single}>
            <h3>{blog.title}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Blogs;
