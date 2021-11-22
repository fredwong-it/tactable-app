import * as React from "react";
import { shallow } from "enzyme";
import { IComment } from "../../types";
import Comment from "./Comment";
import Date from "./Date";

const comment: IComment = {
  createdAt: "2021-03-04T23:50:32.618Z",
  title: "Qui quo non omnis tenetur.",
  description:
    "Temporibus illo voluptatum illum possimus. Minus laudantium eum. Corrupti provident blanditiis qui sed aperiam ut totam. Cupiditate autem dolor pariatur commodi. Nesciunt incidunt vero repellat reiciendis.",
  updatedAt: "2021-09-17T02:24:07.859Z",
  id: "1",
  postId: "1",
};

describe("Comment", () => {
  it("should render comment properly", () => {
    // Given

    // When
    const wrapper = shallow(<Comment comment={comment} />);
    const h6 = wrapper.find("h6");
    const date = wrapper.find(Date);
    const descrption = wrapper.find(".card-text");

    // Then
    expect(h6.text()).toEqual(comment.title);
    expect(date.props().children).toEqual(comment.createdAt);
    expect(descrption.text()).toEqual(comment.description);
  });
});
