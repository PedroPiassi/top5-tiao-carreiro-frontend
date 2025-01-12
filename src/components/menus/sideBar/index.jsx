import { useState } from "react";
import {
  DivExpand,
  FaListLeftIcon,
  FaListRightIcon,
  Li,
  LinkTitleAdm,
  Nav,
} from "./styles";
import { useSelector } from "react-redux";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const SideBar = () => {
  const user = useSelector((state) => state.auth.user);
  const [expanded, setExpanded] = useState(false);

  const menuItems = [
    {
      id: 1,
      label: "Pendentes",
      icon: <WorkHistoryIcon />,
      path: "/pendentes",
    },
    {
      id: 2,
      label: "Aprovadas",
      icon: <CheckCircleOutlineIcon />,
      path: "/aprovadas",
    },
    {
      id: 3,
      label: "Reprovadas",
      icon: <HighlightOffIcon />,
      path: "/reprovadas",
    },
  ];

  const toggleMenu = () => setExpanded(!expanded);

  return (
    <Nav expanded={expanded ? "true" : undefined}>
      {user.role == "admin" && (
        <>
          <div>
            <ul style={{ listStyle: "none" }}>
              {menuItems.map((menuItem) => (
                <Li key={menuItem.id} expanded={expanded ? "true" : undefined}>
                  <LinkTitleAdm
                    expanded={expanded ? "true" : undefined}
                    to={menuItem.path}
                  >
                    {menuItem.icon}
                    <span>{menuItem.label}</span>
                  </LinkTitleAdm>
                </Li>
              ))}
            </ul>
          </div>

          <DivExpand>
            {expanded ? (
              <FaListLeftIcon onClick={toggleMenu} />
            ) : (
              <FaListRightIcon onClick={toggleMenu} />
            )}
          </DivExpand>
        </>
      )}
    </Nav>
  );
};

export default SideBar;
