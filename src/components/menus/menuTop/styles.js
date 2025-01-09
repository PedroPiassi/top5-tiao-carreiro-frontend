import { MenuItem } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 4rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 2rem;

    h1 {
        font-size:  1.5rem;
    }
`;

export const MenuItemStyled = styled(MenuItem)`
    gap: 1rem;
`;

export const Main = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`;