export const getStaticPaths = async () => {
  const res = await fetch('http://127.0.0.1:8000/api/blogs');
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map((blog) => {
    return {
      params: { id: blog.id.toString() },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('http://127.0.0.1:8000/api/blogs/' + id);
  const data = await res.json();

  return {
    props: { blog: data },
    revalidate: 1,
  };
};

const Details = ({ blog }) => {
  if (!blog) return <div></div>;

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
};

export default Details;
