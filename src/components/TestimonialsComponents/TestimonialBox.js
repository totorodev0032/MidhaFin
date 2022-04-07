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



const testimonials = [
  {
    name: `Partha Nandy`,
    picLink:'https://res.cloudinary.com/floxus-education/image/upload/v1649311321/MidhaFinTestimonials/Partha_Nandy_tcm2hv.jpg',
    linkedinLink: `https://www.linkedin.com/in/partha-nandy-1bb9871b/`,
    quoraReview: `https://qr.ae/pGjV4T`,
    promoLines: `Questions are asked on the concepts so the ideas should be clear . The way he explains concepts of duration , convexity , option Greeks is excellent.`,
    remarks: ``,
  },
  {
    name: `Karan Vasnani`,
    picLink:'https://res.cloudinary.com/floxus-education/image/upload/v1649311322/MidhaFinTestimonials/Karan_Vasnani_vv2q7l.jpg',
    linkedinLink: `https://www.linkedin.com/in/karan-vasnani-17b495156/`,
    quoraReview: `https://qr.ae/pGjVuO`,
    promoLines: ` The way to making things understand in easy way is outstanding. He provides conceptual understanding of most of learning outcomes and most important of all is doubt solving whenever needed. The revision lectures and questions provided at last helpes me a lot to recall the concept. `,
    remarks: ``,
  },
  {
    name: `Preeti Yadav`,
    picLink:null,
    linkedinLink: `https://www.linkedin.com/in/preeti1yadav/`,
    quoraReview: `https://qr.ae/pGj60I`,
    promoLines: `The deep expertise in mathematics and statistics possessed by Micky Midha is commendable and it helped me get so comfortable with even the most complex concepts. He explains all concepts in as many ways as possible (using calculus, geometry, sometimes even pure logic). `,
    remarks: ``,
  },
  {
    name: `Kaustubh Bhutkar`,
    picLink:'https://res.cloudinary.com/floxus-education/image/upload/v1649311322/MidhaFinTestimonials/Kaustubh_Bhutkar_yjskar.jpg',
    linkedinLink: `https://www.linkedin.com/in/kaustubh-bhutkar-frm-1a213b54/`,
    quoraReview: `https://qr.ae/pGj60I`,
    promoLines: `Micky has a good understanding of concepts and is able to explain the concepts quite easily. I being a working professional found that the resources provided by him are enough alongwith Schweser.`,
    remarks: ``,
  },
  {
    name: `Riddhi Bhatt`,
    picLink:'https://res.cloudinary.com/floxus-education/image/upload/v1649311320/MidhaFinTestimonials/Riddhi_Bhatt_vxeuem.jpg',
    linkedinLink: `https://www.linkedin.com/in/ribhatt/`,
    quoraReview: `https://qr.ae/pGjBrj`,
    promoLines: `The meticulously designed question banks help in revision which is one of the greatest pros of opting for the classes. What also helps a lot are the mock tests that give you a real feel of the exams.`,
    remarks: ``,
  },
  {
    name: `Upanshu Gaharana`,
    picLink:'https://res.cloudinary.com/floxus-education/image/upload/v1649311319/MidhaFinTestimonials/Upanshu_Gaharana_qewkd8.jpg',
    linkedinLink: `https://www.linkedin.com/in/ug0607199/`,
    quoraReview: `https://qr.ae/pGjBrj`,
    promoLines: `His explanation ability is very convenient. He covers each and every concept along with its importance for exam as well as practical purpose.`,
    remarks: ``,
  },
  {
    name: `Mahak Bagaria`,
    picLink:'https://res.cloudinary.com/floxus-education/image/upload/v1649311321/MidhaFinTestimonials/Mahak_Bagaria_dkzzxk.jpg',
    linkedinLink: `https://www.linkedin.com/in/mahak-bagaria-98953416a/`,
    quoraReview: `https://qr.ae/pGjBsp`,
    promoLines: `Being from a non-finance background, initially, I struggled with the concepts,and felt the need to be guided. I enrolled for Micky Midha 's online classes, which helped me get through this.`,
    remarks: ``,
  },
  {
    name: `Nikhil Nair`,
    picLink:'https://res.cloudinary.com/floxus-education/image/upload/v1649311321/MidhaFinTestimonials/Nikhil_Nair_czhi9x.jpg',
    linkedinLink: `https://www.linkedin.com/in/ca-nikhil-nair/`,
    quoraReview: `https://qr.ae/pGjBab`,
    promoLines: `What worked for me was that Micky sir painstakingly covered all the literature from GARP's study material during the lectures in a lucid manner.`,
    remarks: ``,
  },
  {
    name: `Naresh Gaur`,
    picLink:'https://res.cloudinary.com/floxus-education/image/upload/v1649311321/MidhaFinTestimonials/Naresh_Gaur_whf6zr.jpg',
    linkedinLink: `https://www.linkedin.com/in/nareshgaur/`,
    quoraReview: `https://qr.ae/pGjBab`,
    promoLines: `I used MidhaFin. Micky is a great teacher and reallly explains the topics with a clarity that helps you solidify your concepts.`,
    remarks: ``,
  },
  {
    name: `Acchintya S Talwarr`,
    picLink:'https://res.cloudinary.com/floxus-education/image/upload/v1649311323/MidhaFinTestimonials/Acchintya_S_Talwarr_hqxpx2.jpg',
    linkedinLink: `https://www.linkedin.com/in/acchintyastalwarr/`,
    quoraReview: `https://qr.ae/pGjEyU`,
    promoLines: `Micky Midha strives to ensure in-depth understanding of each topic and goes beyond the syllabus to clarify any doubts. He combines theory with quants to further deepen our knowledge which specifically helped me in certain topics of market and credit risk I was struggling with.`,
    remarks: ``,
  },
  {
    name: `Radha Agarwal`,
    picLink:'https://res.cloudinary.com/floxus-education/image/upload/v1649311320/MidhaFinTestimonials/Radha_Agarwal_qxks6i.jpg',
    linkedinLink: `https://www.linkedin.com/in/radha-agarwal-43b148177/`,
    quoraReview: `https://qr.ae/pGQuIS`,
    promoLines: `The 24 hour doubt solving forum provided by MidhaFin and a platform for live interaction and doubt solving sessions was of great help.`,
    remarks: ``,
  },
  {
    name: `Lavnya Ajmera`,
    picLink:'https://res.cloudinary.com/floxus-education/image/upload/v1649311322/MidhaFinTestimonials/Lavnya_Ajmera_gnbpzi.jpg',
    linkedinLink: `https://www.linkedin.com/in/lavnya-ajmera-4b2a4a207/`,
    quoraReview: `https://qr.ae/pGjEbb`,
    promoLines: `The 24 hour doubt solving forum provided by MidhaFin and a platform for live interaction and doubt solving sessions was of great help.`,
    remarks: ``,
  },

  {
    name: `Bhavin Kamdar`,
    picLink:'https://res.cloudinary.com/floxus-education/image/upload/v1649311323/MidhaFinTestimonials/Bhavin_Kamdar_bxmdnf.jpg',
    linkedinLink: `https://www.linkedin.com/in/bhavin-kamdar-1a7ba3126/`,
    quoraReview: `https://qr.ae/pGjEgs`,
    promoLines: `Many question banks were provided and mock exams were also conducted before exam so that i was 100% confident when I took the exam.`,
    remarks: ``,
  },
  {
    name: `Saswata Chowdhury`,
    picLink:'https://res.cloudinary.com/floxus-education/image/upload/v1649311319/MidhaFinTestimonials/Saswata_Chowdhury_mo2m5b.jpg',
    linkedinLink: `https://www.linkedin.com/in/saswata-chowdhury-frm-293844207/`,
    quoraReview: `https://qr.ae/pGjEUN`,
    promoLines: `The deep expertise Micky sir has in the mathematical subjects actually made very easy for me to understand them quickly on course to my clearing the FRM exam.`,
    remarks: ``,
  },
  {
    name: `Dhruv Anand`,
    picLink:'https://res.cloudinary.com/floxus-education/image/upload/v1649311323/MidhaFinTestimonials/Dhruv_Anand_j9pjjt.jpg',
    linkedinLink: `https://www.linkedin.com/in/dhruv-anand-a48a32120/`,
    quoraReview: `https://qr.ae/pGjEUm`,
    promoLines: `The videos are interactive and most of the common doubts are cleared in the class itself. The videos and the study material are tailor made for the exam `,
    remarks: ``,
  },
  {
    name: `Vish Iyer`,
    picLink:'https://res.cloudinary.com/floxus-education/image/upload/v1649311319/MidhaFinTestimonials/Vish_Iyer_qpjces.jpg',
    linkedinLink: `https://www.linkedin.com/in/vishiyer01/`,
    quoraReview: `https://qr.ae/pGjQ0f`,
    promoLines: `Micky’s pedagogy is the core differentiator versus other key FRM providers. He is highly regarded for his amazing maths skills and again, the factor is “Attention to detail”.`,
    remarks: ``,
  },
  {
    name: `Hardik Sawhney`,
    picLink:'https://res.cloudinary.com/floxus-education/image/upload/v1649311323/MidhaFinTestimonials/Hardik_Sawhney_pvucjs.jpg',
    linkedinLink: `https://www.linkedin.com/in/hardik-sawhney-109984126/`,
    quoraReview: `https://qr.ae/pGjEWg`,
    promoLines: `The knowledge that Sir holds is commendable with a highly assisting nature. He explains everything in great detail.`,
    remarks: ``,
  },
  {
    name: `Subhadev Pal`,
    picLink:'https://res.cloudinary.com/floxus-education/image/upload/v1649311319/MidhaFinTestimonials/Subhadev_Pal_rbh6et.jpg',
    linkedinLink: `https://www.linkedin.com/in/subhadev-pal-ab8a2312b/`,
    quoraReview: `https://qr.ae/pGjE9w`,
    promoLines: `Coming to video lectures and coaching, Micky Midha has some amazing video lectures covering A-Z of the entire syllabus systematically.`,
    remarks: ``,
  },
  {
    name: `Ashima Arora`,
    picLink:'https://res.cloudinary.com/floxus-education/image/upload/v1649311324/MidhaFinTestimonials/Ashima_Arora_x3v2pj.jpg',
    linkedinLink: `https://www.linkedin.com/in/ashima-arora-3622b230/`,
    quoraReview: `https://qr.ae/pGjEas`,
    promoLines: `Course content, knowledge and explanation, MidhaFin team does a good job on every front. And coming to your question of doubt clearance, I would state that his sessions are interactive and any number of questions/doubts are always welcome.`,
    remarks: ``,
  },
  {
    name: `Ramesh Kumar Vadlamani`,
    picLink:'https://res.cloudinary.com/floxus-education/image/upload/v1649311319/MidhaFinTestimonials/Ramesh_Kumar_Vadlamani_fex9bg.jpg',
    linkedinLink: `https://www.linkedin.com/in/ramesh-kumar-vadlamani-1085727/`,
    quoraReview: `https://qr.ae/pGjdZI`,
    promoLines: `Micky Midha and team have put in commendable amount of effort to come up with a course which is very fluid in a way that different topics are interconnected.`,
    remarks: ``,
  },
  {
    name: `Tara Sherigar`,
    picLink:'https://res.cloudinary.com/floxus-education/image/upload/v1649311319/MidhaFinTestimonials/Tara_Sherigar_ysguuh.jpg',
    linkedinLink: `https://www.linkedin.com/in/tara-sherigar-frm-ca-1860a028/`,
    quoraReview: `https://qr.ae/pGjdcJ`,
    promoLines: `Personally, for me, Quantitative analysis was the biggest challenge but Micky Midha sir's method of explaining this subject is excellent which made it easy for me to grasp the difficult mathematics and statistics concepts.`,
    remarks: ``,
  },
  {
    name: `Kanika Sikka`,
    picLink:'https://res.cloudinary.com/floxus-education/image/upload/v1649311324/MidhaFinTestimonials/Kanika_Sikka_wqoafn.jpg',
    linkedinLink: `https://www.linkedin.com/in/kanika-sikka-chandok-00584a17/`,
    quoraReview: `https://qr.ae/pGjdxY`,
    promoLines: `Micky Sir at MidhaFin encouraged me enough to do this course and as committed he made me clear FRM part 1 with flying colours. His teaching skills are beyond expectations.`,
    remarks: ``,
  },
  {
    name: `Gouri Milind Sinhasane`,
    picLink:'https://res.cloudinary.com/floxus-education/image/upload/v1649311322/MidhaFinTestimonials/Gouri_Milind_Sinhasane_luqran.jpg',
    linkedinLink: `https://www.linkedin.com/in/gouri-sinhasane-442a931b8/`,
    quoraReview: `https://qr.ae/pGj6AT`,
    promoLines: `Micky Midha sirs way of teaching is really in detail..right from scratch to advanced each topic was taught conceptually , logically, graphically.`,
    remarks: ``,
  },
  {
    name: `Rakshit Reddy`,
    picLink:'https://res.cloudinary.com/floxus-education/image/upload/v1649311320/MidhaFinTestimonials/Rakshith_Reddy_v8qnpg.jpg',
    linkedinLink: `https://www.linkedin.com/in/rakshith-reddy-b53285222/`,
    quoraReview: `https://qr.ae/pGjdlQ`,
    promoLines: `I had an extremely good experience with them, I’d recommend them to anyone who’s interested in pursuing frm, they definitely provide top notch coaching for frm, try their demo class n decide for yourself !`,
    remarks: ``,
  },
  {
    name: `Kush Maheshwari`,
    picLink:'https://res.cloudinary.com/floxus-education/image/upload/v1649311322/MidhaFinTestimonials/Kush_Maheshwari_wwdfiq.jpg',
    linkedinLink: `https://www.linkedin.com/in/kush-maheshwari/`,
    quoraReview: `https://qr.ae/pGjdm0`,
    promoLines: `Midhafin worked for me. Advantage with them is that they are having very accessible team. You can call Micky sir anytime for any FRM related doubts.`,
    remarks: ``,
  },
  {
    name: `Lubna Khan`,
    picLink:'https://res.cloudinary.com/floxus-education/image/upload/v1649311322/MidhaFinTestimonials/Lubna_Khan_sabrti.jpg',
    linkedinLink: `https://www.linkedin.com/in/lubna-khan-pathan-a43818152/`,
    quoraReview: `https://qr.ae/pGjdzW`,
    promoLines: `The preparation structure is very well made by the instructor and his team. You will get a progress tracker, a scheduled list of chapters to be covered in sequence, video recordings, Practice questions , Past papers with solution & Lecture PDFs.`,
    remarks: ``,
  },

  {
    name: `Palak Hasija`,
    picLink:'https://res.cloudinary.com/floxus-education/image/upload/v1649311322/MidhaFinTestimonials/Palak_Hasija_gdkr5i.jpg',
    linkedinLink: `https://www.linkedin.com/in/palak-hasija-94727116b/`,
    quoraReview: `https://qr.ae/pGjd3u`,
    promoLines: `So I took Micky midha classes from MidhaFin and honestly, Micky Midha sir explains every topic in depth and goes beyond the syllabus to clarify any doubts.`,
    remarks: ``,
  },
  {
    name: `Soumyajit Saha`,
    picLink:'https://res.cloudinary.com/floxus-education/image/upload/v1649311319/MidhaFinTestimonials/Soumyajit_Saha_fwbtyq.jpg',
    linkedinLink: `https://www.linkedin.com/in/soumyajit-saha-3a1761a2/`,
    quoraReview: `https://qr.ae/pGjdQx`,
    promoLines: `I saw sample video lectures from MidhaFinand compared the price. MidhaFIn scored most in overall rating considering the price and quality both.`,
    remarks: ``,
  },
  {
    name: `Kritika Narayan`,
    picLink:'https://res.cloudinary.com/floxus-education/image/upload/v1649311322/MidhaFinTestimonials/Kritika_Narayan_a1ptxo.jpg',
    linkedinLink: `https://www.linkedin.com/in/partha-nandy-1bb9871b/`,
    quoraReview: `https://qr.ae/pGjddB`,
    promoLines: `MidhaFin provides very good guidance when it comes to concept building. Their online classes and mocks prepares you well for the exam.`,
    remarks: ``,
  },
  {
    name: `Palak Jain`,
    picLink:'https://res.cloudinary.com/floxus-education/image/upload/v1649311321/MidhaFinTestimonials/Palak_Jain_scyxbd.jpg',
    linkedinLink: `https://www.linkedin.com/in/palak-jain-08b0a518a/`,
    quoraReview: `https://qr.ae/pGjdLM`,
    promoLines: `The concepts were taught really well and in a proper structured format. The live casses were super interactive.`,
    remarks: ``,
  },
  {
    name: `Raam Anandhan`,
    picLink:'https://res.cloudinary.com/floxus-education/image/upload/v1649311320/MidhaFinTestimonials/Raam_Anandhan_uov1us.jpg',
    linkedinLink: `https://www.linkedin.com/in/raam-anandhan-ramanathan-3b9015b3/`,
    quoraReview: `https://qr.ae/pGjLRx`,
    promoLines: `Micky sir’s way of graphical explanation made the concepts simple and clear. Apart from the regular question banks, they provide questions from previous FRM part 1 exams which will give an idea about the real difficulty level of the exam.`,
    remarks: ``,
  },
  {
    name: `Faizan Kousar`,
    picLink:'https://res.cloudinary.com/floxus-education/image/upload/v1649311323/MidhaFinTestimonials/Faizan_Kousar_ywbn8c.jpg',
    linkedinLink: `https://www.linkedin.com/in/faizan-kousar1999/`,
    quoraReview: `https://qr.ae/pGjLnw`,
    promoLines: `Micky sir goes an extra mile in making sure that all the concepts are crystal clear which not only helps in clearing exam but will go a long way in cracking interviews for the industry related jobs.`,
    remarks: ``,
  },
  {
    name: `Shadma Khan`,
    picLink:'https://res.cloudinary.com/floxus-education/image/upload/v1649311320/MidhaFinTestimonials/Shadma_Khan_jybwws.jpg',
    linkedinLink: `https://www.linkedin.com/in/shadma-khan-frm-17788a26/`,
    quoraReview: `https://qr.ae/pGjLOS`,
    promoLines: `He explained all topics with graphical representation, making it easy to understand. Micky is always available for clearing doubts. I endorse his classes as success Mantra.`,
    remarks: ``,
  },

  {
    name: `Saurabh Alkari`,
    picLink:'https://res.cloudinary.com/floxus-education/image/upload/v1649311319/MidhaFinTestimonials/Saurabh_Alkari_vzfluy.jpg',
    linkedinLink: `https://www.linkedin.com/in/saurabh-alkari-frm-6819688/`,
    quoraReview: `https://qr.ae/pGjLiQ`,
    promoLines: `Even though it’s a virtual class, he gives personal attention to every student and he solves every single doubt in the class or after the class.`,
    remarks: ``,
  },
  {
    name: `Inder Chandnani`,
    picLink:'',
    linkedinLink: null,
    //`https://www.linkedin.com/in/inderjeet-chandnani-frm-7b38747b/ - Doubtful`,
    quoraReview: `https://qr.ae/pGLdUB`,
    promoLines: `Great personality, not just as a instructor but as human being also, can't share many things, but he is person with great values.`,
    remarks: ``,
  },
  {
    name: `Viren Ghaghada`,
    picLink:'https://res.cloudinary.com/floxus-education/image/upload/v1649311318/MidhaFinTestimonials/Viren_Ghaghada_wegmnb.jpg',
    linkedinLink: `https://www.linkedin.com/in/viren-ghaghada-37623362/`,
    quoraReview: `https://qr.ae/pGjLVh`,
    promoLines: `I can say that Micky is expert in Maths, stats and explains the concept in multiple ways - graphically and algebraically.`,
    remarks: ``,
  },
  {
    name: `Priyanka Kumari`,
    picLink:'https://res.cloudinary.com/floxus-education/image/upload/v1649311320/MidhaFinTestimonials/Priyanka_Kumari_nusr0h.jpg',
    linkedinLink: `https://www.linkedin.com/in/priyankakumari07/`,
    quoraReview: `https://qr.ae/pGj0hZ`,
    promoLines: `His audio /visual lectures made the course extremely simple to understand and he took personal efforts to make me understand every difficult concept till the time it was crystal clear to me over phone.`,
    remarks: ``,
  },
];

export default function TestimonialBox() {
  return (
    <>
      {testimonials.map((data) => (
          
          <Box
          sx={{
            display:'flex',
            flexDirection:{xs:'column',md:'row',lg:'row'},
            alignContent:'center',
            alignItems:'center',
            justifyContent:'center',
            maxWidth:{xs:'100%',md:'30%'},
            mr:{xs:'0',md:'0.5vw',lg:'1vw'}
          }}
          >
          <Card sx={{
              display:'flex',
              flexDirection:'column',
              justifyContent:'center',
              alignItems:'center',
              textAlign:'center',
             
              mb:'2vh',
              
          }}>
            <CardHeader avatar={<Avatar sx={{width:'7vw' , height:'auto'}}     src={data.picLink}></Avatar>}></CardHeader>
            
            <CardContent component={Typography} variant='h4' sx={{fontFamily:'inherit'}}>
            {data.name}
            </CardContent>
            <CardContent component={Typography} variant='body1'  sx={{fontFamily:'inherit'}} >{data.promoLines}</CardContent>
            <CardContent>
           {data.linkedinLink && <Link
            to={data.linkedinLink}
            className="link"
            onClick={() => window.scroll(0, 0)}
            style={{textDecoration:'none'}}
          >
            <p

style={{
    fontSize: '18px',
    marginLeft: '20px',
    color: '#6a1b1a',
    fontWeight: '600',

 }}
            
            >LinkedIn Post</p>
          </Link> } 
           
        {data.quoraReview &&  <Link
            to={data.quoraReview}
            className="link"
            onClick={() => window.scroll(0, 0)}
            style={{textDecoration:'none'}}
          >
            <p style={{
               fontSize: '18px',
               marginLeft: '20px',
               color: '#6a1b1a',
               fontWeight: '600',

            }}>Quora Post</p>
          </Link>}

            <h3 style={{fontFamily:'inherit'}}>{data.remarks}</h3>
            </CardContent>
            
          </Card>
          </Box>
       
      ))}
    </>
  );
}
