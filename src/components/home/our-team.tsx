import React from "react";
import styles from "../../styles/home.module.css";
import styles2 from "../../styles/card-flip.module.css";
import bg from "../../assets/home/team-bg.png";
import { team } from "../../data";
import { useMediaQuery } from "@mui/material";

const OurTeam = () => {
  const is768 = useMediaQuery("(max-width:768px)");
  const is425 = useMediaQuery("(max-width:425px)");

  return (
    <div style={{ paddingTop: "64px" }}>
      <div
        className={styles.section}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "700px",
          position: "relative",
          // paddingTop: "424px",
        }}
      >
        <div
          style={{
            width: 250,
            textAlign: "center",
            position: "absolute",
            top: "8%",
          }}
        >
          <h1 className={styles.title}>Our Team</h1>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: is768 ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
            gap: is425 ? "10px" : "20px",
            margin: "46px 0",
            padding: is425 ? "0 5px" : "0 46px",
            position: "absolute",
            top: "22%",
          }}
        >
          {Array.from({ length: 4 }, (_, k) => k + 1)?.map((i) => (
            <Card key={i} id={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({ id }: any) => {
  const is1440 = useMediaQuery("(max-width:1440px)");

  return (
    <div className={styles2.card}>
      <div className={styles2.content}>
        {/* Front */}
        <div className={styles2.front}>
          <div
            style={{ height: "75%", marginBottom: is1440 ? "10px" : "20px" }}
          >
            <img
              src={`/images/person/person${id}.png`}
              alt={`person${id}`}
              width="100%"
              height="100%"
              style={{
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                maxHeight: "250px",
                maxWidth: "250px",
              }}
            />
          </div>
          <div style={{ height: "20%", padding: "0 10px" }}>
            <h3 className={styles2.name}>{team[id - 1].name}</h3>
            <p className={styles2.designation}>{team[id - 1].designation}</p>
          </div>
        </div>

        {/* Back */}
        <div className={styles2.back}>
          <div
            style={{
              height: is1440 ? "68%" : "71%",
              padding: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <p className={styles2.details}>{team[id - 1].details}</p>
          </div>
          <hr
            style={{
              margin: 0,
              marginBottom: "3%",
              height: "1%",
              background: "#fff",
            }}
          />
          <div style={{ height: "20%", padding: "0 10px" }}>
            <h3 className={styles2.name}>{team[id - 1].name}</h3>
            <p className={styles2.designation}>{team[id - 1].designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
