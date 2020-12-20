import React from 'react';
import styled from 'styled-components';
import {Button} from '../Button'

export function Board ({children}) {
    return (
        <Container>
            <HeaderMenu>
                <Button>Main Page</Button>
                <Button>Restart</Button>
            </HeaderMenu>
            <div>{children}</div>
        </Container>
    );
}

const Container = styled.div `
 display: flex;
 justify-content: center;
 align-items: center;
`
const HeaderMenu = styled.div `
 display: flex;
 justify-content: space-between;
 align-items: center;
`
