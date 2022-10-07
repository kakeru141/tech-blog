import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { Blog } from '../../types/blog'
import FolderCopyIcon from '@mui/icons-material/FolderCopy';


type P = {
    blog: Blog
}

const RowLayout: FC<P> = ({blog}) => {
    return (
        <Box 
            component='article'
            key={blog.id}
            sx={{
                mb: '30px',
                pb: '30px',
                width: '100%',
                display: 'flex',
                position: 'relative',
            }}
        >
            <Link href={blog.category ? `/category/${blog.category.id}` : '/'}>
                <Box
                    component='a'
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
            </Link>
            <Box
                component='div'
                sx={{
                    overflow: 'hidden',
                    width: '100%',
                }}
            >
                <Box
                    component='div'
                    sx={{
                        transition: '.5s',
                        width: '100%',
                        '&:hover': {
                            transform: 'Scale(1.2)'
                        }
                }}>
                    
                    <Link href={`/blog/${blog.id}`}>
                        <Box
                            component='a'
                            sx={{
                                cursor: 'pointer',
                        }} >
                            <Image
                                src={blog.image ? `${blog.image.url}` : '/images/noimage.png'}
                                layout='responsive'
                                width={16}
                                height={9}
                                priority={true}
                            />
                        </Box>
                    </Link>
                </Box>
            </Box>
            <Box sx={{
                width: '100%',
                ml: '15px',
            }}>
                <Link href={`/blog/${blog.id}`}>
                    <Typography component='a'>
                        <Typography
                            component='h2'
                            variant='h4'
                            sx={{
                                mb: '10px',
                                lineHeight: 1.5,
                                fontWeight: 700,
                            }}
                            >{blog.title}
                        </Typography>
                    </Typography>
                </Link>
                {/* <Box sx={{
                    display: {xs: 'none', sm: 'block'},
                    mb: '20px'
                }}>
                    <div dangerouslySetInnerHTML={{__html: `${blog.body}`}} />
                </Box> */}
            </Box>
        </Box>
    );
};

export default RowLayout