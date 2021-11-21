import { NextPage } from "next";
import { useState } from "react";
import Post from "./Post";
import { fetchPosts } from "../api/blogPost.api";
import { useQuery } from "react-query";
import styled from "styled-components";

const H1 = styled.h1`
  margin-bottom: 30px;
`

const Nav = styled.nav`
  margin: 10px;
  display: flex;
  justify-content: flex-end;
`;

const BlogPosts: NextPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error, isError, isLoading } = useQuery("posts", fetchPosts);
  const totalCount = !!data ? data.length : 0;
  const pageSize = 5;
  const pageCount = Math.ceil(totalCount / pageSize);
  const pages = Array.from(Array(pageCount).keys()).map((o) => o + 1);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error! {error.message}</div>;
  }

  const renderPagination = () => {
    return (
      <Nav aria-label="Page navigation">
        <ul className="pagination">
          {pages.map((page) => {
            let classes = "page-item";

            if (page === currentPage) {
              classes += " active";
            }

            return (
              <li key={page} className={classes}>
                <a
                  className="page-link"
                  href="#"
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </a>
              </li>
            );
          })}
        </ul>
      </Nav>
    );
  };

  const startPageIndex = (currentPage - 1) * pageSize;

  console.log("data", data);
  console.log(startPageIndex, startPageIndex + pageSize);

  return (
    <div>
      <H1>Blog Posts</H1>
      {!!data &&
        data.slice(startPageIndex, startPageIndex + pageSize).map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      {renderPagination()}
    </div>
  );
};

export default BlogPosts;
