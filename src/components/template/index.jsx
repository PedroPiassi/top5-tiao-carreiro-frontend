import { Outlet } from "react-router-dom";
import { Content, Div, Main } from "./styles";
import { MenuTop } from "../menus/menuTop";

export const Template = () => {
  return (
    <>
      <Div>
        <Main>
          <MenuTop />

          <Content>
            <Outlet />
          </Content>
        </Main>
      </Div>
    </>
  );
};
