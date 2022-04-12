import { Card, CardContent,Box, CardHeader, Avatar} from '@mui/material';
import Typography from '@mui/material/Typography';
import { SiLinkedin } from 'react-icons/si';
import React from 'react';

// checking
const resultsData =[
    {
        image:'',
        Names: "Prithwjit Ghosh",
        Part: "FRM Part 1",
        LinkedIn:null,
      },
      {
        image:'',
        Names: "Tienis",
        Part: "FRM Part 1",
        LinkedIn:null,
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451587/midhaFinResults/Arijit_Ghosh_zm6uqd.jpg',
        Names: "Arijit Ghosh",
        Part: "FRM Part 1",
        LinkedIn: "https://www.linkedin.com/in/arijit-ghosh-mba-frm-level-2-a0647488/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451597/midhaFinResults/Partha_Nandy_tkzyaw.jpg',
        Names: "Partha Nandy",
        Part: "FRM Part 1",
        LinkedIn: "https://www.linkedin.com/in/partha-nandy-1bb9871b/"
      },
      {
        image:'',
        Names: "Aaditya Agrawal",
        Part: "FRM Part 1",
        LinkedIn: null,
      },
      {
        image:'',
        Names: "Aditya Khatri",
        Part: "FRM Part 1",
        LinkedIn: "https://www.linkedin.com/in/aditya-khatri-frm-ba7031146/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451592/midhaFinResults/Karan_Vasnani_mpnvk4.jpg',
        Names: "Karan Vasnani",
        Part: "FRM Part 1",
        LinkedIn: "https://www.linkedin.com/in/karan-vasnani-17b495156/"
      },
      {
        image:'',
        Names: "Manjunath Kattimani",
        Part: "FRM Part 1",
        LinkedIn: null,
      },
      {
        image:'',
        Names: "Shiba Behera",
        Part: "FRM Part 1",
        LinkedIn: null,
      },
      {
        image:'',
        Names: "Preeti Yadav",
        Part: "FRM Part 1",
        LinkedIn: "https://www.linkedin.com/in/preeti1yadav/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451592/midhaFinResults/Kaustubh_Bhutkar_gmtc6w.jpg',
        Names: "Kaustubh Bhutkar",
        Part: "FRM Part 1",
        LinkedIn: "https://www.linkedin.com/in/kaustubh-bhutkar-frm-1a213b54/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451597/midhaFinResults/Priyanka_Kumari_pikmmi.jpg',
        Names: "Priyanka Kumari",
        Part: "FRM Part 1",
        LinkedIn: "https://www.linkedin.com/in/priyankakumari07/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451597/midhaFinResults/Prasidesh_Majumdar_uz70fn.jpg',
        Names: "Prasidesh Majumdar",
        Part: "FRM Part 1",
        LinkedIn: "https://www.linkedin.com/in/prasidesh-majumdar-014990172/"
      },
      {
        image:'',
        Names: "Riddhi Bhatt",
        Part: "FRM Part 1",
        LinkedIn: "https://www.linkedin.com/in/ribhatt/"
      },
      {
        image:'',
        Names: "Jared Atiang",
        Part: "FRM Part 1",
        Year: "May-19",
        LinkedIn: "https://www.linkedin.com/in/jared-atiang-msc-finance-bcom-accounting-cpa-frm-888a0726/"
      },
      {
        image:'',
        Names: "Deshna Sheth",
        Part: "FRM Part 1",
        Year: "May-19",
        LinkedIn: null,
      },
      {
        image:'',
        Names: "Himanshi Shah",
        Part: "FRM Part 1",
        Year: "May-19",
        LinkedIn: null,
      },
      {
        image:'',
        Names: "Yash Kanoi",
        Part: "FRM Part 1",
        Year: "May-19",
        LinkedIn: null,
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451588/midhaFinResults/Deep_Nagda_ffc75g.jpg',
        Names: "Deep Naresh Nagda",
        Part: "FRM Part 1",
        Year: "May-19",
        LinkedIn: "https://www.linkedin.com/in/deep-nagda-0b008b83/"
      },
      {
        image:'',
        Names: "Geetanjali Jangir",
        Part: "FRM Part 1",
        Year: "May-19",
        LinkedIn: null,
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649311321/MidhaFinTestimonials/Naresh_Gaur_whf6zr.jpg',
        Names: "Naresh Gaur",
        Part: "FRM Part 1",
        Year: "May-19",
        LinkedIn: "https://www.linkedin.com/in/nareshgaur/"
      },
      {
        image:'',
        Names: "Mohammad Awad",
        Part: "FRM Part 1",
        Year: "May-19",
        LinkedIn: null,
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451602/midhaFinResults/Upanshu_Gaharana_ojufce.jpg',
        Names: "Upanshu Gaharana ",
        Part: "FRM Part 1",
        Year: "Nov-19",
        LinkedIn: "https://www.linkedin.com/in/ug0607199/"
      },
      {
        image:'',
        Names: "Tushar Prakash",
        Part: "FRM Part 1",
        Year: "Nov-19",
        LinkedIn: null,
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451594/midhaFinResults/Mahak_Bagaria_hdar0s.jpg',
        Names: "Mahak Bagaria",
        Part: "FRM Part 1",
        Year: "Nov-19",
        LinkedIn: "https://www.linkedin.com/in/mahak-bagaria-98953416a/"
      },
      {
        image:'',
        Names: "Abhishek Arora",
        Part: "FRM Part 1",
        Year: "Nov-19",
        LinkedIn: null,
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451595/midhaFinResults/Nikhil_Nair_yap04c.jpg',
        Names: "Nikhil Nair ",
        Part: "FRM Part 1",
        Year: "Nov-19",
        LinkedIn: "https://www.linkedin.com/in/ca-nikhil-nair/"
      },
      {
        image:'',
        Names: "Atul Vinod",
        Part: "FRM Part 1",
        Year: "Nov-19",
        LinkedIn: "https://www.linkedin.com/in/atul-vinod-5633b261/"
      },
      {
        image:'',
        Names: "Saiganesh Harit",
        Part: "FRM Part 1",
        Year: "Nov-19",
        LinkedIn: "https://www.linkedin.com/in/sai-ganesh-harit-frm-b8bb0679/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451589/midhaFinResults/Gaurav_Gupta_cwroah.jpg',
        Names: "Gaurav Gupta",
        Part: "FRM Part 1",
        Year: "Nov-19",
        LinkedIn: "https://www.linkedin.com/in/gauravgupta2015/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451586/midhaFinResults/Aneesh_Srivastava_uniqmu.jpg',
        Names: "Aneesh Srivastava",
        Part: "FRM Part 1",
        Year: "Nov-19",
        LinkedIn: "https://www.linkedin.com/in/aneesh-srivastava-mba-cfa-frm-cqf-0a34196/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451600/midhaFinResults/Siddhesh_Nayak_nyy3ls.jpg',
        Names: "Siddhesh Nayak",
        Part: "FRM Part 1",
        Year: "Nov-19",
        LinkedIn: "https://www.linkedin.com/in/siddhesh-nayak-785316161/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451586/midhaFinResults/Acchintya_Talwarr_jfpawj.jpg',
        Names: "Acchintya S Talwarr",
        Part: "FRM Part 1",
        Year: "Nov-19",
        LinkedIn: "https://www.linkedin.com/in/acchintyastalwarr/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451601/midhaFinResults/Swaroop_Hareesh_gfbxnr.jpg',
        Names: "Swaroop Hareesh",
        Part: "FRM Part 1",
        Year: "Nov-20",
        LinkedIn: "https://www.linkedin.com/in/swaroop-hareesh-frm-both-levels-cleared-aci-cmp%C2%AE-mba-31a8134b/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451587/midhaFinResults/Ashima_Arora_ymhjko.jpg',
        Names: "Ashima Arora",
        Part: "FRM Part 1",
        Year: "Nov-20",
        LinkedIn: "https://www.linkedin.com/in/ashima-arora-3622b230/"
      },
      {
        image:'',
        Names: "Vikram Soman",
        Part: "FRM Part 1",
        Year: null,
        LinkedIn:null,
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451598/midhaFinResults/Radha_Agarwal_exhq7t.jpg',
        Names: "Radha Agarwal",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "https://www.linkedin.com/in/radha-agarwal-43b148177/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451588/midhaFinResults/Chaya_Jayasankar_ivecei.jpg',
        Names: "Chaya Jayashankar",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "https://www.linkedin.com/in/chaya-jayasankar-805369155/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451595/midhaFinResults/Monalisa_Prasad_hebd2v.jpg',
        Names: "Monalisa Prasad",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "https://www.linkedin.com/in/monalisa-prasad-she-her-hers-974a7a50/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451593/midhaFinResults/Lavnya_Ajmera_b8ju3r.jpg',
        Names: "Lavnya Ajmera",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "https://www.linkedin.com/in/lavnya-ajmera-4b2a4a207/"
      },
      {
        image:'',
        Names: "Ravikanth Kumar",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: null,
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451588/midhaFinResults/Bhavin_Kamdar_uarywb.jpg',
        Names: "Bhavin Kamdar",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "https://www.linkedin.com/in/bhavin-kamdar-1a7ba3126/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451593/midhaFinResults/Lakshay_Jain_lphzrh.jpg',
        Names: "Lakshay Jain",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "https://www.linkedin.com/in/lakshay-jain-558383170/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451592/midhaFinResults/Karnika_Negi_ebt9xj.jpg',
        Names: "Karnika Negi",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "https://www.linkedin.com/in/karnika-negi-6a4486b8/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451590/midhaFinResults/Gulshan_Kerwani_j4m10b.jpg',
        Names: "Gulshan Kerwani",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "https://www.linkedin.com/in/gulshan-kerwani-765570163/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451599/midhaFinResults/Saswata_Chowdhury_jhncng.jpg',
        Names: "Saswata Chowdhury",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "https://www.linkedin.com/in/saswata-chowdhury-frm-293844207/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451599/midhaFinResults/Sanjeev_Kumar_mjqwbp.jpg',
        Names: "Sanjeev Kumar",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "https://www.linkedin.com/in/sanjeev-kumar-frm-a3530b1a/"
      },
      {
        image:'',
        Names: "Aditya Gadiya",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: null,
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451596/midhaFinResults/Paras_Chhabra_hcprwg.jpg',
        Names: "Paras Chhabra",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "https://www.linkedin.com/in/chhabraparas23/"
      },
      {
        image:'',
        Names: "Bany Garikimukkula",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: null,
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451588/midhaFinResults/Dhruv_Anand_syqoly.jpg',
        Names: "Dhruv Anand",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "https://www.linkedin.com/in/dhruv-anand-a48a32120/"
      },
      {
        image:'',
        Names: "Jaya Chattarjee",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: null,
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451589/midhaFinResults/Gaurav_Dabas_jhar5e.jpg',
        Names: "Gaurav Dabas",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "https://www.linkedin.com/in/gaurav-dabas1994/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451602/midhaFinResults/Vish_Iyer_qaihac.jpg',
        Names: "Vish Iyer",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "https://www.linkedin.com/in/vishiyer01/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451590/midhaFinResults/Hardik_Sawhney_smg4c4.jpg',
        Names: "Hardik Sawhney",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "https://www.linkedin.com/in/hardik-sawhney-109984126/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451590/midhaFinResults/Harshvardhan_Karwa_neg0ig.jpg',
        Names: "Harshvardhan Karwa",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "https://www.linkedin.com/in/harshkarwa/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451600/midhaFinResults/Shubham_Mittal_cgbjir.jpg',
        Names: "Shubham Mittal",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "https://www.linkedin.com/in/shubham-mittal-987537172/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451601/midhaFinResults/Subhadev_Pal_t5xzsz.jpg',
        Names: "Subhadev Pal",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "https://www.linkedin.com/in/subhadev-pal-ab8a2312b/"
      },
      {
        image:'',
        Names: "Suneel Chinthalapudi",
        Part: "FRM Part 1",
        Year: "Jan-21",
        LinkedIn: "https://www.linkedin.com/in/suneel-chinthalapudi-07753b191/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451601/midhaFinResults/Srinivas_Thurumella_caujsh.jpg',
        Names: "Srinivas Thurumella",
        Part: "FRM Part 1",
        Year: "May-21",
        LinkedIn: "https://www.linkedin.com/in/srinivas-thurumella-7579399/"
      },
      {
        image:'',
        Names: "Antonio Bertoli",
        Part: "FRM Part 1",
        Year: "Jul-21",
        LinkedIn: "https://www.linkedin.com/in/antonio-bertoli-a6203735/"
      },
      {
        image:'',
        Names: "Manasvi Maheshwari",
        Part: "FRM Part 1",
        Year: "Sep-21",
        LinkedIn: "https://www.linkedin.com/in/manasvi-maheshwari-9b2674188/"
      },
      {
        image:'',
        Names: "Sripriya Iyer",
        Part: "FRM Part 1",
        Year: "Sep-21",
        LinkedIn: null,
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451601/midhaFinResults/Sudarshan_Gupta_jfsypg.jpg',
        Names: "Sudarshan Gupta",
        Part: "FRM Part 1",
        Year: "Sep-21",
        LinkedIn: "https://www.linkedin.com/in/sudarshan706/"
      },
      {
        image:'',
        Names: "Karanjit Rai",
        Part: "FRM Part 1",
        Year: "Sep-21",
        LinkedIn: null,
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451591/midhaFinResults/Karan_Rahat_Singh_Manchanda_aycgug.jpg',
        Names: "Karan Rahat Singh Manchanda",
        Part: "FRM Part 1",
        Year: "Sep-21",
        LinkedIn: "https://www.linkedin.com/in/karan-rahat-singh-manchanda-b841a984/"
      },
      {
        image:'',
        Names: "Sridhar G Pai",
        Part: "FRM Part 1",
        Year: "Sep-21",
        LinkedIn: null,
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451595/midhaFinResults/Nitin_Pandey_jjoofv.jpg',
        Names: "Nitin Pandey",
        Part: "FRM Part 1",
        Year: "Sep-21",
        LinkedIn: "https://www.linkedin.com/in/nitin-pandey-a8021b208/"
      },
      {
        image:'',
        Names: "Nitin Vaid",
        Part: "FRM Part 1",
        Year: "Sep-21",
        LinkedIn: null,
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649311319/MidhaFinTestimonials/Ramesh_Kumar_Vadlamani_fex9bg.jpg',
        Names: "Ramesh Kumar Vadlamani",
        Part: "FRM Part 1",
        Year: "Sep-21",
        LinkedIn: "https://www.linkedin.com/in/ramesh-kumar-vadlamani-1085727/"
      },
      {
        image:'',
        Names: "Tanvi Raghuwanshi",
        Part: "FRM Part 1",
        Year: "Sep-21",
        LinkedIn: null,
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451601/midhaFinResults/Tara_Sherigar_rfebyg.jpg',
        Names: "Tara Sherigar",
        Part: "FRM Part 1",
        Year: "Sep-21",
        LinkedIn: "https://www.linkedin.com/in/tara-sherigar-frm-ca-1860a028/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451599/midhaFinResults/Sandesh_Singh_cllopt.jpg',
        Names: "Sandesh Singh",
        Part: "FRM Part 1",
        Year: "Sep-21",
        LinkedIn: "https://www.linkedin.com/in/sandeshsinghfrm/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451586/midhaFinResults/Aniket_Chakraborty_qw9wku.jpg',
        Names: "Aniket Chakraborty",
        Part: "FRM Part 1",
        Year: "Sep-21",
        LinkedIn: "https://www.linkedin.com/in/aniket-chakraborty-62220520a/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451586/midhaFinResults/Aman_Khetarpal_bv84sb.jpg',
        Names: "Aman Khetarpal",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/aman-khetarpal-373288137/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451591/midhaFinResults/Kanika_Sikka_rqxa4g.jpg',
        Names: "Kanika Sikka",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/kanika-sikka-chandok-00584a17/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649311322/MidhaFinTestimonials/Gouri_Milind_Sinhasane_luqran.jpg',
        Names: "Gouri Milind Sinhasane",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/gouri-sinhasane-442a931b8/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451598/midhaFinResults/Rakshith_Reddy_h8egfg.jpg',
        Names: "Rakshit Reddy",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/rakshith-reddy-b53285222/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451598/midhaFinResults/Sachin_Mohapatra_qhyvp2.jpg',
        Names: "Sachin Mohapatra",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/sachin-mohapatra/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451599/midhaFinResults/Kush_Maheshwari_udbdin.jpg',
        Names: "Kush Maheshwari",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/kush-maheshwari/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451594/midhaFinResults/Lubna_Khan_Pathan_fmmojh.jpg',
        Names: "Lubna Khan",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/lubna-khan-pathan-a43818152/"
      },
      {
        image:'',
        Names: "Divya Bhatia",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/divya-bhatia-26b8b513b/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451596/midhaFinResults/Palak_Hasija_ojfvyp.jpg',
        Names: "Palak Hasija",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/palak-hasija-94727116b/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451601/midhaFinResults/Santosh_Kumar_mpbnba.jpg',
        Names: "Santosh Kumar ",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/santosh-kumar-frm-4724b0146/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451601/midhaFinResults/Soumyajit_Saha_ihwsa7.jpg',
        Names: "Soumyajit Saha",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/soumyajit-saha-3a1761a2/"
      },
      {
        image:'',
        Names: "Vinod Kumar Sharma",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/vinod-kumar-sharma-0a515139/"
      },
      {
        image:'',
        Names: "Harsh Bafna",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: null,
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451593/midhaFinResults/Kritika_Narayan_sc4lru.jpg',
        Names: "Kritika Narayan",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/kritika-narayan-b9b525a0/"
      },
      {
        image:'',
        Names: "Avishek Srivastava ",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: null,
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451596/midhaFinResults/Palak_Jain_em4c2o.jpg',
        Names: "Palak Jain",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/palak-jain-08b0a518a/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451600/midhaFinResults/Saumya_Tripathi_pwbl83.jpg',
        Names: "Saumya Tripathi",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/saumya-tripathi-14a29026/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451593/midhaFinResults/Kishore_Saokar_bzvjbh.jpg',
        Names: "Kishore Saokar",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/kishore-saokar/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451597/midhaFinResults/Raam_Anandhan_dlxhtv.jpg',
        Names: "Raam Anandhan",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/raam-anandhan-ramanathan-3b9015b3/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451591/midhaFinResults/Jishnu_Damodaran_cv8lie.jpg',
        Names: "Jishnu Damodaran",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/jishnu-damodaran-47a8711b7/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451585/midhaFinResults/A.K.M_Fazlul_jcsvlo.jpg',
        Names: "A K M Fazlul Haque",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/a-k-m-fazlul-haque-57693230/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451591/midhaFinResults/Akhil_Harid_kvyewj.jpg',
        Names: "Akhil S Harid ",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/akhil-harid-arm/"
      },
      {
        image:'',
        Names: "Himanshi Dalwani",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: null,
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451594/midhaFinResults/Marcel_Ochsner_omlidv.jpg',
        Names: "Marcel Ochsner",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/marcel-ochsner-520196220/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451591/midhaFinResults/Jaykumar_Parmar_wahklw.jpg',
        Names: "Jaykumar Parmar",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/jaykumarparmar/"
      },
      {
        image:'https://res.cloudinary.com/floxus-education/image/upload/v1649451589/midhaFinResults/Faizan_Kousar_s2ds3m.jpg',
        Names: "Faizan Kousar",
        Part: "FRM Part 1",
        Year: "Nov-21",
        LinkedIn: "https://www.linkedin.com/in/faizan-kousar1999/"
      },
      {
        image:'',
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
            avatar={<Avatar sx={{width:{xs:'20vw',md:'14vw',lg:'7vw'} , height:'auto'}} src={element.image}></Avatar>}>
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
                {element.LinkedIn &&  <a
                target="_blank" 
                
                href={element.LinkedIn}>
                <SiLinkedin size={20}/>
                </a>}
            </Box>
            
         </CardContent>
     </Card>
     </Box>
    ))}
    </>
  )
}
