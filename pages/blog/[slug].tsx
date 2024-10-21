import { useRouter } from "next/router";

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Blog Post: {slug}</h1>
      <p className="mt-4">This is where the blog content will go.</p>
    </div>
  );
};

export default BlogPost;
