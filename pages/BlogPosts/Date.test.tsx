import * as React from "react";
import { shallow } from "enzyme";
import { IAuthor } from "../../types";
import Date, { formatDate } from "./Date";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

describe("Date", () => {
  it("should render date properly", () => {
    // Given
    const createdAt = "2021-09-01T08:03:46.399Z";

    // When
    const wrapper = shallow(<Date>{createdAt}</Date>);
    const date = wrapper.find(".c-date");
    const overlayTrigger = wrapper.find(OverlayTrigger);

    // Then
    expect(date.text()).toEqual("September 01, 2021");
  });
});

describe("formatDate", () => {
  it("should format date to default format", () => {
    // Given
    const date = "2021-09-01T08:03:46.399Z";

    // When
    const result = formatDate(date);

    // Then
    expect(result).toEqual("September 01, 2021");
  });

  it("should format date to full date format", () => {
    // Given
    const date = "2021-09-01T08:03:46.399Z";

    // When
    const result = formatDate(date, true);

    // Then
    expect(result).toEqual("09/01/2021, 4:03:46 am");
  });
});
