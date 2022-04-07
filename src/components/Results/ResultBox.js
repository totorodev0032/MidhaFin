import { Card, CardContent,Box, CardHeader, Avatar } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';

const resultsData = [
    {
        name: 'Prithwjit Ghosh',
        description: 'Lorem ipsum dolor sit amet. Est incidunt pariatur hic eveniet consequuntur ut porro saepe aut necessitatibus autem cum voluptatem libero. Ad architecto dolor vel enim nihil id nesciunt omnis et debitis fugiat. Et facilis odio et reiciendis doloribus non dolor minus est Quis dolor? Quo quidem similique qui officia aliquid a nihil quia!',
    },
    {
        name:'Tienis',
        description: 'Lorem ipsum dolor sit amet. Est incidunt pariatur hic eveniet consequuntur ut porro saepe aut necessitatibus autem cum voluptatem libero. Ad architecto dolor vel enim nihil id nesciunt omnis et debitis fugiat. Et facilis odio et reiciendis doloribus non dolor minus est Quis dolor? Quo quidem similique qui officia aliquid a nihil quia!',
    },
    {
        name:'Arijit Ghosh',
        description: 'Lorem ipsum dolor sit amet. Est incidunt pariatur hic eveniet consequuntur ut porro saepe aut necessitatibus autem cum voluptatem libero. Ad architecto dolor vel enim nihil id nesciunt omnis et debitis fugiat. Et facilis odio et reiciendis doloribus non dolor minus est Quis dolor? Quo quidem similique qui officia aliquid a nihil quia!',
    },
    {
        name:'Partha Nandy',
        description: 'Lorem ipsum dolor sit amet. Est incidunt pariatur hic eveniet consequuntur ut porro saepe aut necessitatibus autem cum voluptatem libero. Ad architecto dolor vel enim nihil id nesciunt omnis et debitis fugiat. Et facilis odio et reiciendis doloribus non dolor minus est Quis dolor? Quo quidem similique qui officia aliquid a nihil quia!',
    },
    {
        name:'Aaditya Agrawal',
        description: 'Lorem ipsum dolor sit amet. Est incidunt pariatur hic eveniet consequuntur ut porro saepe aut necessitatibus autem cum voluptatem libero. Ad architecto dolor vel enim nihil id nesciunt omnis et debitis fugiat. Et facilis odio et reiciendis doloribus non dolor minus est Quis dolor? Quo quidem similique qui officia aliquid a nihil quia!',
    },
    {
        name:'Aditya Khatri',
        description: 'Lorem ipsum dolor sit amet. Est incidunt pariatur hic eveniet consequuntur ut porro saepe aut necessitatibus autem cum voluptatem libero. Ad architecto dolor vel enim nihil id nesciunt omnis et debitis fugiat. Et facilis odio et reiciendis doloribus non dolor minus est Quis dolor? Quo quidem similique qui officia aliquid a nihil quia!',
    },
    {
        name:'Karan Vasnani',
        description: 'Lorem ipsum dolor sit amet. Est incidunt pariatur hic eveniet consequuntur ut porro saepe aut necessitatibus autem cum voluptatem libero. Ad architecto dolor vel enim nihil id nesciunt omnis et debitis fugiat. Et facilis odio et reiciendis doloribus non dolor minus est Quis dolor? Quo quidem similique qui officia aliquid a nihil quia!',
    },
    {
        name:'Manjunath Kattimani',
        description: 'Lorem ipsum dolor sit amet. Est incidunt pariatur hic eveniet consequuntur ut porro saepe aut necessitatibus autem cum voluptatem libero. Ad architecto dolor vel enim nihil id nesciunt omnis et debitis fugiat. Et facilis odio et reiciendis doloribus non dolor minus est Quis dolor? Quo quidem similique qui officia aliquid a nihil quia!',
    },
    {
        name:'Shiba Behera',
        description: 'Lorem ipsum dolor sit amet. Est incidunt pariatur hic eveniet consequuntur ut porro saepe aut necessitatibus autem cum voluptatem libero. Ad architecto dolor vel enim nihil id nesciunt omnis et debitis fugiat. Et facilis odio et reiciendis doloribus non dolor minus est Quis dolor? Quo quidem similique qui officia aliquid a nihil quia!',
    },
    {
        name:'Preeti Yadav',
        description: 'Lorem ipsum dolor sit amet. Est incidunt pariatur hic eveniet consequuntur ut porro saepe aut necessitatibus autem cum voluptatem libero. Ad architecto dolor vel enim nihil id nesciunt omnis et debitis fugiat. Et facilis odio et reiciendis doloribus non dolor minus est Quis dolor? Quo quidem similique qui officia aliquid a nihil quia!',
    },
    {
        name:'Kaustubh Bhutkar',
        description: 'Lorem ipsum dolor sit amet. Est incidunt pariatur hic eveniet consequuntur ut porro saepe aut necessitatibus autem cum voluptatem libero. Ad architecto dolor vel enim nihil id nesciunt omnis et debitis fugiat. Et facilis odio et reiciendis doloribus non dolor minus est Quis dolor? Quo quidem similique qui officia aliquid a nihil quia!',
    },
    {
        name:'Priyanka Kumari',
        description: 'Lorem ipsum dolor sit amet. Est incidunt pariatur hic eveniet consequuntur ut porro saepe aut necessitatibus autem cum voluptatem libero. Ad architecto dolor vel enim nihil id nesciunt omnis et debitis fugiat. Et facilis odio et reiciendis doloribus non dolor minus est Quis dolor? Quo quidem similique qui officia aliquid a nihil quia!',
    },
    {
        name:'Prasidesh Majumdar',
        description: 'Lorem ipsum dolor sit amet. Est incidunt pariatur hic eveniet consequuntur ut porro saepe aut necessitatibus autem cum voluptatem libero. Ad architecto dolor vel enim nihil id nesciunt omnis et debitis fugiat. Et facilis odio et reiciendis doloribus non dolor minus est Quis dolor? Quo quidem similique qui officia aliquid a nihil quia!',
    },
    {
        name:'Riddhi Bhatt',
        description: 'Lorem ipsum dolor sit amet. Est incidunt pariatur hic eveniet consequuntur ut porro saepe aut necessitatibus autem cum voluptatem libero. Ad architecto dolor vel enim nihil id nesciunt omnis et debitis fugiat. Et facilis odio et reiciendis doloribus non dolor minus est Quis dolor? Quo quidem similique qui officia aliquid a nihil quia!',
    },
    {
        name:'Jared Atiang',
        description: 'Lorem ipsum dolor sit amet. Est incidunt pariatur hic eveniet consequuntur ut porro saepe aut necessitatibus autem cum voluptatem libero. Ad architecto dolor vel enim nihil id nesciunt omnis et debitis fugiat. Et facilis odio et reiciendis doloribus non dolor minus est Quis dolor? Quo quidem similique qui officia aliquid a nihil quia!',
    },
    {
        name:'Deshna Sheth',
        description: 'Lorem ipsum dolor sit amet. Est incidunt pariatur hic eveniet consequuntur ut porro saepe aut necessitatibus autem cum voluptatem libero. Ad architecto dolor vel enim nihil id nesciunt omnis et debitis fugiat. Et facilis odio et reiciendis doloribus non dolor minus est Quis dolor? Quo quidem similique qui officia aliquid a nihil quia!',
    },
    {
        name:'Himanshi Shah',
        description: 'Lorem ipsum dolor sit amet. Est incidunt pariatur hic eveniet consequuntur ut porro saepe aut necessitatibus autem cum voluptatem libero. Ad architecto dolor vel enim nihil id nesciunt omnis et debitis fugiat. Et facilis odio et reiciendis doloribus non dolor minus est Quis dolor? Quo quidem similique qui officia aliquid a nihil quia!',
    },
    {
        name:'Yash Kanoi',
        description: 'Lorem ipsum dolor sit amet. Est incidunt pariatur hic eveniet consequuntur ut porro saepe aut necessitatibus autem cum voluptatem libero. Ad architecto dolor vel enim nihil id nesciunt omnis et debitis fugiat. Et facilis odio et reiciendis doloribus non dolor minus est Quis dolor? Quo quidem similique qui officia aliquid a nihil quia!',
    },
    {
        name:'Deep Naresh Nagda',
        description: 'Lorem ipsum dolor sit amet. Est incidunt pariatur hic eveniet consequuntur ut porro saepe aut necessitatibus autem cum voluptatem libero. Ad architecto dolor vel enim nihil id nesciunt omnis et debitis fugiat. Et facilis odio et reiciendis doloribus non dolor minus est Quis dolor? Quo quidem similique qui officia aliquid a nihil quia!',
    },
    {
        name:'Geetanjali Jangir',
        description: 'Lorem ipsum dolor sit amet. Est incidunt pariatur hic eveniet consequuntur ut porro saepe aut necessitatibus autem cum voluptatem libero. Ad architecto dolor vel enim nihil id nesciunt omnis et debitis fugiat. Et facilis odio et reiciendis doloribus non dolor minus est Quis dolor? Quo quidem similique qui officia aliquid a nihil quia!',
    },
    {
        name:'Naresh Gaur',
        description: 'Lorem ipsum dolor sit amet. Est incidunt pariatur hic eveniet consequuntur ut porro saepe aut necessitatibus autem cum voluptatem libero. Ad architecto dolor vel enim nihil id nesciunt omnis et debitis fugiat. Et facilis odio et reiciendis doloribus non dolor minus est Quis dolor? Quo quidem similique qui officia aliquid a nihil quia!',
    },
    {
        name:'Mohammad Awad',
        description: 'Lorem ipsum dolor sit amet. Est incidunt pariatur hic eveniet consequuntur ut porro saepe aut necessitatibus autem cum voluptatem libero. Ad architecto dolor vel enim nihil id nesciunt omnis et debitis fugiat. Et facilis odio et reiciendis doloribus non dolor minus est Quis dolor? Quo quidem similique qui officia aliquid a nihil quia!',
    },
    {
        name:'Upanshu Gaharana ',
        description: 'Lorem ipsum dolor sit amet. Est incidunt pariatur hic eveniet consequuntur ut porro saepe aut necessitatibus autem cum voluptatem libero. Ad architecto dolor vel enim nihil id nesciunt omnis et debitis fugiat. Et facilis odio et reiciendis doloribus non dolor minus est Quis dolor? Quo quidem similique qui officia aliquid a nihil quia!',
    },
    {
        name:'Tushar Prakash',
        description: 'Lorem ipsum dolor sit amet. Est incidunt pariatur hic eveniet consequuntur ut porro saepe aut necessitatibus autem cum voluptatem libero. Ad architecto dolor vel enim nihil id nesciunt omnis et debitis fugiat. Et facilis odio et reiciendis doloribus non dolor minus est Quis dolor? Quo quidem similique qui officia aliquid a nihil quia!',
    },
];

export default function ResultBox() {
  return (
    <>
    {resultsData.map((element) =>(
        <Box key={element.name} 
        sx={{
            display:'flex', 
            flexDirection:{xs:'column',md:'row',lg:'row'},
            maxWidth:{xs:'100%',md:'30%'},
            justifyContent:'center',
            alignItems:'center',
            alignContent:'center',
            }} 
            >
        <Card  
        sx={{
            display:'flex', 
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            mb:2,
            ml:1,
        }} 
        
        >
            <CardHeader avatar={<Avatar></Avatar>}></CardHeader>
        <CardContent component={Typography} variant='h6'>
            {element.name}
        </CardContent>
        <CardContent>
            {element.description}
        </CardContent>
    </Card>
    </Box>
    ))}
    </>
  )
}
