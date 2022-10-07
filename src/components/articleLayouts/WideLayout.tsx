import { Typography } from '@mui/material';
import { FC } from 'react';
import Image from 'next/image'
import { Box } from '@mui/system';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import Link from 'next/link';
import { Blog } from '../../types/blog'

type P = {
    blog: Blog
}

const WideLayout: FC<P> = ({blog}) => {
    return (
        <Box 
            component='article'
            key={blog.id}
            sx={{
                mb: 2,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
            }}
        >

            <Link href={blog.category ? `/category/${blog.category.id}` : '/'}>
                <a>
                    <Box
                        component='div'
                        sx={blog.category ? {
                            right: 0,
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
                </a>
            </Link>
            <Box
                component='div'
                sx={{
                    width: '100%',
                    m: '0 auto 10px auto',
                    overflow: 'hidden',
            }}>
                <Link href={`/blog/${blog.id}`}>
                    <Box
                        component='a'
                        sx={{
                            cursor: 'pointer',
                            alignItems: 'center',
                    }} >
                        <Box
                            component='div'
                            sx={{
                                transition: '.5s',
                                '&:hover': {
                                    transform: 'Scale(1.2)'
                                }
                        }}>
                            <Image
                                src={blog.image ? `${blog.image.url}` : '/images/noimage.png'}
                                layout='responsive'
                                width={16}
                                height={9}
                                priority={true}
                            />
                        </Box>
                    </Box>
                </Link>
            </Box>
            <Box>
                <Link href={`/blog/${blog.id}`}>
                    <Typography
                        component='a' sx={{
                            cursor: 'pointer'
                        }}
                    >
                        <Typography
                            component='h2'
                            variant='h4'
                            >{blog.title}
                        </Typography>
                    </Typography>
                </Link>
                {/* <Box sx={{
                    display: {xs: 'none', sm: 'block'}
                }}>
                    <div dangerouslySetInnerHTML={{__html: `${blog.body}`}} />
                </Box> */}
            </Box>
        </Box>
    );
};

export default WideLayout