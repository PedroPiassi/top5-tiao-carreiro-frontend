
import { Button, InputLabel } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

export const SectionTile = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.25rem;
  text-align: center;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const Mask = styled.div`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-primary);
  opacity: 0.8; 
  z-index: 2;
`;

export const Information = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;

    gap: 1rem;
`;

export const SectionForm = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    color:  #000;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 1.5rem;
    color: var(--color-primary);
`;

export const Form = styled.form`
   width: 25rem;

   > * {
        margin-bottom: 2rem;
    }

    > *:last-child {
        margin-bottom: 0;
    }
`;

export const InputLabelStyled = styled(InputLabel)`
    margin-bottom: 0.8rem;
`;

export const InputGroup = styled.div`
   margin-bottom: 1.5rem;
`;

export const ButtonStyled = styled(Button)`
    width: 100%;
    background-color: var(--color-primary) !important;
    text-transform: none !important;

    font-size: 1rem !important;
    font-weight: 900 !important;
`;

export const ALink = styled.a`
    font-size: 1rem;
    color: var(--color-primary);

    margin-top: 1rem;
    display: flex;
    justify-content: end;
`;