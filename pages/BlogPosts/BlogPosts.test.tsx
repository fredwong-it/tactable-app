import * as React from "react";
import { shallow } from "enzyme";
import BlogPosts from "./BlogPosts";
import * as ReactQuery from "react-query";
import * as useFetch from "../hooks/useFetch";
import { IPost } from "../../types";
import Post from "./Post";
import { mockPost } from "./Post.test";

const mockPosts: IPost[] = Array(15)
  .fill("")
  .map((o, index) => {
    return {
      ...mockPost,
      title: `title ${index + 1}`,
    };
  });

describe("BlogPosts", () => {
  it("should display Loading state", () => {
    // Given
    jest.spyOn(useFetch, "fetchPosts").mockReturnValue(undefined);

    // When
    const wrapper = shallow(<BlogPosts />);

    // Then
    const loadingDiv = wrapper.find(".c-loading");
    const title = wrapper.find(".c-title");

    expect(loadingDiv.text()).toEqual("Loading...");
    expect(title.exists()).toEqual(false);
  });

  it("should display header without blog posts", () => {
    // Given
    const data: IPost[] = [];
    jest.spyOn(useFetch, "fetchPosts").mockReturnValue(data);

    // When
    const wrapper = shallow(<BlogPosts />);

    // Then
    const loadingDiv = wrapper.find(".c-loading");
    const title = wrapper.find(".c-title");
    const posts = wrapper.find(Post);

    expect(loadingDiv.exists()).toEqual(false);
    expect(title.text()).toEqual("Blog Posts");
    expect(posts.exists()).toEqual(false);
  });

  it("should display blog posts first page", () => {
    // Given
    const currentPage = 1;
    const setCurrentPage = jest.fn();
    jest.spyOn(useFetch, "fetchPosts").mockReturnValue(mockPosts);
    jest
      .spyOn(React, "useState")
      .mockReturnValue([currentPage, setCurrentPage]);

    // When
    const wrapper = shallow(<BlogPosts />);

    // Then
    const title = wrapper.find(".c-title");
    const posts = wrapper.find(Post);
    const lis = wrapper.find("ul > li");

    expect(title.text()).toEqual("Blog Posts");
    expect(posts.length).toEqual(5);
    expect(posts.at(0).props().post.title).toEqual("title 1");
    expect(lis.length).toEqual(3);
    expect(lis.at(0).props().className).toContain("active");
  });

  it("should display blog posts second page", () => {
    // Given
    const currentPage = 2;
    const setCurrentPage = jest.fn();
    jest.spyOn(useFetch, "fetchPosts").mockReturnValue(mockPosts);
    jest
      .spyOn(React, "useState")
      .mockReturnValue([currentPage, setCurrentPage]);

    // When
    const wrapper = shallow(<BlogPosts />);

    // Then
    const posts = wrapper.find(Post);
    const lis = wrapper.find("ul > li");

    expect(posts.length).toEqual(5);
    expect(posts.at(0).props().post.title).toEqual("title 6");
    expect(lis.length).toEqual(3);
    expect(lis.at(1).props().className).toContain("active");
  });
});
