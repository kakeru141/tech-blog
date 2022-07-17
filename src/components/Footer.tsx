import { Box, Typography } from '@mui/material';
import { FC } from 'react';

const Footer: FC = () => {
    return (
        <Box component='footer' sx={{
            display: 'flex',
            p: '30px 0',
            borderTop: '1px solid #e0e0e0'
        }}>
            <Typography component='small'
            sx={{
                fontSize: 'small',
                m: '0 auto',
            }}
            >
            &copy; Copyright かけるブログ
            </Typography>

        </Box>
    );
};

export default Footer