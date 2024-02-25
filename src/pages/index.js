import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button, { ButtonProps } from "@mui/material/Button";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { styled } from "@mui/material/styles";

const inter = Inter({ subsets: ["latin"] });

const ColorButton =
  styled(Button) <
  ButtonProps >
  (({ theme }) => ({
    color: theme.palette.getContrastText("#eeeeee"),
    backgroundColor: "#eeeeee",
    "&:hover": {
      backgroundColor: "#ffffff",
    },
  }));

export default function Home() {
  return (
    <>
      <Head>
        <title>Penceil</title>
        <meta name="description" content="Penceil" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="page_section">
        <Container>
          <Grid container spacing={2} className={styles.homeWrapper}>
            <Grid item xs={12} sm={12} md={6} lg={6} className={styles.homeLeft}>
              <div>
                <h1 className={styles.homeText}>
                  WE ELEVATE BRANDS BY CRAFTING ENGAGING DIGITAL EXPERIENCES.
                </h1>
                <p>MINAMALISTIC | FUTURE DRIVEN | SUSTAINABLE SOLUTIONS </p>
                <Link href="/contact-us" style={{ textDecoration: "none" }}>
                  <button className={styles.getInTouchBtn}>
                    GET IN TOUCH
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M1.5 0.5V2.5H10.09L0.5 12.09L1.91 13.5L11.5 3.91V12.5H13.5V0.5H1.5Z"
                        fill="black"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
              
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} className={styles.homeRight}>
              <div className={styles.rightWrap}>
                <p className={styles.homeTextTitle}>SERVICES</p>
                <h3 className={styles.homeText1}>
                  WE SHAPE THE INNOVATIVE SOLUTION
                </h3>
                <Link href="/services" style = {{textDecoration: "none"}}>
                  <button className={styles.sectionBtn}>
                    SEE SERVICES{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M1.5 0.5V2.5H10.09L0.5 12.09L1.91 13.5L11.5 3.91V12.5H13.5V0.5H1.5Z"
                        fill="black"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
              <div className={styles.rightWrap}>
                <p className={styles.homeTextTitle}>PROJECTS</p>
                <h3 className={styles.homeText1}>
                  INNOVATIVE FULL CYCLE AGENCY
                </h3>
                <Link href="/projects" style = {{textDecoration: "none"}}>
                  <button className={styles.sectionBtn}>
                    SEE PROJECTS{""}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M1.5 0.5V2.5H10.09L0.5 12.09L1.91 13.5L11.5 3.91V12.5H13.5V0.5H1.5Z"
                        fill="black"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </Grid>
              <div>
                <Grid className={styles.footer}>
                  <button className={styles.footerBtn}>GMAIL</button>
                  <button className={styles.footerBtn}>LINKEDIN</button>
                  <button className={styles.footerBtn}>CONTRA</button>
                  <button className={styles.footerBtn}>BEHANCE</button>
                </Grid>
              </div>
          </Grid>
        </Container>
      </section>
    </>
  );
}

var d
console.log(d)
d = 2;