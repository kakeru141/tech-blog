import { autocompleteClasses, Box, Card, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const Profile: FC = () => {
    return (
        <Card
            component='aside'
            sx={{
                p: '20px',
                mb: '40px'
        }}>
            <Typography
                component='h2'
            >
                自己紹介

            </Typography>
            <Box sx={{
                textAlign: 'center',
            }}>
                <Box sx={{
                    width: '120px',
                    height: '120px',
                    bgcolor: '#eee',
                    display: 'inline-block',
                }}>

                </Box>
                <Typography
                    variant='h5'
                    component='h3'
                    sx={{mb: '10px'}}
                >
                かける
                </Typography>
                <Typography
                    variant='body2'
                    paragraph
                    sx={{textAlign: 'start'}}
                >
                    未経験からエンジニア転職に取り組み中。
                    主にJavaScript、特にReactやってます
                </Typography>
                {/* <Link href='https://twitter.com/kakeru_FIRE'>
                    <a>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '48px',
                            height: '48px',
                            m: 'auto',
                            borderRadius: '24px',
                            bgcolor: '#4FC3F7',
                            transition: '.2s',
                            '&:hover': {
                                bgcolor: '#29B6F6',
                            }
                        }}>
                            <Box sx={{
                                width: '24px',
                                height: '24px',
                                transition: '.2s',
                            
                                '&:hover': {
                                    width: '28px',
                                    height: '28px'
                                }
                            }}>
                            <Image
                                src='/images/twitter-logo.png'
                                width={40}
                                height={40}
                                layout='responsive'
                            />
                            </Box>
                        </Box>
                    </a>
                </Link> */}
            </Box>
        </Card>
    );
};

export default Profile