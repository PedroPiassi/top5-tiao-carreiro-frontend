import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;

    align-items: center;
    justify-content: center;
    text-align: center;

    img {
        width: 10rem;
    }

    h2 {
        font-size: 1.5rem;
        color: var(--color-primary);
    }

    p {
        font-size: 1rem;
    }
`;