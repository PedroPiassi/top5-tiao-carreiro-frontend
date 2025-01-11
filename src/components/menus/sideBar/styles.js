import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export const Nav = styled.nav`
    width: ${props => props.expanded ? '280px' : '60px'};
    height: 100vh;
    background: var(--color-primary);

    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: .3s;

    & > div {
        margin-top: 0.5rem;
    }
`;

export const Li = styled.li`
    width: 100%;
    padding: 0.5rem;

    &:hover {
        background-color: #ffffff1a;
        transition: .1s;
    }

    img {
        width: 22px;
        height: 22px;
    }

    a {
        color: #FAFAFA;
        transition: 0.3s;
        font-size: 14px;

        display: flex;
        align-items: center;

        svg {
            margin-right: 0.5rem;
        }

        span {
            margin-left: 0.5rem;
            margin-top: 4px;

            display: ${props => (props.expanded ? "inline" : "none")};
        }
    }
`;

export const LinkTitleAdm = styled(Link)`
    display: flex;
    align-items: center;
    padding: 0.25rem 0.6rem;

    font-size: 1.125rem !important;

    svg {
        color: #FAFAFA;
        font-size: 1.4rem;
    }

    span {
        margin-left: 1rem !important;
        margin-top: 4px !important;

        display: ${props => (props.expanded ? "inline" : "none")};
        transition: 0.3s;
    }
`;

export const DivExpand = styled.div`
    width: 100%;
    padding-right: 1rem !important;
    margin-bottom: 1rem;

    display: flex;
    justify-content: end;
`;

export const FaListLeftIcon = styled(FaRegArrowAltCircleLeft)`
    color: #fff;
    font-size: 1.6rem;
    cursor: pointer;
`;

export const FaListRightIcon = styled(FaRegArrowAltCircleRight)`
    color: #fff;
    font-size: 1.6rem;
    cursor: pointer;
`;