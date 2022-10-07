import { ContactMail } from '@mui/icons-material';
import { Box, Button, CssBaseline, Grid, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { borderRadius, height, padding } from '@mui/system';
import Link from 'next/link';
import { FC } from 'react';
import { useRouter } from 'next/router';



const menus = [
    {
        title: 'contact',
        href: '/'
    },{
        title: 'profile',
        href: '/'
    }
]

const Header: FC = () => {

    const router = useRouter().asPath

    return (
        <Box
            component='header'
            sx={{
                m: '10px 0',
                p: '0 20px',
                textAlign: 'center',
                position: 'relative',
                borderBottom: '1px solid #e0e0e0',
            }}
        >
            <Typography
                component={router === '/' ? 'h1' : 'div'}
                sx={{
                    m: '0 20px 15px',
                    p: '10px 0 0',
                }}
            >
                <Link href='/'>
                    <Typography
                        component='a'
                        sx={{
                            fontSize: 20,
                            fontWeight: 700,
                            m: '0 auto',
                            transition: '.3s',
                            cursor: 'pointer',
                            '&:hover': {
                                color: '#757575'
                            }
                        }}
                    >
                        かけるのブログ
                    </Typography>
                </Link>
            </Typography>
            <nav>
                <Grid container component='ul' sx={{
                    justifyContent: 'space-around',
                    p: 0,
                }}>
                        {/* {menus.map(menu => (
                            <Grid
                                key={menu.title}
                                item
                                component='li'
                                sx={{listStyle: 'none'}}
                            >
                                <Link href={menu.href}>
                                    <Typography
                                        component='a'
                                        variant='h5'
                                        sx={{
                                            p: '10px 20px',
                                            transition: '.3s',
                                            cursor: 'pointer',
                                            '&:hover': {
                                                bgcolor: '#eee',
                                                fontWeight: 'bold',
                                                borderRadius: 2,
                                            }
                                        }}
                                    >{menu.title}</Typography>
                                </Link>
                            </Grid>
                        ))} */}
                </Grid>
            </nav>

            {/* ハンバーガー */}
            {/* <Box
            sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: 32,
                height: 24,
                borderRadius: 2,
                '&:hover': {
                    bgcolor: '#eee',
                }
            }}
            >
                <MenuIcon
                    sx={{
                        color: '#9e9e9e',
                        '&:hover': {
                            color: '#000'
                        }
                    }}
                    />
            </Box> */}
        </Box>
    );
};

export default Header