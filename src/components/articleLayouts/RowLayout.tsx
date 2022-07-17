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
            }}
        >
            <Link href='/'>
                <Box
                    component='a'
                    sx={{
                        display: 'flex',
                        cursor: 'pointer',
                        alignItems: 'center',
                }} >
                
                    <Box
                        component='div'
                        sx={{
                            maxWidth: '300px',
                            width: {xs: '100%'},
                            m: '0 auto 10px auto',
                            overflow: 'hidden',
                            position: 'relative',
                    }}>
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
                    <Box
                        component='div'
                        sx={{
                            transition: '.5s',
                            '&:hover': {
                                transform: 'Scale(1.2)'
                            }
                    }}>
                        <Image
                            src={blog.image ? `${blog.image.url}` : '/images/white.png'}
                            layout='responsive'
                            width={40}
                            height={21}
                            priority={true}
                        />
                    </Box>
                </Box>
                    <Box sx={{
                        width: '100%',
                        ml: '15px',
                    }}>
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
                        <Box sx={{
                            display: {xs: 'none', sm: 'block'},
                            mb: '20px'
                        }}>
                            <div dangerouslySetInnerHTML={{__html: `${blog.body}`}} />
                        </Box>
                    </Box>
                </Box>
            </Link>
        </Box>
    );
};

export default RowLayout