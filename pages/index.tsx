import { Box, Paper, Typography } from '@mui/material'
import type { NextPage } from 'next'

import { useState } from 'react'
import ArticleLayoutMenu from '../src/components/ArticleLayoutMenu'
import Articles from '../src/components/Articles'
import { client } from '../src/libs/client'
import { Blog } from '../src/types/blog'

type P = {
  blog: Blog[]
}


const Home: NextPage<P> = ({blog}) => {

  const [selectLayout, setSelectLayout] = useState(0)

  console.log(blog[0].image.url)
  console.log(selectLayout)

  return (
    <Box
      sx={{
        width: {xs: '100%', sm: 'calc(70% - 30px)', md: 'calc(70% - 40px)'}
      }}
    >
      <ArticleLayoutMenu
        selectLayout={selectLayout}
        setSelectLayout={setSelectLayout}
      />
      <Box
        component='section'
            sx={selectLayout === 1 ? {
              display: 'dlex',
              flexFlow: 'column wrap',
              width: 'calc(100% + 15px)',
            } : undefined}
      >
        {blog.map((blog) => (
          <Articles
            key={blog.id}
            blog={blog}
            selectLayout={selectLayout}
          />
        ))}
        </Box>
    </Box>
  )
}

export default Home

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' })

  return {
    props: {
      blog: data.contents
    }
  }
}