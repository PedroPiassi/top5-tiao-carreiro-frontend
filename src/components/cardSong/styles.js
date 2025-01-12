import styled from 'styled-components';

export const Continaer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    gap: 2rem;

    background-color: #fff;
    border-radius: 0.5rem;
    padding: 1rem 2rem;

    margin-bottom: 1.5rem;

    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.02);
    }
`;

export const Image = styled.img`
    width: 6rem;
    border-radius: 0.5rem;
`;

export const Information = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p {
        color: #808080;
    }
`;

export const Rank = styled.div`
    font-size: 1.25rem;
    color: #808080;
`;

export const Title = styled.div`
    font-size: 1.25rem;
    font-weight: 600;
`;

export const Link = styled.a`
    text-decoration: none;
    color: inherit;
`;