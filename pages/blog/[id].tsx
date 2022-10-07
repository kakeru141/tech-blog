import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';
import { client } from '../../src/libs/client';
import { Blog } from '../../src/types/blog';
import style from './BlogId.module.scss';

type P = {
    blog: Blog
}

const BlogId: FC<P> = ({blog}) => {

    return (
        <Box
            component='main'
            sx={{
                width: 'calc(70% - 30px)',
                fontWeight: 700,
                lineHeight: 1.5,
                m: 'auto'
            }}
        >
            <Typography
            variant='h3'
            component='h1'
                sx={{
                    mb: '20px',
                }}
            >{blog.title}</Typography>
            <Box
                component='div'
                sx={{
                    width: '100%',
                    position: 'relative'
                }}>
                <Image
                    src={blog.image ? `${blog.image.url}` : '/images/noimage.png'}
                    layout='responsive'
                    width={16}
                    height={9}
                    priority={true}
                />
                <Box
                    component='div'
                    sx={blog.category ? {
                        right: 0,
                        top: 0,
                        bgcolor: 'rgba(3, 169, 244, .6)',
                        p: 1,
                        borderRadius: 1,
                        position: 'absolute',
                        display: 'flex',
                        zIndex: 10,
                        cursor: 'pointer',
                        '&:hover': {bgcolor: 'rgba(3, 169, 244, .9)'},
                    } : {display: 'none'}}
                >
                    <FolderCopyIcon sx={{
                        fontSize: 'small',
                        m: 'auto 4px auto 0',
                    }}/>
                    <Typography sx={{fontSize: 'small'}} >
                        {blog.category ? blog.category.name : undefined}
                    </Typography>
                </Box> 
            </Box>
            <Box
            component='div'
            sx={{
                pt: '20px'
            }}
            >
                <div dangerouslySetInnerHTML={{__html: `${blog.body}`}} className={style.content} />
            </Box>
        </Box>
    );
};

export default BlogId

export const getStaticPaths = async () => {
    const data = await client.get({endpoint: 'blog'})

    const paths = data.contents.map((content: Blog) => `/blog/${content.id}`)
    return {paths, fallback: false}
}

export const getStaticProps = async (context: {params: {id: string}}) => {
    const id = context.params.id
    const data = await client.get({endpoint: 'blog', contentId: id})

    return{
        props: {
            blog: data
        }
    }
}