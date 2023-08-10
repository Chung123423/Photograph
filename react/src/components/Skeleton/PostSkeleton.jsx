import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Card, CardContent, CardHeader } from '@mui/material';

export default function PostSkeleton(){
    return(
        <Card>
            <CardHeader 
                avatar={<Skeleton variant="circular" width={40} height={40} />}

                title={<Skeleton variant="text" sx={{ fontSize: '1rem' }} />}
                subheader={<Skeleton variant="text" sx={{ fontSize: '1rem' }} />}
            />
            <Skeleton variant="rectangular" width={"100%"} height={"200px"} />
            <CardContent>
                <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            </CardContent>
            
        </Card>
    )
}