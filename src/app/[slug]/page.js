"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Head from "next/head";
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
            }
          }
        `,
        variables: { slug },
      }),
    });

    const { data } = await res.json();
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
  const params = useParams();
  const slug = params.slug;

  const [blogPost, setBlogPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      fetchBlogPost(slug).then((data) => setBlogPost(data));
      fetchRecentPosts().then((posts) => setRecentPosts(posts));
    }
  }, [slug]);

  if (!blogPost) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-xl">Loading blog post...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-white dark:bg-secondary pb-24">
      {/* ✅ SEO Optimization */}
      <Head>
        <title>{blogPost.title} | Inspirigence</title>
        <meta name="description" content={blogPost.content.substring(0, 150)} />
      </Head>

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
          {/* ✅ Blog Content */}
          <div className="w-full md:w-2/3 px-4">
            {blogPost.featuredImage?.node?.mediaItemUrl ? (
              <img
                src={blogPost.featuredImage.node.mediaItemUrl}
                alt={blogPost.featuredImage.node.altText || "Blog Featured Image"}
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

          {/* ✅ Sidebar: Top 3 Recent Posts */}
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
                      <Link href={`${node.slug}`} className="text-gray-700  hover:text-gray-900">
                        <div className="flex">
                          {node.featuredImage?.node?.mediaItemUrl ? (
                            <img
                              src={node.featuredImage.node.mediaItemUrl}
                              alt={node.featuredImage.node.altText || node.title}
                              width={100}
                              height={50}
                              className="object-cover mr-4 rounded-md"
                            />
                          ) : (
                            <div className="w-[100px] h-[50px] bg-gray-300 mr-4 rounded-md flex items-center justify-center">
                              <span className="text-gray-500 text-xs">No Image</span>
                            </div>
                          )}
                          <div>
                            <h3 className="text-sm font-medium dark:text-white text-gray-700">
                              {node.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-200">
                              Published on {new Date(node.date).toLocaleDateString()}
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
