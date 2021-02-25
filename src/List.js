import styled from 'styled-components';
import { useEffect } from 'react';

const Container = styled.div`
    padding: 12px 64px;
`

const ListItem = styled.div`
    padding: 8px 16px;

    &:nth-child(n+2) {
        border-top: 1px solid #D9DBDE;
    }
`

export const List = ({langs}) => {
     useEffect(() => {
         console.log('list: useEffect');
         return () => {
             console.log('unmount')
         }
     })
    return (
        <Container>
            {
                langs.map((lang,index) => {
                    return <ListItem key={index}>{lang}</ListItem>
                })
            }
        </Container>
    )
}

