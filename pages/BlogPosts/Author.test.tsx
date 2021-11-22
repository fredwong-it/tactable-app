import * as React from "react";
import { shallow } from "enzyme";
import { IAuthor } from "../../types";
import Author from "./Author";

const author: IAuthor = {
  createdAt: "2021-09-01T08:03:46.399Z",
  name: "Alison Ondricka",
  avatar: "https://cdn.fakercloud.com/avatars/ricburton_128.jpg",
  updatedAt: "2021-09-17T02:46:51.090Z",
  id: "1",
  postId: "1",
};

describe("Author", () => {
  it("should render author properly", () => {
    // Given

    // When
    const wrapper = shallow(<Author author={author} />);
    const img = wrapper.find(".c-img");
    const name = wrapper.find(".c-name");

    // Then
    expect(img.props().src).toEqual(author.avatar);
    expect(name.text()).toEqual(author.name);
  });
});
