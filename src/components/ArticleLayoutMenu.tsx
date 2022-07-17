import { Box, Button, CssBaseline, Paper, Typography } from '@mui/material';
import { Dispatch, FC, SetStateAction } from 'react';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import PanoramaWideAngleSelectIcon from '@mui/icons-material/PanoramaWideAngleSelect';

type P = {
    selectLayout: number
    setSelectLayout: Dispatch<SetStateAction<number>>
}

const ArticleLayoutMenu: FC<P> = ({selectLayout, setSelectLayout}) => {

    const changeWide = () => {
        setSelectLayout(0)
    }
    const changeSplit = () => {
        setSelectLayout(1)
    }
    const changeRow = () => {
        setSelectLayout(2)
    }

    return (
        <Paper elevation={1} sx={{
            p: '10px 10px',
            mb: 3,
            display: 'flex',
        }}>
            <Box>
                <Button sx={{
                    color: 'black',
                    // p: '8px 16px',
                    p: '8px',
                    // '&:hover': {
                    //     bgcolor: '#eee',
                    //     fontSize: '',
                    //     fontWeight: 'bold',
                    //     borderRadius: 2,
                    // }
                }}>
                    新着順
                </Button>
            {/* <Button sx={{
                color: 'black',
                // p: '8px 16px',
                p: '8px',
                '&:hover': {
                    bgcolor: '#eee',
                    fontSize: '',
                    fontWeight: 'bold',
                    borderRadius: 2,
                }
            }}>
                人気順
            </Button> */}
            </Box>
        {/* レイアウト */}
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            ml: 'auto',
        }}>
            <Typography
                component='div'
                sx={{
                    p: 0,
                    border: 'none',
                    bgcolor:'transparent',
                    width: 24,
                    height: 24,
                    cursor: 'pointer',
                }}
                onClick={changeWide}
            >
                <PanoramaWideAngleSelectIcon
                    sx={selectLayout === 0 ?
                        {color: '#000',  '&:hover': {color: '#000'}} :
                        {color: '#bdbdbd', '&:hover': {color: '#000'}}
                    }
                />
            </Typography>
            <Typography
                component='button'
                sx={{
                    p: 0,
                    border: 'none',
                    bgcolor:'transparent',
                    width: 24,
                    height: 24,
                    cursor: 'pointer',
                }}
                onClick={changeSplit}
            >
                <ViewModuleIcon
                    sx={selectLayout === 1 ?
                        {color: '#000',  '&:hover': {color: '#000'}} :
                        {color: '#bdbdbd', '&:hover': {color: '#000'}}
                    }
                />
            </Typography>
            <Typography
                component='button'
                sx={{
                    p: 0,
                    border: 'none',
                    bgcolor:'transparent',
                    width: 24,
                    height: 24,
                    cursor: 'pointer',
                }}
                onClick={changeRow}
            >
                <ViewStreamIcon
                    sx={selectLayout === 2 ?
                        {color: '#000',  '&:hover': {color: '#000'}} :
                        {color: '#bdbdbd', '&:hover': {color: '#000'}}
                    }
                />
            </Typography>

        </Box>
        </Paper>
    );
};

export default ArticleLayoutMenu