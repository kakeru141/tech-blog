import { Box } from '@mui/material';
import { FC } from 'react';
import Profile from './Profile';
import style from './Sidebar.module.css'

const Sidebar: FC = () => {
    return (
        <Box
            className={style.sidebar}
            sx={{
                width: {
                    xs: '100%',
                    sm: '30%',
                },
                bgcolor: '#eee',
            }}
        >
            <Profile/>
        </Box>
    );
};

export default Sidebar