import "../_styles/index.scss";

import { FunctionComponent } from "react";
import { Icon } from "./Icon";
import Column from "./layout/Column";
import Container from "./layout/Container";
import Row from "./layout/Row";

const SocialMedia: FunctionComponent = () => {
  return (
    <Container className="social-media">
      <Row>
        <Column size={4}>
          <a
            href="https://www.linkedin.com/in/anastasiia-sorina-b9681686"
            target="_blank"
          >
            <Icon type="linkedIn" />
          </a>
        </Column>
        <Column size={4}>
          <a href="https://github.com/AnastasiiaSorina" target="_blank">
            <Icon type="gitHub" />
          </a>
        </Column>
        <Column size={4}>
          <a
            href="https://www.instagram.com/anastasaiia.sorina"
            target="_blank"
          >
            <Icon type="instagram" />
          </a>
        </Column>
      </Row>
    </Container>
  );
};

export default SocialMedia;
