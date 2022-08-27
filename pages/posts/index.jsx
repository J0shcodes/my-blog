import AllPosts from "../../components/posts/all-posts";

const AllPostPage = () => {
  const DUMMY_POSTS = [
    {
      slug: "getting-started-with-nextjs",
      title: "Getting started with nextjs",
      image: "getting-started-nextjs.png",
      excerpt:
        "Nextjs is the react framework for production - it makes building fullstack React app a breeze and ships with built-in SSR.",
      date: "2022-08-26",
    },
    {
      slug: "getting-started-with-nextjs2",
      title: "Getting started with nextjs",
      image: "getting-started-nextjs.png",
      excerpt:
        "Nextjs is the react framework for production - it makes building fullstack React app a breeze and ships with built-in SSR.",
      date: "2022-08-26",
    },
    {
      slug: "getting-started-with-nextjs3",
      title: "Getting started with nextjs",
      image: "getting-started-nextjs.png",
      excerpt:
        "Nextjs is the react framework for production - it makes building fullstack React app a breeze and ships with built-in SSR.",
      date: "2022-08-26",
    },
    {
      slug: "getting-started-with-nextjs4",
      title: "Getting started with nextjs",
      image: "getting-started-nextjs.png",
      excerpt:
        "Nextjs is the react framework for production - it makes building fullstack React app a breeze and ships with built-in SSR.",
      date: "2022-08-26",
    },
  ];

  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostPage;
