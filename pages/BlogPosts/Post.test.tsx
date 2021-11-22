import * as React from "react";
import { shallow } from "enzyme";
import Post from "./Post";
import { IPost } from "../../types";
import Author from "./Author";
import Comment from "./Comment";
import Date from "./Date";

const post: IPost = {
  title: "title 1",
  description:
    "Similique ipsum ut quae et cum. Quas et nisi at. Mollitia dolor quo dolores quia dolorem quam harum aut quis. Est enim vitae voluptate aliquid eligendi quia est doloremque.",
  createdAt: "2021-05-20T01:13:07.861Z",
  updatedAt: "2021-09-17T04:11:19.105Z",
  id: "1",
  authors: [
    {
      createdAt: "2021-09-01T08:03:46.399Z",
      name: "Alison Ondricka",
      avatar: "https://cdn.fakercloud.com/avatars/ricburton_128.jpg",
      updatedAt: "2021-09-17T02:46:51.090Z",
      id: "1",
      postId: "1",
    },
    {
      createdAt: "2021-05-09T08:41:56.829Z",
      name: "Leigh Schuppe",
      avatar: "https://cdn.fakercloud.com/avatars/kuldarkalvik_128.jpg",
      updatedAt: "2021-09-16T21:18:15.506Z",
      id: "6",
      postId: "1",
    },
  ],
  comments: [
    {
      createdAt: "2021-03-04T23:50:32.618Z",
      title: "Qui quo non omnis tenetur.",
      description:
        "Temporibus illo voluptatum illum possimus. Minus laudantium eum. Corrupti provident blanditiis qui sed aperiam ut totam. Cupiditate autem dolor pariatur commodi. Nesciunt incidunt vero repellat reiciendis.",
      updatedAt: "2021-09-17T02:24:07.859Z",
      id: "1",
      postId: "1",
    },
  ],
};

describe("Post", () => {
  it("should render post without comments", () => {
    // Given

    // When
    const wrapper = shallow(<Post post={post} />);
    const h2 = wrapper.find("h2");
    const date = wrapper.find(Date);
    const descrption = wrapper.find("p.card-text");
    const authors = wrapper.find(Author);
    const comments = wrapper.find(Comment);

    // Then
    expect(h2.text()).toEqual(post.title);
    expect(date.props().children).toEqual(post.createdAt);
    expect(descrption.text()).toEqual(post.description);
    expect(authors.length).toEqual(2);
    expect(comments.exists()).toEqual(false);
  });

  it("should render post with comments", () => {
    // Given
    const showComments = true;
    const setShowComments = jest.fn();
    jest
      .spyOn(React, "useState")
      .mockReturnValue([showComments, setShowComments]);

    // When
    const wrapper = shallow(<Post post={post} />);
    const comments = wrapper.find(Comment);

    // Then
    expect(comments.length).toEqual(1);
  });
});
