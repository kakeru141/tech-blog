import { Box } from '@mui/material'
import type { NextPage } from 'next'

import { useState } from 'react'
import ArticleLayoutMenu from '../src/components/ArticleLayoutMenu'
import Articles from '../src/components/Articles'
import HeadContainer from '../src/components/HeadContainer'
import { client } from '../src/libs/client'
import { Blog } from '../src/types/blog'

type P = {
  blog: Blog[]
}


const Home: NextPage<P> = ({blog}) => {

  const [selectLayout, setSelectLayout] = useState(0)

  return (
    <>
    <HeadContainer>
      <title>かけるの技術ブログ</title>
      <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL} />
      <meta
          property='og:url'
          content={process.env.NEXT_PUBLIC_SITE_URL}
        />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='かけるの技術ブログ' />
        <meta
          property='og:description'
          content='エンジニアかけるのアウトプットです'
        />
        <meta property='og:site_name' content='かけるの技術ブログ' />
        <meta
          property='og:image'
          content={`${process.env.NEXT_PUBLIC_SITE_URL}/public/vercel.svg`}
        />
    </HeadContainer>
    <Box
      component='div'
      sx={{
        width: {xs: '100%', sm: 'calc(70% - 30px)', md: 'calc(70% - 40px)'},
        minHeight: '100vh'
      }}
    >
      <ArticleLayoutMenu
        selectLayout={selectLayout}
        setSelectLayout={setSelectLayout}
      />
        <Box
  component='section'
      sx={selectLayout === 1 ? {
          display: 'flex',
          flexFlow: 'row wrap',
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
    </>
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