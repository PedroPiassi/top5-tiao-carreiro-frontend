import { useNavigate } from "react-router-dom";
import { Container, Main, MenuItemStyled, Title } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/slices/authSlice";

export const MenuTop = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <>
      <Container>
        <div>
          <Title>Bem-vindo, {user.name}!</Title>
        </div>

        <Main>
          <MenuItemStyled onClick={handleLogout}>Sair</MenuItemStyled>
        </Main>
      </Container>
    </>
  );
};
