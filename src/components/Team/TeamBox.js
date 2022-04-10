import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import { ButtonPrimary } from "../Banner";
import { Link } from "react-router-dom";

// const MemberBoxContainer = styled.div`
//   display: flex;
//   width: 95%;
//   height: 90%;
//   align-items: center;

//   @media (max-width: 496px) {
//     flex-direction: column;
//     justify-content: center;
//   }
// `;

// const MemberBoxLeft = styled.div`
//   display: flex;
//   height: 200px;
//   flex-basis: 20%;
//   justify-content: center;
//   align-items: center;
//   background: #ffffff;
//   box-shadow: 1px 2px 4px 1px #ccccd3;
//   ${'' /* border:1px solid #cecece; */}
//   border-radius: 10px;

//   img {
//     width: 80%;
//   }

//   @media (max-width: 496px) {
//     width: 100%;
//     margin-left: 5%;
//     margin-top: 3%;
//   }
// `;

// const MemberBoxRight = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex-basis: 70%;
//   height: 90%;
//   justify-content: center;
//   margin-left: 3%;

//   @media (max-width: 496px) {
//     margin-left: 5%;
//     margin-top: 4%;
//     margin-bottom: 4%;
//   }
// `;

// const Heading = styled.h3`
//   font-size: 2rem;
//   font-weight: 600;
// `;

// const useStyles = makeStyles((theme) => ({
//   paperContainer: {
//     display: 'flex',
//     width: '100%',
//     height: 'auto',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '40px',
//   },
// }));

const MemberBox = ({ name, image, description }) => {
  // const classes = useStyles();
  return (
    <>
      {/* <Paper elevation={2} className={classes.paperContainer}>
        <MemberBoxContainer>
          <MemberBoxLeft>
            <img src={image} alt="instuctor image" />
          </MemberBoxLeft>
          <MemberBoxRight>
            <Heading> {name} </Heading>
            <p>{description}</p>
          </MemberBoxRight>
        </MemberBoxContainer>
      </Paper> */}

    <Card sx={{
              display:'flex',
              flexDirection:'column',
              justifyContent:'center',
              alignItems:'center',
              textAlign:'center',
             
              mb:'2vh'}}>


<CardHeader avatar={<Avatar sx={{width:{xs:'30vw',md:'12vw',lg:'10vw'} , height:'auto'}}     src={image}></Avatar>}></CardHeader>
<CardContent component={Typography} variant='h4' sx={{fontFamily:'inherit'}}>
            {name}
            </CardContent>

            <CardContent component={Typography} variant='body1'  sx={{fontFamily:'inherit'}} >{description}</CardContent>
            

    </Card>



    </>
  );
};

export default MemberBox;
