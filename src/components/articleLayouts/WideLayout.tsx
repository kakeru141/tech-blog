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
            }}
        >
            <Link href='/'>
                <Box
                    component='a'
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        cursor: 'pointer',
                        alignItems: 'center',
                }} >
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
                        width: {xs: '100%'},
                        m: '0 auto 10px auto',
                        overflow: 'hidden',
                        position: 'relative',
                }}>
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
                    <Box>
                        <Typography
                            component='h2'
                            variant='h4'
                            >{blog.title}
                        </Typography>
                        <Box sx={{
                            display: {xs: 'none', sm: 'block'}
                        }}>
                            <div dangerouslySetInnerHTML={{__html: `${blog.body}`}} />
                        </Box>
                    </Box>
                </Box>
            </Link>
        </Box>
    );
};

export default WideLayout