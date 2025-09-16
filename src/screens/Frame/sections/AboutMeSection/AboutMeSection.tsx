import { Button, Card, Col, Divider, Row, Typography } from "antd";

const { Title, Paragraph } = Typography;

// styled-components removed; using inline styles for layout

export const AboutMeSection = (): JSX.Element => {
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          background:
            "linear-gradient(90deg, rgba(30, 30, 30, 1) 0%, rgba(21, 21, 21, 1) 100%)",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem 1rem",
        }}
      >
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url(https://c.animaapp.com/BleKbnjN/img/img.png)",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            opacity: 0.1,
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 1rem",
          }}
        >
          <div style={{
            width: "100%",
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center"
          }}>
            <Title
              level={1}
              style={{ color: "#eaeaea", textAlign: "center" }}
            >
              Sáng tạo cảm xúc{" "}
              <span style={{ color: "#f5a623" }}>
                qua văn hóa, nghệ thuật
              </span>
            </Title>
            <Paragraph
              style={{
                color: "#a9a9a9",
                textAlign: "center",
                fontSize: "1.25rem",
              }}
            >
              Mỗi tác phẩm là một nhịp cầu kết nối tâm hồn – tôi khai thác vẻ
              đẹp đa chiều của văn hóa và nghệ thuật để kể những câu chuyện
              đầy cảm xúc, gần gũi mà sâu sắc. Đây không chỉ là hành trình
              sáng tạo, mà còn là cách tôi lan tỏa cảm hứng và giá trị nhân
              văn đến cộng đồng.
            </Paragraph>
            <Row justify="center" gutter={16}>
              <Col>
                <Button
                  type="primary"
                  style={{
                    backgroundColor: "#f5a623",
                    borderColor: "#f5a623",
                  }}
                >
                  Khám phá Portfolio
                </Button>
              </Col>
              <Col>
                <Button
                  type="default"
                  style={{ borderColor: "#f5a623", color: "#f5a623" }}
                >
                  Liên hệ ngay
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <Divider style={{
        background: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(45,45,45,1) 50%, rgba(0,0,0,0) 100%)",
        margin: 0,
      }} />

      <div style={{ padding: "3rem 1rem", maxWidth: 1200, margin: "0 auto", width: "100%" }}>
        <Row justify="center" gutter={16}>
          <Col span={12}>
            <Title level={2} style={{ color: "#eaeaea" }}>
              About Me
            </Title>
            <Paragraph style={{ color: "#a9a9a9" }}>
              Tôi là một chuyên viên tổ chức và dàn dựng chương trình văn hóa
              – nghệ thuật, với hơn 5 năm gắn bó cùng sân khấu và không gian
              sáng tạo. Tôi tin rằng mỗi sự kiện là một câu chuyện, và nhiệm
              vụ của tôi là kể nó bằng cảm xúc, sự chỉn chu và tinh thần
              "trách nhiệm – thân thiện – tôn trọng".
              <br />
              Tôi luôn tìm kiếm những cơ hội để học hỏi, mở rộng trải nghiệm
              và góp phần tạo nên những khoảnh khắc nghệ thuật đáng nhớ.
            </Paragraph>
          </Col>
          <Col span={12}>
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundImage:
                  "url(https://c.animaapp.com/BleKbnjN/img/img-1@2x.png)",
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
                borderRadius: "8px",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(90deg, rgba(30,30,30,0.6) 0%, rgba(0,0,0,0) 100%)",
                  borderRadius: "8px",
                }}
              />
            </div>
          </Col>
        </Row>
      </div>

      <Divider style={{
        background: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(45,45,45,1) 50%, rgba(0,0,0,0) 100%)",
        margin: 0,
      }} />

      <div style={{ padding: "3rem 1rem", maxWidth: 1200, margin: "0 auto", width: "100%" }}>
        <Title level={2} style={{ color: "#eaeaea", textAlign: "center", marginBottom: "2rem" }}>Featured Projects</Title>
        <Row justify="center" gutter={16}>
          <Col span={8}>
            <Card
              hoverable
              cover={
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "16 / 9",
                    backgroundImage:
                      "url(https://c.animaapp.com/BleKbnjN/img/img-2@2x.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                  }}
                />
              }
              style={{
                backgroundColor: "#151515",
                borderColor: "#2d2d2d",
                borderRadius: "8px",
              }}
            >
              <Card.Meta
                title={<span style={{ color: "#eaeaea" }}>Neon Dreams</span>}
                description={
                  <>
                    <Paragraph style={{ color: "#a9a9a9", marginBottom: 0 }}>
                      Electronic • Synthwave
                    </Paragraph>
                    <Paragraph style={{ color: "#f5a623", marginBottom: 0 }}>
                      2024
                    </Paragraph>
                  </>
                }
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              cover={
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "16 / 9",
                    backgroundImage:
                      "url(https://c.animaapp.com/BleKbnjN/img/img-3@2x.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                  }}
                />
              }
              style={{
                backgroundColor: "#151515",
                borderColor: "#2d2d2d",
                borderRadius: "8px",
              }}
            >
              <Card.Meta
                title={
                  <span style={{ color: "#eaeaea" }}>Midnight Score</span>
                }
                description={
                  <>
                    <Paragraph style={{ color: "#a9a9a9", marginBottom: 0 }}>
                      Cinematic • Film Score
                    </Paragraph>
                    <Paragraph style={{ color: "#f5a623", marginBottom: 0 }}>
                      2023
                    </Paragraph>
                  </>
                }
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              cover={
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "16 / 9",
                    backgroundImage:
                      "url(https://c.animaapp.com/BleKbnjN/img/img-4@2x.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                  }}
                />
              }
              style={{
                backgroundColor: "#151515",
                borderColor: "#2d2d2d",
                borderRadius: "8px",
              }}
            >
              <Card.Meta
                title={
                  <span style={{ color: "#eaeaea" }}>Digital Echoes</span>
                }
                description={
                  <>
                    <Paragraph style={{ color: "#a9a9a9", marginBottom: 0 }}>
                      Ambient • Electronic
                    </Paragraph>
                    <Paragraph style={{ color: "#f5a623", marginBottom: 0 }}>
                      2024
                    </Paragraph>
                  </>
                }
              />
            </Card>
          </Col>
        </Row>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Button>View All Projects</Button>
        </div>
      </div>

      <Divider
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(45,45,45,1) 50%, rgba(0,0,0,0) 100%)",
          margin: 0,
        }}
      />

      <div style={{ padding: "3rem 1rem", maxWidth: 1200, margin: "0 auto", width: "100%" }}>
        <Title level={2} style={{ color: "#eaeaea", textAlign: "center", marginBottom: "2rem" }}>Let's Create Together</Title>
        <Paragraph
          style={{
            color: "#a9a9a9",
            textAlign: "center",
            fontSize: "1.25rem",
          }}
        >
          Có dự án âm nhạc thú vị? Hãy liên hệ để chúng ta cùng tạo ra những
          tác phẩm âm thanh độc đáo và đầy cảm xúc.
        </Paragraph>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Button>Start a Conversation</Button>
        </div>
      </div>
    </div>
  );
};