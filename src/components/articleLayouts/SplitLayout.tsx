import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { Blog } from '../../types/blog'
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import { NoEncryption } from '@mui/icons-material';


type P = {
    blog: Blog
}

const SplitLayout: FC<P> = ({blog}) => {
    return (
        <Box 
        component='article'
        key={blog.id}
        sx={{
            m: '0 15px 10px 0',
            pb: '10px',
            width: 'calc(50% - 15px)',
            position: 'relative',
        }}
    >

        <Link href='/'>
        <Box
            component='a'
            sx={{
                width: 'calc(100% - 15px)',
                mr: '15px',
                mb: '20px',
                cursor: 'pointer',
            }}
        >
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
                    width: '100%',
                    m: '0 auto 10px auto',
                    overflow: 'hidden',
                    position: 'relative',
                }}
            >
            <Box
                component='div'
                sx={{
                    transition: '.5s',
                    '&:hover': {
                        transform: 'Scale(1.2)'
                    }
                }}
            >
                <Image
                    src={blog.image ? `${blog.image.url}` : '/images/white.png'}
                    layout='responsive'
                    width={40}
                    height={21}
                    priority={true}
                    />
                </Box>
            </Box>
            <Typography
                component='h2'
                variant='h4'
                >{blog.title}
            </Typography>
            <Box sx={{
                display: {xs: 'none', sm: 'block'}
            }}>
                <Typography
                    sx={{
                        display: {xs: 'none', sm: 'block'}
                    }}
                    dangerouslySetInnerHTML={{__html: `${blog.body}`}}
                />
            </Box>
        </Box>
    </Link>
                </Box>
    );
};

export default SplitLayout