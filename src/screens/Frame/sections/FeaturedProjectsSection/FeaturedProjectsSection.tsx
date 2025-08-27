import {
    CalendarOutlined,
    DownloadOutlined,
    EnvironmentOutlined,
    PlayCircleOutlined,
    SoundOutlined,
    VideoCameraOutlined,
  } from "@ant-design/icons";
  import { Button, Col, Progress, Row } from "antd";
  
  export const FeaturedProjectsSection = (): JSX.Element => {
    return (
      <div className="bg-[#151515] border-r border-[#2d2d2d]">
        <Row gutter={[16, 16]} style={{ padding: "24px" }}>
          <Col span={24} style={{ textAlign: "center" }}>
            <div style={{ position: "relative", display: "inline-block" }}>
              <img
                src="https://c.animaapp.com/BleKbnjN/img/untitled-1@2x.png"
                alt="Profile"
                style={{
                  width: "96px",
                  height: "96px",
                  borderRadius: "50%",
                  boxShadow: "0px 0px 20px #f5a6234c",
                }}
              />
            </div>
            <div
              style={{
                marginTop: "16px",
                color: "#eaeaea",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              K'BRỲ
            </div>
            <p style={{ color: "#a9a9a9", fontSize: "14px" }}>
              Chuyên viên Tổ chức, dàn dựng chương trình văn hóa, nghệ thuật
            </p>
          </Col>
  
          <Col span={24}>
            <Row gutter={[8, 8]}>
              <Col span={24}>
                <EnvironmentOutlined style={{ color: "#a9a9a9" }} />
                <span style={{ marginLeft: "8px", color: "#a9a9a9" }}>
                  Ho Chi Minh City
                </span>
              </Col>
              <Col span={24}>
                <CalendarOutlined style={{ color: "#a9a9a9" }} />
                <span style={{ marginLeft: "8px", color: "#a9a9a9" }}>2002</span>
              </Col>
              <Col span={24}>
                <SoundOutlined style={{ color: "#a9a9a9" }} />
                <span style={{ marginLeft: "8px", color: "#a9a9a9" }}>
                  Electronic
                </span>
              </Col>
              <Col span={24}>
                <VideoCameraOutlined style={{ color: "#a9a9a9" }} />
                <span style={{ marginLeft: "8px", color: "#a9a9a9" }}>
                  Cinematic
                </span>
              </Col>
            </Row>
          </Col>
  
          <Col span={24}>
            <div
              style={{ color: "#eaeaea", fontSize: "14px", fontWeight: "bold" }}
            >
              Skills
            </div>
            <Row gutter={[8, 8]} style={{ marginTop: "8px" }}>
              <Col span={24}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#a9a9a9",
                    fontSize: "12px",
                  }}
                >
                  <span>Composition</span>
                  <span>95%</span>
                </div>
                <Progress
                  percent={95}
                  showInfo={false}
                  strokeColor="linear-gradient(90deg, rgba(245,166,35,1) 0%, rgba(255,200,87,1) 100%)"
                />
              </Col>
              <Col span={24}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#a9a9a9",
                    fontSize: "12px",
                  }}
                >
                  <span>Mixing</span>
                  <span>90%</span>
                </div>
                <Progress
                  percent={90}
                  showInfo={false}
                  strokeColor="linear-gradient(90deg, rgba(245,166,35,1) 0%, rgba(255,200,87,1) 100%)"
                />
              </Col>
              <Col span={24}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#a9a9a9",
                    fontSize: "12px",
                  }}
                >
                  <span>Mastering</span>
                  <span>85%</span>
                </div>
                <Progress
                  percent={85}
                  showInfo={false}
                  strokeColor="linear-gradient(90deg, rgba(245,166,35,1) 0%, rgba(255,200,87,1) 100%)"
                />
              </Col>
              <Col span={24}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#a9a9a9",
                    fontSize: "12px",
                  }}
                >
                  <span>Ableton Live</span>
                  <span>92%</span>
                </div>
                <Progress
                  percent={92}
                  showInfo={false}
                  strokeColor="linear-gradient(90deg, rgba(245,166,35,1) 0%, rgba(255,200,87,1) 100%)"
                />
              </Col>
              <Col span={24}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#a9a9a9",
                    fontSize: "12px",
                  }}
                >
                  <span>Logic Pro</span>
                  <span>88%</span>
                </div>
                <Progress
                  percent={88}
                  showInfo={false}
                  strokeColor="linear-gradient(90deg, rgba(245,166,35,1) 0%, rgba(255,200,87,1) 100%)"
                />
              </Col>
            </Row>
          </Col>
  
          <Col span={24}>
            <div
              style={{ color: "#eaeaea", fontSize: "14px", fontWeight: "bold" }}
            >
              Languages & Software
            </div>
            <Row gutter={[16, 16]} style={{ marginTop: "8px" }}>
              <Col span={8} style={{ textAlign: "center" }}>
                <div style={{ position: "relative", display: "inline-block" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      backgroundColor: "#2d2d2d",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        color: "#f5a623",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      EN
                    </span>
                  </div>
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: "#f5a623",
                      borderRadius: "50%",
                      position: "absolute",
                      bottom: "-10px",
                      right: "-10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        color: "#1e1e1e",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      85
                    </span>
                  </div>
                </div>
                <div
                  style={{ marginTop: "8px", color: "#a9a9a9", fontSize: "12px" }}
                >
                  English
                </div>
              </Col>
              <Col span={8} style={{ textAlign: "center" }}>
                <div style={{ position: "relative", display: "inline-block" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      backgroundColor: "#2d2d2d",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        color: "#f5a623",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      VN
                    </span>
                  </div>
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: "#f5a623",
                      borderRadius: "50%",
                      position: "absolute",
                      bottom: "-10px",
                      right: "-10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        color: "#1e1e1e",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      100
                    </span>
                  </div>
                </div>
                <div
                  style={{ marginTop: "8px", color: "#a9a9a9", fontSize: "12px" }}
                >
                  Vietnamese
                </div>
              </Col>
              <Col span={8} style={{ textAlign: "center" }}>
                <div style={{ position: "relative", display: "inline-block" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      backgroundColor: "#2d2d2d",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src="https://c.animaapp.com/BleKbnjN/img/i.svg"
                      alt="DAW"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </div>
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: "#f5a623",
                      borderRadius: "50%",
                      position: "absolute",
                      bottom: "-10px",
                      right: "-10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        color: "#1e1e1e",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      75
                    </span>
                  </div>
                </div>
                <div
                  style={{ marginTop: "8px", color: "#a9a9a9", fontSize: "12px" }}
                >
                  DAW
                </div>
              </Col>
            </Row>
          </Col>
  
          <Col span={24}>
            <Button
              type="primary"
              icon={<PlayCircleOutlined />}
              block
              style={{
                backgroundColor: "#f5a623",
                borderColor: "#f5a623",
                color: "#1e1e1e",
              }}
            >
              Listen to My Demos
            </Button>
            <Button
              icon={<DownloadOutlined />}
              block
              style={{
                marginTop: "16px",
                borderColor: "#2d2d2d",
                color: "#eaeaea",
              }}
            >
              Download Portfolio
            </Button>
          </Col>
  
          <Col span={24}>
            <img
              src="https://c.animaapp.com/BleKbnjN/img/div.svg"
              alt="Divider"
              style={{ width: "100%", marginTop: "16px" }}
            />
          </Col>
        </Row>
      </div>
    );
  };
  