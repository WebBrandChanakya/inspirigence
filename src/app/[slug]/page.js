"use client";

import React, { useEffect, useState } from "react";
import { useParams ,useRouter } from "next/navigation";
import Link from "next/link";


const fetchBlogPost = async (slug) => {
  try {
    const res = await fetch("https://inspirigence.in/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          query GetSinglePost($slug: String!) {
            postBy(slug: $slug) {
              title
              content
              date
              featuredImage {
                node {
                  mediaItemUrl
                  altText
                }
              }
              author {
                node {
                  name
                }
              }
              rankMathSeo {
                title
                description
                canonical
                robots
              }
            }
          }
        `,
        variables: { slug },
      }),
    });

    const { data, errors } = await res.json();

    if (errors && errors.length > 0) {
      console.error("GraphQL Errors:", errors);
      return null;
    }

    return data?.postBy || null;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
};


const fetchRecentPosts = async () => {
  try {
    const res = await fetch("https://inspirigence.in/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          query GetRecentPosts {
            posts(first: 3, where: { categoryName: "Blogs", status: PUBLISH }) {
              edges {
                node {
                  title
                  slug
                  date
                  featuredImage {
                    node {
                      mediaItemUrl
                      altText
                    }
                  }
                }
              }
            }
          }
        `,
      }),
    });

    const { data } = await res.json();
    return data?.posts?.edges || [];
  } catch (error) {
    console.error("Error fetching recent posts:", error);
    return [];
  }
};

const BlogPage = () => {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug;
  const [blogPost, setBlogPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      (async () => {
        const data = await fetchBlogPost(slug);
        if (!data) {
          router.push("/404");
          return;
        } else {
          setBlogPost(data);
          const posts = await fetchRecentPosts();
          setRecentPosts(posts);
          setLoading(false);
        }
      })();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-100 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-white"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-white dark:bg-secondary pb-24">


      <div className="py-8 lg:px-24">
        <div className="container mx-auto px-4">
          <h1 className="text-xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
            {blogPost.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-100">
            Published on {new Date(blogPost.date).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="py-4 lg:px-24">
        <div className="container mx-auto flex flex-col lg:flex-row">
          {/* Blog Content */}
          <div className="w-full md:w-2/3 px-4">
            {blogPost.featuredImage?.node?.mediaItemUrl ? (
              <img
                src={blogPost.featuredImage.node.mediaItemUrl}
                alt={
                  blogPost.featuredImage.node.altText || "Blog Featured Image"
                }
                className="mb-8 rounded-lg w-full object-cover"
              />
            ) : (
              <div className="bg-gray-200 rounded-lg w-full h-64 flex items-center justify-center">
                <span className="text-gray-500">No Image Available</span>
              </div>
            )}

            <div
              className="text-gray-700 dark:text-gray-50 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </div>

          {/* Sidebar: Recent Posts */}
          <div className="w-full md:w-1/3 px-4">
            <div className="bg-gray-100 dark:bg-primarybg lg:p-8 p-4 rounded-xl">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Recent Posts
              </h2>
              {recentPosts.length === 0 ? (
                <p className="text-gray-500">No recent posts available.</p>
              ) : (
                <ul className="list-none">
                  {recentPosts.map(({ node }) => (
                    <li key={node.slug} className="mb-6">
                      <Link href={`/${node.slug}`}>
                        <div className="flex">
                          {node.featuredImage?.node?.mediaItemUrl ? (
                            <img
                              src={node.featuredImage.node.mediaItemUrl}
                              alt={
                                node.featuredImage.node.altText || node.title
                              }
                              width={100}
                              height={50}
                              className="object-cover mr-4 rounded-md"
                            />
                          ) : (
                            <div className="w-[100px] h-[50px] bg-gray-300 mr-4 rounded-md flex items-center justify-center">
                              <span className="text-gray-500 text-xs">
                                No Image
                              </span>
                            </div>
                          )}
                          <div>
                            <h3 className="text-sm font-medium dark:text-white text-gray-700">
                              {node.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-200">
                              Published on{" "}
                              {new Date(node.date).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
