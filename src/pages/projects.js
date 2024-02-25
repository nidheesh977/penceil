import React from "react";
import Grid from "@mui/material/Grid";
import Head from "next/head";
import Container from "@mui/material/Container";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./header";
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function Projects() {

  const [open, setOpen] = React.useState(false);
  const [activeImg, setActiveImg] = React.useState("/image/CARIFY.png");
  const [activeImgTitle, setActiveImgTitle] = React.useState("Carify");

  const handleClickOpen = (imgUrl, imageTitle) => () => {
    setOpen(true);
    setActiveImg(imgUrl)
    setActiveImgTitle(imageTitle)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null); 

  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Penceil" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="page_section">
        <Container>
          <Grid className={styles.projectss}>
            <h3>PROJECTS</h3>
            {/* <Grid className={styles.projectBtns}>
              <button className={styles.projectBtn}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <path
                    d="M9.29289 17.4853L10.7071 16.0711L4.63306 9.99702H18.1954V8.00298H4.63306L10.7071 1.92893L9.29289 0.514715L0.807613 9L9.29289 17.4853Z"
                    fill="white"
                  />
                </svg>
              </button>
              <button className={styles.projectBtn}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <path
                    d="M9.70711 0.514724L8.29289 1.92894L14.3669 8.00298H0.804633V9.99702H14.3669L8.29289 16.0711L9.70711 17.4853L18.1924 9L9.70711 0.514724Z"
                    fill="white"
                  />
                </svg>
              </button>
            </Grid> */}
            <Grid className={styles.projects} container spacing={2}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <div className="dummy_img">
                 <img src = "/image/CARIFY.png" onClick={handleClickOpen('/image/CARIFY.png', "Carify")} className={styles.projectImage} />
                </div>
                <h3>Carify</h3>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <div className="dummy_img">
                <img src = "/image/ELECTRA.png" onClick={handleClickOpen('/image/ELECTRA.png', "Electra")} className={styles.projectImage} />
                </div>
                <h3>Electra</h3>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <div className="dummy_img">
                  <img src = "/image/fashion.png" onClick={handleClickOpen('/image/fashion.png', "Fashion")} className={styles.projectImage} />
                </div>
                <h3>Fashion</h3>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <div className="dummy_img">
                <img src = "/image/fitness_website.png" onClick={handleClickOpen('/image/fitness_website.png', "Fitness Website")} className={styles.projectImage} />
                </div>
                <h3>Fitness Website</h3>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <div className="dummy_img">
                <img src = "/image/food_delivery.png" onClick={handleClickOpen('/image/food_delivery.png', "Food Delivery")} className={styles.projectImage} />
                </div>
                <h3>Food Delivery</h3>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <div className="dummy_img">
                  <img src = "/image/housy.jpg" onClick={handleClickOpen('/image/housy.jpg', "Housy")} className={styles.projectImage} />
                </div>
                <h3>Housy</h3>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <div className="dummy_img">
                  <img src = "/image/MANSHAFT.png" onClick={handleClickOpen('/image/MANSHAFT.png', "Manshaft")} className={styles.projectImage} />
                </div>
                <h3>Manshaft</h3>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <div className="dummy_img">
                  <img src = "/image/pharmacy.png" onClick={handleClickOpen('/image/pharmacy.png', "Pharmacy")} className={styles.projectImage} />
                </div>
                <h3>Pharmacy</h3>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <div className="dummy_img">
                  <img src = "/image/pos.png" onClick={handleClickOpen('/image/pos.png', "POS")} className={styles.projectImage} />
                </div>
                <h3>POS</h3>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <div className="dummy_img">
                  <img src = "/image/staycurious.png" onClick={handleClickOpen('/image/staycurious.png', "Staycurious")} className={styles.projectImage} />
                </div>
                <h3>Staycurious</h3>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={styles.footer} style = {{marginTop: "20px"}}>
            <button className={styles.footerBtn}>GMAIL</button>
            <button className={styles.footerBtn}>LINKEDIN</button>
            <button className={styles.footerBtn}>CONTRA</button>
            <button className={styles.footerBtn}>BEHANCE</button>
          </Grid>
          <Dialog
            open={open}
            onClose={handleClose}
            scroll={"body"}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
            maxWidth = "lg"
          >
            <DialogTitle id="scroll-dialog-title">{activeImgTitle}</DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent dividers={false}>
              <DialogContentText
                id="scroll-dialog-description"
                ref={descriptionElementRef}
                tabIndex={-1}
              >
                <img src = {activeImg} className={styles.projectImageDialog} />
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} variant="text" sx = {{color: "black"}}>Close</Button>
            </DialogActions>
          </Dialog>
        </Container>
      </section>
    </>
  );
}

export default Projects;
