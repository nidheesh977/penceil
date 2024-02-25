import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import styles from "../styles/Home.module.css";
import Header from "./header";
import styled from "styled-components";
import {mobile} from "../responsive";

function ContactUs() {
  const Input = styled.input`
    display: flex;
    width: 393px;
    height: 24px;
    border: none;
    padding: 10px 10px 10px 21px;
    margin: 13px 20px;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    color: #fff;
    font-family: Archivo;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 135%;
    text-transform: capitalize;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0px 0px 4px 0px rgba(255, 255, 255, 0.02) inset;
    ${mobile({width:"375px"})}
  `;
  const Textarea = styled.textarea`
    display: flex;
    width: 393px;
    height: 90px;
    padding: 22px 10px 10px 21px;
    align-items: flex-start;
    gap: 10px;
    border: none;
    color: #fff;
    flex-shrink: 0;
    margin: 13px 20px;
    font-size: 16px;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0px 0px 4px 0px rgba(255, 255, 255, 0.02) inset;
    resize: none;
    ${mobile({width:"375px"})}
  `;
  const Button = styled.button`
    display: flex;
    width: 425px;
    height: 50px;
    padding: 10px;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(255, 255, 255, 0);
    cursor: pointer;
    border: none;

    ${mobile({width:"375px"})}
  `;

  return (
    <>
      <section className="page_section">
        <Container>
          <h3 style={{ margin: "40px 0px" }}>CONTACT US</h3>
          <Grid className={styles.contact} container spacing={2}>
            <Grid
              className={styles.leftwrapper}
              item
              xs={12}
              sm={12}
              md={12}
              lg={5}
            >
              <form action="">
                <Input
                  className={styles.input}
                  type="text"
                  placeholder="FULL NAME"
                />
                <Input
                  className={styles.input}
                  type="number"
                  placeholder="PHONE NUMBER"
                />
                <Input
                  className={styles.input}
                  type="email"
                  placeholder="EMAIL ADDRESS"
                />
                <Textarea
                  className={styles.textarea}
                  type="text"
                  placeholder="ENTER MESSAGE"
                />
                <div className={styles.btnwrapper}>
                  <Button type="button" className={styles.submitbtn}>
                    CONTACT US
                  </Button>
                </div>
              </form>
            </Grid>
            <hr />
            <Grid
              className={styles.rightwrapper}
              item
              xs={12}
              sm={12}
              md={12}
              lg={5}
            >
              <div className={styles.right}>
                <div className={styles.logo}>
                  <svg
                    style={{
                      height: "200px",
                      width: "350px",
                    }}
                    width="112"
                    height="50"
                    viewBox="0 0 112 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Group 1">
                      <rect
                        id="Rectangle 55"
                        x="8.1004"
                        y="22.6511"
                        width="6.71141"
                        height="16.443"
                        transform="rotate(-90 8.1004 22.6511)"
                        fill="black"
                        stroke="black"
                        stroke-width="0.33557"
                      />
                      <rect
                        id="Rectangle 72"
                        x="25.2147"
                        y="0.167785"
                        width="6.71141"
                        height="22.4832"
                        fill="black"
                        stroke="black"
                        stroke-width="0.33557"
                      />
                      <rect
                        id="Rectangle 53"
                        x="94.0067"
                        y="24.9998"
                        width="6.71141"
                        height="16.7785"
                        fill="black"
                        stroke="black"
                        stroke-width="0.33557"
                      />
                      <rect
                        id="Rectangle 54"
                        x="8.1004"
                        y="6.87909"
                        width="6.71141"
                        height="16.443"
                        transform="rotate(-90 8.1004 6.87909)"
                        fill="black"
                        stroke="black"
                        stroke-width="0.33557"
                      />
                      <rect
                        id="Rectangle 61"
                        x="84.6111"
                        y="32.7181"
                        width="6.71141"
                        height="16.7785"
                        fill="black"
                        stroke="black"
                        stroke-width="0.33557"
                      />
                      <rect
                        id="Rectangle 62"
                        x="73.5369"
                        y="31.7111"
                        width="6.71141"
                        height="17.7852"
                        transform="rotate(-90 73.5369 31.7111)"
                        fill="black"
                        stroke="black"
                        stroke-width="0.33557"
                      />
                      <rect
                        id="Rectangle 63"
                        x="73.5369"
                        y="49.4968"
                        width="6.71141"
                        height="9.73154"
                        transform="rotate(-90 73.5369 49.4968)"
                        fill="black"
                        stroke="black"
                        stroke-width="0.33557"
                      />
                      <rect
                        id="Rectangle 64"
                        x="94.0067"
                        y="49.1613"
                        width="6.71141"
                        height="17.4497"
                        transform="rotate(-90 94.0067 49.1613)"
                        fill="black"
                        stroke="black"
                        stroke-width="0.33557"
                      />
                      <rect
                        id="Rectangle 65"
                        x="36.3369"
                        y="29.5184"
                        width="6.82475"
                        height="28.1605"
                        transform="rotate(-44.7979 36.3369 29.5184)"
                        fill="black"
                        stroke="black"
                        stroke-width="0.33557"
                      />
                      <rect
                        id="Rectangle 66"
                        x="17.8328"
                        y="39.4299"
                        width="5.03356"
                        height="14.094"
                        transform="rotate(-90 17.8328 39.4299)"
                        fill="black"
                        stroke="black"
                        stroke-width="0.33557"
                      />
                      <rect
                        id="Rectangle 67"
                        x="76.8924"
                        y="37.7521"
                        width="1.34228"
                        height="5.03356"
                        transform="rotate(-90 76.8924 37.7521)"
                        fill="black"
                        stroke="black"
                        stroke-width="0.33557"
                      />
                      <rect
                        id="Rectangle 70"
                        x="10.45"
                        y="24.6644"
                        width="6.71141"
                        height="24.4966"
                        fill="black"
                        stroke="black"
                        stroke-width="0.33557"
                      />
                      <rect
                        id="Rectangle 71"
                        x="74.2088"
                        y="32.7181"
                        width="2.01342"
                        height="8.72483"
                        fill="black"
                        stroke="black"
                        stroke-width="0.33557"
                      />
                      <rect
                        id="Rectangle 52"
                        x="0.718566"
                        y="0.167785"
                        width="6.71141"
                        height="48.9933"
                        fill="black"
                        stroke="black"
                        stroke-width="0.33557"
                      />
                      <rect
                        id="Rectangle 68"
                        x="17.8328"
                        y="31.3762"
                        width="6.71141"
                        height="14.094"
                        transform="rotate(-90 17.8328 31.3762)"
                        fill="black"
                        stroke="black"
                        stroke-width="0.33557"
                      />
                      <rect
                        id="Rectangle 56"
                        x="17.8328"
                        y="49.1613"
                        width="6.71141"
                        height="14.094"
                        transform="rotate(-90 17.8328 49.1613)"
                        fill="black"
                        stroke="black"
                        stroke-width="0.33557"
                      />
                      <rect
                        id="Rectangle 58"
                        x="34.9471"
                        y="24.6644"
                        width="6.04027"
                        height="24.4966"
                        fill="black"
                        stroke="black"
                        stroke-width="0.33557"
                      />
                      <rect
                        id="Rectangle 60"
                        x="66.1551"
                        y="24.9998"
                        width="6.71141"
                        height="24.4966"
                        fill="black"
                        stroke="black"
                        stroke-width="0.33557"
                      />
                      <rect
                        id="Rectangle 69"
                        x="76.8924"
                        y="34.7316"
                        width="2.01342"
                        height="5.03356"
                        transform="rotate(-90 76.8924 34.7316)"
                        fill="black"
                        stroke="black"
                        stroke-width="0.33557"
                      />
                      <rect
                        id="Rectangle 57"
                        x="76.8924"
                        y="41.4431"
                        width="2.01342"
                        height="5.03356"
                        transform="rotate(-90 76.8924 41.4431)"
                        fill="black"
                        stroke="black"
                        stroke-width="0.33557"
                      />
                      <rect
                        id="Rectangle 59"
                        x="56.4227"
                        y="24.9998"
                        width="6.71141"
                        height="24.4966"
                        fill="black"
                        stroke="black"
                        stroke-width="0.33557"
                      />
                      <rect
                        id="Rectangle 73"
                        x="41.1553"
                        y="24.4966"
                        width="0.33557"
                        height="12.0805"
                        fill="white"
                      />
                      <rect
                        id="Rectangle 74"
                        x="55.9199"
                        y="37.9199"
                        width="0.33557"
                        height="12.0805"
                        fill="white"
                      />
                    </g>
                  </svg>
                </div>
                <div className={styles.socialwrapper}>
                  <button className={styles.socialbtn}>
                    GMAIL
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="14"
                      viewBox="0 0 13 14"
                      fill="none"
                    >
                      <path
                        d="M1 0.5V2.5H9.59L0 12.09L1.41 13.5L11 3.91V12.5H13V0.5H1Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                  <button className={styles.socialbtn}>
                    LINKDIN
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="14"
                      viewBox="0 0 13 14"
                      fill="none"
                    >
                      <path
                        d="M1 0.5V2.5H9.59L0 12.09L1.41 13.5L11 3.91V12.5H13V0.5H1Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                  <button className={styles.socialbtn}>
                    CONTRA
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="14"
                      viewBox="0 0 13 14"
                      fill="none"
                    >
                      <path
                        d="M1 0.5V2.5H9.59L0 12.09L1.41 13.5L11 3.91V12.5H13V0.5H1Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                  <button className={styles.socialbtn}>
                    BEHANCE
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="14"
                      viewBox="0 0 13 14"
                      fill="none"
                    >
                      <path
                        d="M1 0.5V2.5H9.59L0 12.09L1.41 13.5L11 3.91V12.5H13V0.5H1Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid className={styles.footer}>
            <button className={styles.footerBtn}>GMAIL</button>
            <button className={styles.footerBtn}>LINKEDIN</button>
            <button className={styles.footerBtn}>CONTRA</button>
            <button className={styles.footerBtn}>BEHANCE</button>
          </Grid>
        </Container>
      </section>
    </>
  );
}

export default ContactUs;
