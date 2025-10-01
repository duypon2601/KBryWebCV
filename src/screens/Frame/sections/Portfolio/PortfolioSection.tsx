import { Button, Col, Row } from "antd";
import React, { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const PortfolioSection = (): React.ReactElement => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox=portfolio]", {
      groupAll: true,
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <Row justify="center" style={{ marginTop: 24 }}>
      <Col>
        <a
          href="https://www.youtube.com/watch?v=ysz5S6PUM-Uhttps://www.youtube.com/watch?v=QXWd16Vp1P0"
          data-fancybox="portfolio"
          aria-label="Open All Projects video"
        >
          <Button
            type="primary"
            shape="round"
            style={{ backgroundColor: "#f5a623", borderColor: "#f5a623" }}
          >
            All Projects
          </Button>
        </a>
      </Col>
      <Col>
        <a
          href="https://www.youtube.com/watch?v=jNQXAC9IVRw"
          data-fancybox="portfolio"
          aria-label="Open Composition video"
        >
          <Button
            type="default"
            shape="round"
            style={{
              backgroundColor: "#2c2c2c",
              borderColor: "#2c2c2c",
              color: "#eaeaea",
            }}
          >
            Composition
          </Button>
        </a>
      </Col>
      <Col>
        <a
          href="https://www.youtube.com/watch?v=oHg5SJYRHA0"
          data-fancybox="portfolio"
          aria-label="Open Mixing video"
        >
          <Button
            type="default"
            shape="round"
            style={{
              backgroundColor: "#2c2c2c",
              borderColor: "#2c2c2c",
              color: "#eaeaea",
            }}
          >
            Mixing
          </Button>
        </a>
      </Col>
      <Col>
        <a
          href="https://www.youtube.com/watch?v=aqz-KE-bpKQ"
          data-fancybox="portfolio"
          aria-label="Open Live Set video"
        >
          <Button
            type="default"
            shape="round"
            style={{
              backgroundColor: "#2c2c2c",
              borderColor: "#2c2c2c",
              color: "#eaeaea",
            }}
          >
            Live Set
          </Button>
        </a>
      </Col>
      <Col>
        <a
          href="https://www.youtube.com/watch?v=ScMzIvxBSi4"
          data-fancybox="portfolio"
          aria-label="Open Visual Score video"
        >
          <Button
            type="default"
            shape="round"
            style={{
              backgroundColor: "#2c2c2c",
              borderColor: "#2c2c2c",
              color: "#eaeaea",
            }}
          >
            Visual Score
          </Button>
        </a>
      </Col>
    </Row>
  );
};

export default PortfolioSection;