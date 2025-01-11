import styled from 'styled-components';
import { Button, InputAdornment, TextField } from '@mui/material';

export const Container = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

export const Input = styled(TextField)`
  width: 90%;
  background: ${({ bgcolor }) => bgcolor || 'transparent'};
  border-radius: 10px;

  &.MuiInputBase-input {
    height: 40px;
  }

  &.MuiInputAdornment-root {
    margin-right: 0 !important;
  }
`;

export const ButtonStyled = styled(Button)`
  border-color: var(--color-primary) !important;
  color: var(--color-primary) !important;
  height: 100%;

  &:hover{
    background-color: var(--color-primary) !important;
    color: #fff !important;
    transform: .3s;
  }
`;

export const Div = styled.div`
  margin-top: 1rem !important;
  display: flex;
  align-items: center !important;
  justify-content: space-between;
`;

export const Title = styled.h1`
    font-size: 1.5rem;
    color: var(--color-primary);
`;

export const CInputAdornment = styled(InputAdornment)`
  width: 20px;
  color: #9ba1a9;
  margin-right: 0 !important;
`;
