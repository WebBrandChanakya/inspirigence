import PageBanner from "@/components/ui/PageBanner";
import Link from "next/link";
import React from "react";
import { GraphQLClient, gql } from "graphql-request";

const endpoint = "https://inspirigence.in/graphql";
const graphQLClient = new GraphQLClient(endpoint);

async function fetchPosts() {
  const query = gql`
    query AllPosts($after: String) {
  posts(first: 20, after: $after, where: { categoryName: "Blogs", status: PUBLISH }) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        title
        slug
        date
        content  # Fetch full content instead of excerpt
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
  }
}
`;
  const data = await graphQLClient.request(query);
  return data?.posts?.edges;
}

const page = async () => {
  const stripHtml = (html) => {
    if (!html) return "";
    return html
    .replace(/<\/?[^>]+(>|$)/g, "") // Remove all HTML tags
    .replace(/\[?\.\.\.\]?/g, "") // Remove [...] completely
    .replace(/&hellip;/g, "...") // Convert &hellip; to "..."
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .trim();
  };
  
  let posts = await fetchPosts();
  return (
    <div className="bg-white dark:bg-secondary">
      <PageBanner data={"Blogs"} />
      <section className="py-24 bg-white dark:bg-primarybg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope text-4xl font-bold text-primary text-center mb-16 uppercase">
            Our latest blog
          </h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 justify-center  gap-8  lg:justify-between ">
            {posts.map(({ node }) => (
              <>
                <div className="w-full  border border-gray-300 rounded-2xl transition-all duration-300 shadow-lg hover:-translate-y-3">
                  <div className="flex items-center">
                    <img
                      src={node.featuredImage?.node?.mediaItemUrl}
                      alt={node.featuredImage?.node?.altText || "Blog Image"}
                      className="rounded-t-2xl w-full object-cover"
                    />
                  </div>
                  <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl ">
                    <span className="text-primary font-medium mb-3 block">
                      Published On:{" "}
                      {new Date(node?.date).toLocaleDateString()}
                    </span>
                    <Link href={`${node.slug}`}>
                      {/* <Link href={post.link}> */}
                      <h4 className="text-xl dark:text-white text-black font-medium leading-8 mb-5">
                        {node.title}
                      </h4>
                    </Link>

                    <p className="dark:text-gray-300 text-gray-500 leading-6 mb-10">
                      {stripHtml(node.content).length > 200
                        ? stripHtml(node.content).substring(0, 200) + "..."
                        : stripHtml(node.content)}
                    </p>

                    <Link
                      href={`${node.slug}`}
                      className="cursor-pointer text-lg text-primary font-semibold"
                    >
                      Read more..
                    </Link>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
