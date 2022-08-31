import React from "react";
import styles from "../../styles/home.module.css";
import { roadmap } from "../../data";
import { useMediaQuery } from "@mui/material";
import Container from "../container/Container";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { AiOutlineMinus } from "react-icons/ai";

const Roadmap = () => {
  const { width } = useWindowDimensions();
  const is1230 = useMediaQuery("(max-width:1230px)");
  const is768 = useMediaQuery("(max-width:768px)");
  const is510 = useMediaQuery("(max-width:510px)");

  let gridColumns = "repeat(5, 1fr)";

  if (is510) {
    gridColumns = "repeat(1, 1fr)";
  } else if (is768) {
    gridColumns = "repeat(2, 1fr)";
  } else if (is1230) {
    gridColumns = "repeat(3, 1fr)";
  }

  return (
    <Container>
      <div
        className={styles.section}
        style={{
          marginTop: is768 ? 100 : -100,
        }}
      >
        <div style={{ width: 250, textAlign: "center" }}>
          <h1 className={styles.title}>Roadmap</h1>
        </div>

        <section
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: gridColumns,
            margin: "100px 0",
          }}
        >
          {width > 1023 &&
            Array.from({ length: 5 }, (_, k) => k + 1)?.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "80px",
                  paddingBottom:
                    index === 0 || index === 2 || index === 4 ? "8rem" : "0",
                  paddingTop: index === 1 || index === 3 ? "8rem" : "0",
                }}
              >
                <img
                  src={`/images/roadmap/roadmap${index + 1}.png`}
                  alt="bg"
                  height={180}
                />
                <div className={styles.itemTitle} style={{ color: "#44C4FF" }}>
                  {roadmap[index].title}
                </div>
                <div className={styles.itemContent}>
                  <div>
                    {roadmap[index]?.li1 && (
                      <span className="" style={{ display: "flex" }}>
                        <AiOutlineMinus color="#46C3FE" />{" "}
                        <div>{roadmap[index]?.li1}</div>
                      </span>
                    )}
                  </div>
                  <div>
                    {roadmap[index]?.li2 && (
                      <span className="" style={{ display: "flex" }}>
                        <AiOutlineMinus color="#46C3FE" />{" "}
                        <div>{roadmap[index]?.li2}</div>
                      </span>
                    )}
                  </div>
                  <div>
                    {roadmap[index]?.li3 && (
                      <span className="" style={{ display: "flex" }}>
                        <AiOutlineMinus color="#46C3FE" />{" "}
                        <div>{roadmap[index]?.li3}</div>
                      </span>
                    )}
                  </div>
                  <div>
                    {roadmap[index]?.li4 && (
                      <span className="" style={{ display: "flex" }}>
                        <AiOutlineMinus color="#46C3FE" />{" "}
                        <div>{roadmap[index]?.li4}</div>
                      </span>
                    )}
                  </div>
                  <div>
                    {roadmap[index]?.li5 && (
                      <span className="" style={{ display: "flex" }}>
                        <AiOutlineMinus color="#46C3FE" />{" "}
                        <div>{roadmap[index]?.li5}</div>
                      </span>
                    )}
                  </div>
                  <div>
                    {roadmap[index]?.li6 && (
                      <span className="" style={{ display: "flex" }}>
                        <AiOutlineMinus color="#46C3FE" />{" "}
                        <div>{roadmap[index]?.li6}</div>
                      </span>
                    )}
                  </div>
                  <div>
                    {roadmap[index]?.li7 && (
                      <span className="" style={{ display: "flex" }}>
                        <AiOutlineMinus color="#46C3FE" />{" "}
                        <div>{roadmap[index]?.li7}</div>
                      </span>
                    )}
                  </div>
                  <div>
                    {roadmap[index]?.li8 && (
                      <span className="" style={{ display: "flex" }}>
                        <AiOutlineMinus color="#46C3FE" />{" "}
                        <div>{roadmap[index]?.li8}</div>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}

          {width < 1024 &&
            Array.from({ length: 5 }, (_, k) => k + 1)?.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "80px",
                  paddingTop: 0,
                  paddingBottom: 0,
                }}
              >
                <img
                  src={`/images/roadmap/roadmap${index + 1}.png`}
                  alt="bg"
                  height={180}
                />
                <div className={styles.itemTitle} style={{ color: "#44C4FF" }}>
                  {roadmap[index].title}
                </div>
                <div className={styles.itemContent}>
                  <div>
                    {roadmap[index]?.li1 && (
                      <span className="" style={{ display: "flex" }}>
                        <AiOutlineMinus color="#46C3FE" />{" "}
                        <div>{roadmap[index]?.li1}</div>
                      </span>
                    )}
                  </div>
                  <div>
                    {roadmap[index]?.li2 && (
                      <span className="" style={{ display: "flex" }}>
                        <AiOutlineMinus color="#46C3FE" />{" "}
                        <div>{roadmap[index]?.li2}</div>
                      </span>
                    )}
                  </div>
                  <div>
                    {roadmap[index]?.li3 && (
                      <span className="" style={{ display: "flex" }}>
                        <AiOutlineMinus color="#46C3FE" />{" "}
                        <div>{roadmap[index]?.li3}</div>
                      </span>
                    )}
                  </div>
                  <div>
                    {roadmap[index]?.li4 && (
                      <span className="" style={{ display: "flex" }}>
                        <AiOutlineMinus color="#46C3FE" />{" "}
                        <div>{roadmap[index]?.li4}</div>
                      </span>
                    )}
                  </div>
                  <div>
                    {roadmap[index]?.li5 && (
                      <span className="" style={{ display: "flex" }}>
                        <AiOutlineMinus color="#46C3FE" />{" "}
                        <div>{roadmap[index]?.li5}</div>
                      </span>
                    )}
                  </div>
                  <div>
                    {roadmap[index]?.li6 && (
                      <span className="" style={{ display: "flex" }}>
                        <AiOutlineMinus color="#46C3FE" />{" "}
                        <div>{roadmap[index]?.li6}</div>
                      </span>
                    )}
                  </div>
                  <div>
                    {roadmap[index]?.li7 && (
                      <span className="" style={{ display: "flex" }}>
                        <AiOutlineMinus color="#46C3FE" />{" "}
                        <div>{roadmap[index]?.li7}</div>
                      </span>
                    )}
                  </div>
                  <div>
                    {roadmap[index]?.li8 && (
                      <span className="" style={{ display: "flex" }}>
                        <AiOutlineMinus color="#46C3FE" />{" "}
                        <div>{roadmap[index]?.li8}</div>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </section>
      </div>
    </Container>
  );
};

export default Roadmap;
