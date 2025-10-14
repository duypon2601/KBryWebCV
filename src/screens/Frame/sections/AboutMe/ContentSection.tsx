import {
    AudioOutlined,
    CustomerServiceOutlined,
    SoundOutlined,
  } from "@ant-design/icons";
  import { Card, Col, Divider, Row, Typography } from "antd";
  import type { JSX } from "react";
  
  const { Title, Text, Paragraph } = Typography;
  
  const ContentSection = (): JSX.Element => {
    return (
      <div style={{ width: "100%", position: "relative" }}>
        <Row style={{ opacity: 0.46, marginBottom: 40 }}>
          <Col span={12}>
            <img
              style={{ width: "100%", height: "auto" }}
              alt="Div"
              src="https://placehold.co/520x334"
            />
          </Col>
          <Col span={12}>
            <Title level={2} style={{ color: "#f5a623" }}>
              About Me
            </Title>
            <Text style={{ fontSize: 24, color: "#eaeaea" }}>🎤</Text>
            <Paragraph style={{ color: "#eaeaea", fontSize: 18 }}>
              Music has been my universal language since childhood. Growing up in
              a household filled with vinyl records and late-night jam sessions, I
              discovered that melodies could express what words couldn't capture.
            </Paragraph>
            <Paragraph style={{ color: "#eaeaea", fontSize: 18 }}>
              <span>
                My sound draws inspiration from jazz legends like Miles Davis, the
                raw energy of indie rock, and the intricate production techniques
                of modern electronic music. This eclectic mix creates a unique
                sonic landscape that
              </span>
              <span style={{ color: "#f5a623" }}> 🎶</span>
              <span> bridges generations and genres.</span>
            </Paragraph>
            <Paragraph style={{ color: "#eaeaea", fontSize: 18 }}>
              <span>
                I believe music should tell stories, evoke emotions, and create
                connections between strangers. Every track I produce is a chapter
                in an ongoing narrative about human experience, love, loss, and
                the beautiful chaos of
              </span>
              <span style={{ color: "#f5a623" }}> 🎚</span>
              <span> existence.</span>
            </Paragraph>
            <Card
              style={{
                backgroundColor: "#2c2c2c",
                borderColor: "#2d2d2d",
                borderRadius: 10,
              }}
            >
              <Paragraph style={{ color: "#a9a9a9", textAlign: "center" }}>
                "Music is the soundtrack to life's most important moments. My goal
                is to create those moments for others."
              </Paragraph>
            </Card>
          </Col>
        </Row>
  
        <Divider style={{ backgroundColor: "#2d2d2d" }} />
  
        <Row style={{ opacity: 0.83, marginBottom: 40 }}>
          <Col span={24}>
            <Title level={3} style={{ color: "#f5a623" }}>
              My Journey
            </Title>
            <Text style={{ fontSize: 24, color: "#eaeaea" }}>🎵</Text>
          </Col>
          <Col span={24}>
            <Card
              style={{
                backgroundColor: "#2c2c2c",
                borderColor: "#2d2d2d",
                borderRadius: 10,
                marginBottom: 20,
              }}
            >
              <Row>
                <Col span={20}>
                  <Title level={4} style={{ color: "#f5a623" }}>
                    Berklee College of Music
                  </Title>
                  <Text style={{ color: "#a9a9a9" }}>
                    Bachelor's in Music Production & Engineering
                  </Text>
                  <Paragraph style={{ color: "#eaeaea" }}>
                    Studied under renowned producers and learned the technical
                    foundations that shape my sound today. Specialized in
                    electronic music composition and live sound engineering.
                  </Paragraph>
                </Col>
                <Col span={4} style={{ textAlign: "right" }}>
                  <Text style={{ color: "#a9a9a9" }}>2018-2022</Text>
                </Col>
              </Row>
            </Card>
  
            <Card
              style={{
                backgroundColor: "#2c2c2c",
                borderColor: "#2d2d2d",
                borderRadius: 10,
                marginBottom: 20,
              }}
            >
              <Row>
                <Col span={20}>
                  <Title level={4} style={{ color: "#f5a623" }}>
                    First Major Collaboration
                  </Title>
                  <Text style={{ color: "#a9a9a9" }}>
                    Featured Artist with Luna Collective
                  </Text>
                  <Paragraph style={{ color: "#eaeaea" }}>
                    Collaborated on the album "Midnight Frequencies" which reached
                    #3 on indie charts. This project opened doors to the
                    underground music scene and established my signature sound.
                  </Paragraph>
                </Col>
                <Col span={4} style={{ textAlign: "right" }}>
                  <Text style={{ color: "#a9a9a9" }}>2022</Text>
                </Col>
              </Row>
            </Card>
  
            <Card
              style={{
                backgroundColor: "#2c2c2c",
                borderColor: "#2d2d2d",
                borderRadius: 10,
                marginBottom: 20,
              }}
            >
              <Row>
                <Col span={20}>
                  <Title level={4} style={{ color: "#f5a623" }}>
                    Festival Circuit Debut
                  </Title>
                  <Text style={{ color: "#a9a9a9" }}>
                    Coachella, SXSW, Electric Forest
                  </Text>
                  <Paragraph style={{ color: "#eaeaea" }}>
                    Performed at major festivals across the country, sharing
                    stages with artists I've admired for years. Each performance
                    taught me something new about connecting with audiences.
                  </Paragraph>
                </Col>
                <Col span={4} style={{ textAlign: "right" }}>
                  <Text style={{ color: "#a9a9a9" }}>2023</Text>
                </Col>
              </Row>
            </Card>
  
            <Card
              style={{
                backgroundColor: "#2c2c2c",
                borderColor: "#2d2d2d",
                borderRadius: 10,
              }}
            >
              <Row>
                <Col span={20}>
                  <Title level={4} style={{ color: "#f5a623" }}>
                    Solo EP Release
                  </Title>
                  <Text style={{ color: "#a9a9a9" }}>
                    "Echoes in the Static" - Independent Release
                  </Text>
                  <Paragraph style={{ color: "#eaeaea" }}>
                    My debut solo EP exploring themes of digital connection and
                    human emotion. Featured collaborations with local artists and
                    showcased my evolution as both producer and songwriter.
                  </Paragraph>
                </Col>
                <Col span={4} style={{ textAlign: "right" }}>
                  <Text style={{ color: "#a9a9a9" }}>2024</Text>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
  
        <Row>
          <Col span={24}>
            <Title level={3} style={{ color: "#f5a623" }}>
              What I Do
            </Title>
            <Text style={{ fontSize: 24, color: "#eaeaea" }}>🎛</Text>
          </Col>
          <Col span={8}>
            <Card
              style={{
                backgroundColor: "#2c2c2c",
                borderColor: "#2d2d2d",
                borderRadius: 10,
              }}
            >
              <AudioOutlined style={{ fontSize: 48, color: "#eaeaea" }} />
              <Title level={4} style={{ color: "#eaeaea" }}>
                Music Production
              </Title>
              <Paragraph style={{ color: "#a9a9a9", textAlign: "center" }}>
                Creating original compositions and producing tracks across
                multiple genres
              </Paragraph>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              style={{
                backgroundColor: "#2c2c2c",
                borderColor: "#2d2d2d",
                borderRadius: 10,
              }}
            >
              <CustomerServiceOutlined
                style={{ fontSize: 48, color: "#eaeaea" }}
              />
              <Title level={4} style={{ color: "#eaeaea" }}>
                Live Performance
              </Title>
              <Paragraph style={{ color: "#a9a9a9", textAlign: "center" }}>
                Engaging audiences through dynamic live shows and festival
                performances
              </Paragraph>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              style={{
                backgroundColor: "#2c2c2c",
                borderColor: "#2d2d2d",
                borderRadius: 10,
              }}
            >
              <SoundOutlined style={{ fontSize: 48, color: "#eaeaea" }} />
              <Title level={4} style={{ color: "#eaeaea" }}>
                Sound Engineering
              </Title>
              <Paragraph style={{ color: "#a9a9a9", textAlign: "center" }}>
                Mixing, mastering, and crafting the perfect sonic experience
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
    );
  };
  
  export default ContentSection;
  