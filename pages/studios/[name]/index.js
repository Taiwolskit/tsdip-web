import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { name } = router.query;

  return <h1>Post: {name}</h1>;
};

export default Post;
