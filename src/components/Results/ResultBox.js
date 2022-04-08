import { Card, CardContent,Box, CardHeader, Avatar} from '@mui/material';
import Typography from '@mui/material/Typography';
import { SiLinkedin } from 'react-icons/si';
import React from 'react';

// checking
const resultsData =[
    {
        Names: "Prithwjit Ghosh",
        Part: "FRM Part 1",
        LinkedIn:"Not Available",
      },
      {
        Names: "Tienis",
        Part: "FRM Part 1",
        LinkedIn:"Not Available"
      },
      {
        Names: "Arijit Ghosh",
        Part: "FRM Part 1",
        LinkedIn: "https://www.linkedin.com/in/arijit-ghosh-mba-frm-level-2-a0647488/"
      },
      {
        Names: "Partha Nandy",
        Part: "FRM Part 1",
        LinkedIn: "https://www.linkedin.com/in/partha-nandy-1bb9871b/"
      },
      {
        Names: "Aaditya Agrawal",
        Part: "FRM Part 1",
        LinkedIn: "Doubtful"
      },
      {
        Names: "Aditya Khatri",
        Part: "FRM Part 1",
        LinkedIn: "https://www.linkedin.com/in/aditya-khatri-frm-ba7031146/"
      },
      {
        Names: "Karan Vasnani",
        Part: "FRM Part 1",
        LinkedIn: "https://www.linkedin.com/in/karan-vasnani-17b495156/"
      },
      {
        Names: "Manjunath Kattimani",
        Part: "FRM Part 1",
        LinkedIn: "Not Available"
      },
      {
        Names: "Shiba Behera",
        Part: "FRM Part 1",
        LinkedIn: "Not Available"
      },
      {
        Names: "Preeti Yadav",
        Part: "FRM Part 1",
        LinkedIn: "https://www.linkedin.com/in/preeti1yadav/"
      },
      {
        Names: "Kaustubh Bhutkar",
        Part: "FRM Part 1",
        LinkedIn: "https://www.linkedin.com/in/kaustubh-bhutkar-frm-1a213b54/"
      },
      {
        Names: "Priyanka Kumari",
        Part: "FRM Part 1",
        LinkedIn: "https://www.linkedin.com/in/priyankakumari07/"
      },
      {
        Names: "Prasidesh Majumdar",
        Part: "FRM Part 1",
        LinkedIn: "https://www.linkedin.com/in/prasidesh-majumdar-014990172/"
      },
      {
        Names: "Riddhi Bhatt",
        Part: "FRM Part 1",
        LinkedIn: "https://www.linkedin.com/in/ribhatt/"
      },
      {
        Names: "Jared Atiang",
        Part: "FRM Part 1",
        Year: "May-19",
        LinkedIn: "https://www.linkedin.com/in/jared-atiang-msc-finance-bcom-accounting-cpa-frm-888a0726/"
      },
      {
        Names: "Deshna Sheth",
        Part: "FRM Part 1",
        Year: "May-19",
        LinkedIn: "Not Available"
      },
      {
        Names: "Himanshi Shah",
        Part: "FRM Part 1",
        Year: "May-19",
        LinkedIn: "Not Available"
      },
      {
        Names: "Yash Kanoi",
        Part: "FRM Part 1",
        Year: "May-19",
        LinkedIn: "Not Available"
      },
      {
        Names: "Deep Naresh Nagda",
        Part: "FRM Part 1",
        Year: "May-19",
        LinkedIn: "https://www.linkedin.com/in/deep-nagda-0b008b83/"
      },
      {
        Names: "Geetanjali Jangir",
        Part: "FRM Part 1",
        Year: "May-19",
        LinkedIn: "Not Available"
      },
      {
        Names: "Naresh Gaur",
        Part: "FRM Part 1",
        Year: "May-19",
        LinkedIn: "https://www.linkedin.com/in/nareshgaur/"
      },
      {
        Names: "Mohammad Awad",
        Part: "FRM Part 1",
        Year: "May-19",
        LinkedIn: "Not Available"
      },
      {
        Names: "Upanshu Gaharana ",
        Part: "FRM Part 1",
        Year: "Nov-19",
        LinkedIn: "https://www.linkedin.com/in/ug0607199/"
      },
      {
        Names: "Tushar Prakash",
        Part: "FRM Part 1",
        Year: "Nov-19",
        LinkedIn: "Not Available"
      },
      {
        Names: "Mahak Bagaria",
        Part: "FRM Part 1",
        Year: "Nov-19",
        LinkedIn: "https://www.linkedin.com/in/mahak-bagaria-98953416a/"
      },
      {
        Names: "Abhishek Arora",
        Part: "FRM Part 1",
        Year: "Nov-19",
        LinkedIn: "Not Available"
      },
      {
        Names: "Nikhil Nair ",
        Part: "FRM Part 1",
        Year: "Nov-19",
        LinkedIn: "https://www.linkedin.com/in/ca-nikhil-nair/"
      },
      {
        Names: "Atul Vinod",
        Part: "FRM Part 1",
        Year: "Nov-19",
        LinkedIn: "https://www.linkedin.com/in/atul-vinod-5633b261/"
      },
      {
        Names: "Saiganesh Harit",
        Part: "FRM Part 1",
        Year: "Nov-19",
        LinkedIn: "https://www.linkedin.com/in/sai-ganesh-harit-frm-b8bb0679/"
      },
      {
        Names: "Gaurav Gupta",
        Part: "FRM Part 1",
        Year: "Nov-19",
        LinkedIn: "https://www.linkedin.com/in/gauravgupta2015/"
      },
      {
        Names: "Aneesh Srivastava",
        Part: "FRM Part 1",
        Year: "Nov-19",
        LinkedIn: "https://www.linkedin.com/in/aneesh-srivastava-mba-cfa-frm-cqf-0a34196/"
      },
      {
        Names: "Siddhesh Nayak",
        Part: "FRM Part 1",
        Year: "Nov-19",
        LinkedIn: "https://www.linkedin.com/in/siddhesh-nayak-785316161/"
      },
      {
        Names: "Acchintya S Talwarr",
        Part: "FRM Part 1",
        Year: "Nov-19",
        LinkedIn: "https://www.linkedin.com/in/acchintyastalwarr/"
      },
      {
        Names: "Swaroop Hareesh",
        Part: "FRM Part 1",
        Year: "Nov-20",
        LinkedIn: "https://www.linkedin.com/in/swaroop-hareesh-frm-both-levels-cleared-aci-cmp%C2%AE-mba-31a8134b/"
      },
      {
        Names: "Ashima Arora",
        Part: "FRM Part 1",
        Year: "Nov-20",
        LinkedIn: "https://www.linkedin.com/in/ashima-arora-3622b230/"
      },
      {
        Names: "Vikram Soman",
        Part: "FRM Part 1",
        Year: null,
        LinkedIn: "Not Available"
      },
      {
        Names: "Radha Agarwal",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "https://www.linkedin.com/in/radha-agarwal-43b148177/"
      },
      {
        Names: "Chaya Jayashankar",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "https://www.linkedin.com/in/chaya-jayasankar-805369155/"
      },
      {
        Names: "Monalisa Prasad",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "https://www.linkedin.com/in/monalisa-prasad-she-her-hers-974a7a50/"
      },
      {
        Names: "Lavnya Ajmera",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "https://www.linkedin.com/in/lavnya-ajmera-4b2a4a207/"
      },
      {
        Names: "Ravikanth Kumar",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "Not Available"
      },
      {
        Names: "Bhavin Kamdar",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "https://www.linkedin.com/in/bhavin-kamdar-1a7ba3126/"
      },
      {
        Names: "Lakshay Jain",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "https://www.linkedin.com/in/lakshay-jain-558383170/"
      },
      {
        Names: "Karnika Negi",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "https://www.linkedin.com/in/karnika-negi-6a4486b8/"
      },
      {
        Names: "Gulshan Kerwani",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "https://www.linkedin.com/in/gulshan-kerwani-765570163/"
      },
      {
        Names: "Saswata Chowdhury",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "https://www.linkedin.com/in/saswata-chowdhury-frm-293844207/"
      },
      {
        Names: "Sanjeev Kumar",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "https://www.linkedin.com/in/sanjeev-kumar-frm-a3530b1a/"
      },
      {
        Names: "Aditya Gadiya",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "Not Available"
      },
      {
        Names: "Paras Chhabra",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "https://www.linkedin.com/in/chhabraparas23/"
      },
      {
        Names: "Bany Garikimukkula",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "Not Available"
      },
      {
        Names: "Dhruv Anand",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "https://www.linkedin.com/in/dhruv-anand-a48a32120/"
      },
      {
        Names: "Jaya Chattarjee",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "Not Available"
      },
      {
        Names: "Gaurav Dabas",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "https://www.linkedin.com/in/gaurav-dabas1994/"
      },
      {
        Names: "Vish Iyer",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "https://www.linkedin.com/in/vishiyer01/"
      },
      {
        Names: "Hardik Sawhney",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "https://www.linkedin.com/in/hardik-sawhney-109984126/"
      },
      {
        Names: "Harshvardhan Karwa",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "https://www.linkedin.com/in/harshkarwa/"
      },
      {
        Names: "Shubham Mittal",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "https://www.linkedin.com/in/shubham-mittal-987537172/"
      },
      {
        Names: "Subhadev Pal",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "https://www.linkedin.com/in/subhadev-pal-ab8a2312b/"
      },
      {
        Names: "Suneel Chinthalapudi",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "https://www.linkedin.com/in/suneel-chinthalapudi-07753b191/"
      },
      {
        Names: "Srinivas Thurumella",
        Part: "FRM Part 1",
        Year: "May-21",
        LinkedIn: "https://www.linkedin.com/in/srinivas-thurumella-7579399/"
      },
      {
        Names: "Antonio Bertoli",
        Part: "FRM Part 1",
        Year: "Jul-21",
        LinkedIn: "https://www.linkedin.com/in/antonio-bertoli-a6203735/"
      },
      {
        Names: "Manasvi Maheshwari",
        Part: "FRM Part 1",
        Year: "Sep-21",
        LinkedIn: "https://www.linkedin.com/in/manasvi-maheshwari-9b2674188/"
      },
      {
        Names: "Sripriya Iyer",
        Part: "FRM Part 1",
        Year: "Sep-21",
        LinkedIn: "Not Available"
      },
      {
        Names: "Sudarshan Gupta",
        Part: "FRM Part 1",
        Year: "Sep-21",
        LinkedIn: "https://www.linkedin.com/in/sudarshan706/"
      },
      {
        Names: "Karanjit Rai",
        Part: "FRM Part 1",
        Year: "Sep-21",
        LinkedIn: "Not Available"
      },
      {
        Names: "Karan Rahat Singh Manchanda",
        Part: "FRM Part 1",
        Year: "Sep-21",
        LinkedIn: "https://www.linkedin.com/in/karan-rahat-singh-manchanda-b841a984/"
      },
      {
        Names: "Sridhar G Pai",
        Part: "FRM Part 1",
        Year: "Sep-21",
        LinkedIn: "Not Available"
      },
      {
        Names: "Nitin Pandey",
        Part: "FRM Part 1",
        Year: "Sep-21",
        LinkedIn: "https://www.linkedin.com/in/nitin-pandey-a8021b208/"
      },
      {
        Names: "Nitin Vaid",
        Part: "FRM Part 1",
        Year: "Sep-21",
        LinkedIn: "Not Available"
      },
      {
        Names: "Ramesh Kumar Vadlamani",
        Part: "FRM Part 1",
        Year: "Sep-21",
        LinkedIn: "https://www.linkedin.com/in/ramesh-kumar-vadlamani-1085727/"
      },
      {
        Names: "Tanvi Raghuwanshi",
        Part: "FRM Part 1",
        Year: "Sep-21",
        LinkedIn: "Not Available"
      },
      {
        Names: "Tara Sherigar",
        Part: "FRM Part 1",
        Year: "Sep-21",
        LinkedIn: "https://www.linkedin.com/in/tara-sherigar-frm-ca-1860a028/"
      },
      {
        Names: "Sandesh Singh",
        Part: "FRM Part 1",
        Year: "Sep-21",
        LinkedIn: "https://www.linkedin.com/in/sandeshsinghfrm/"
      },
      {
        Names: "Aniket Chakraborty",
        Part: "FRM Part 1",
        Year: "Sep-21",
        LinkedIn: "https://www.linkedin.com/in/aniket-chakraborty-62220520a/"
      },
      {
        Names: "Aman Khetarpal",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/aman-khetarpal-373288137/"
      },
      {
        Names: "Kanika Sikka",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/kanika-sikka-chandok-00584a17/"
      },
      {
        Names: "Gouri Milind Sinhasane",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/gouri-sinhasane-442a931b8/"
      },
      {
        Names: "Rakshit Reddy",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/rakshith-reddy-b53285222/"
      },
      {
        Names: "Sachin Mohapatra",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/sachin-mohapatra/"
      },
      {
        Names: "Kush Maheshwari",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/kush-maheshwari/"
      },
      {
        Names: "Lubna Khan",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/lubna-khan-pathan-a43818152/"
      },
      {
        Names: "Divya Bhatia",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/divya-bhatia-26b8b513b/"
      },
      {
        Names: "Palak Hasija",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/palak-hasija-94727116b/"
      },
      {
        Names: "Santosh Kumar ",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/santosh-kumar-frm-4724b0146/"
      },
      {
        Names: "Soumyajit Saha",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/soumyajit-saha-3a1761a2/"
      },
      {
        Names: "Vinod Kumar Sharma",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/vinod-kumar-sharma-0a515139/"
      },
      {
        Names: "Harsh Bafna",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "Not Available"
      },
      {
        Names: "Kritika Narayan",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/kritika-narayan-b9b525a0/"
      },
      {
        Names: "Avishek Srivastava ",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "Not Available"
      },
      {
        Names: "Palak Jain",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/palak-jain-08b0a518a/"
      },
      {
        Names: "Saumya Tripathi",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/saumya-tripathi-14a29026/"
      },
      {
        Names: "Kishore Saokar",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/kishore-saokar/"
      },
      {
        Names: "Raam Anandhan",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/raam-anandhan-ramanathan-3b9015b3/"
      },
      {
        Names: "Jishnu Damodaran",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/jishnu-damodaran-47a8711b7/"
      },
      {
        Names: "A K M Fazlul Haque",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/a-k-m-fazlul-haque-57693230/"
      },
      {
        Names: "Akhil S Harid ",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/akhil-harid-arm/"
      },
      {
        Names: "Himanshi Dalwani",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "Not Available"
      },
      {
        Names: "Marcel Ochsner",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/marcel-ochsner-520196220/"
      },
      {
        Names: "Jaykumar Parmar",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/jaykumarparmar/"
      },
      {
        Names: "Faizan Kousar",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/faizan-kousar1999/"
      },
      {
        Names: "Sanyam Aggarwal",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/sanyam-aggarwal-cfa-frm-55660b29/"
      }
];
export default function ResultBox() {
  return (
    <>
    {resultsData.map((element) =>(
        <Box key={element.Names} 
        sx={{
            display:'flex',
            flexDirection:{xs:'column',md:'row',lg:'row'},
            alignContent:'center',
            alignItems:'flex-start',
            justifyContent:'center',
            minWidth:{xs:'100%',md:'30%'},
            mr:{xs:'0',md:'0.5vw',lg:'1vw'}
            }} 
            >
        <Card  
        sx={{
            //  border:0.5,
            //  rounded:5,
              display:'flex',
              flexDirection:'column',
              justifyContent:'center',
              alignItems:'center',
              textAlign:'center',
              minWidth:{xs:'100%',md:'75%'},
              mb:'5vh',
            
        }} 
        
        >
        <CardHeader 
            avatar={<Avatar sx={{width:'7vw' , height:'auto'}}></Avatar>}>
       </CardHeader>
        <CardContent component={Typography} variant='h5' textAlign='center'>
            {element.Names}
        </CardContent>
        <CardContent>

            <Box sx={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                }}>
                <Typography variant="subtitle2" gutterBottom sx={{}}>
                    {element.Part}
                </Typography>
                <a href={element.LinkedIn}>
                <SiLinkedin size={20}/>
                </a>
            </Box>
            
         </CardContent>
     </Card>
     </Box>
    ))}
    </>
  )
}
