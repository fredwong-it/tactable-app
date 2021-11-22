import * as React from "react";
import { NextPage } from "next";
import { useState } from "react";
import Post from "./Post";
import styled from "styled-components";
import { fetchPosts } from "../hooks/useFetch";

const H1 = styled.h1`
  width: 100%;
  margin-bottom: 30px;
`;

const Nav = styled.nav`
  margin: 10px;
  display: flex;
  justify-content: flex-end;
`;

const BlogPosts: NextPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const data = fetchPosts();

  // data is undefined, which is not ready, loading state
  if (!data) {
    return <div className="c-loading">Loading...</div>;
  }

  const totalCount = data.length;
  const pageSize = 5;
  const pageCount = Math.ceil(totalCount / pageSize);
  const pages = Array.from(Array(pageCount).keys()).map((o) => o + 1); // pages array

  const renderPosts = () => {
    return (
      <div>
        {!!data &&
          data.slice(startPageIndex, startPageIndex + pageSize).map((post) => {
            return <Post key={post.id} post={post} />;
          })}
      </div>
    );
  };

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

  return (
    <div id="divBlogPosts">
      <H1 className="c-title">Blog Posts</H1>
      {renderPosts()}
      {renderPagination()}
    </div>
  );
};

export default BlogPosts;
