import React from 'react';
import styled from '@emotion/styled';
import Toolbar from '../../components/ToolBar/Toolbar';
import Footer from '../../components/Footer/Footer';
import * as GiIcons from 'react-icons/gi';

const BlogWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 70vh;
  align-items: center;
  justify-content: center;
`;

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 80%;

  justify-content: center;
  align-items: center;
`;

const BlogPage = () => {
  return (
    <>
      <Toolbar />
      <BlogWrapper>
        <BlogContainer>
          <GiIcons.GiEmptyHourglass
            style={{ fontSize: '200px', color: '#D29B59' }}
          />
          <p style={{ marginTop: '30px' }}>Blogs coming soon</p>
        </BlogContainer>
      </BlogWrapper>
      <Footer />
    </>
  );
};

export default BlogPage;
