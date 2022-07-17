import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { Blog } from '../types/blog';
import Link from 'next/link'
import WideLayout from './articleLayouts/WideLayout';
import SplitLayout from './articleLayouts/SplitLayout';
import RowLayout from './articleLayouts/RowLayout';

type P = {
    blog: Blog
    selectLayout: number
}

const Articles: FC<P> = ({blog, selectLayout})  => {

    const splitSelectStyle = {display: 'dlex', flexDirection: 'column'}

    return(
        <>

            {(() => {
                switch (selectLayout) {
                    case 0:
                        return <WideLayout blog={blog} />
                        break;
                    case 1:
                        return <SplitLayout blog={blog} />
                        break;
                    case 2:
                        return <RowLayout blog={blog} />
                        break;
                }
            })()}
        </>
        
    )
};

export default Articles