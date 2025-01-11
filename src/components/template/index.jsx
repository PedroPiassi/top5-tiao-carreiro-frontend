import { Outlet } from "react-router-dom";
import { Content, Div, Main } from "./styles";
import { MenuTop } from "../menus/menuTop";
import SideBar from "../menus/sideBar";

export const Template = () => {
  return (
    <>
      <Div>
        <SideBar />

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
