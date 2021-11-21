import styled from "styled-components";
import moment from "moment";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

const DateSpan = styled.span`
  font-size: 14px;
  font-style: italic;
  margin-bottom: 5px;
`;

const formatDate = (dateStr: string, fullDate: boolean = false) => {
  if (fullDate) {
    return moment(dateStr).format("MM/DD/YYYY, h:mm:ss a");
  } else {
    return moment(dateStr).format("MMMM DD, YYYY");
  }
};

type Props = {
    children: string;
};

const Date: React.FC<Props> = ({ children }) => {
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip>{formatDate(children, true)}</Tooltip>}
    >
      <DateSpan>{formatDate(children)}</DateSpan>
    </OverlayTrigger>
  );
};

export default Date;
