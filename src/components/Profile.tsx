import { Box, Card, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const Profile: FC = () => {
    return (
        <Card
            component='aside'
            sx={{
                p: '20px',
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
                    variant='h5'
                    paragraph
                    sx={{textAlign: 'start'}}
                >
                    個人開発を本業にすることを目標に、未経験からエンジニア転職に取り組み中。
                    主にJavaScript、特にReactやってます
                </Typography>
                <Link href='https://twitter.com/kakeru_FIRE'>
                    <a>
                        <Box>
                            <Image
                                src='/'
                            />
                        </Box>
                    </a>
                </Link>
            </Box>
        </Card>
    );
};

export default Profile