import { useNavigate } from "react-router-dom";
import { Container, Main, MenuItemStyled } from "./styles";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/slices/authSlice";

export const MenuTop = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <>
      <Container>
        <div>
          <h1>Top 5 Tião Carreiro e Pardinho</h1>
        </div>

        <Main>
          <MenuItemStyled onClick={handleLogout}>Sair</MenuItemStyled>
        </Main>
      </Container>
    </>
  );
};
