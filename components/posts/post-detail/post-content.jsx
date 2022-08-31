import Image from "next/image";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const PostContent = (props) => {
  const { post } = props;

  const customRenderers = {
    img(img) {
      return (
        // <Image
        //   src={`/images/posts/${post.slug}/${img.src}`}
        //   alt={img.alt}
        //   width={600}
        //   height={300}
        // />
        <div className={classes.image}>
          <Image
            src={`/images/posts/${post.slug}/${img.src}`}
            alt={img.alt}
            width={600}
            height={300}
          />
        </div>
      );
    },

    code(code) {
      const { className, children } = code;

      const languageArray = className.split("-");

      return (
        <SyntaxHighlighter
          style={atomDark}
          language={languageArray[1]}
          children={children}
        />
      );
    },

    // p(paragraph) {
    //   console.log(paragraph)
    //   const { node } = paragraph;

    //   if (node.children[0].type === "img") {
    //     const img = node.children[0];
    //     return (
    //       <div className={classes.image}>
    //         <Image
    //           src={`/images/posts/${post.slug}/${img.url}`}
    //           alt={img.alt}
    //           width={600}
    //           height={300}
    //         />
    //       </div>
    //     );
    //   }

    //   return <p>{paragraph.children}</p>;
    // },
  };

  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
