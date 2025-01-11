import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  CInputAdornment,
  Input,
  Container,
  Title,
  Div,
  ButtonStyled,
} from "./styles";
import { useState } from "react";
import { toast } from "react-toastify";
import useSongervice from "../../services/song";

export const InsertSong = ({ handleInsertSong }) => {
  const { registerLink } = useSongervice();

  const [songLink, setSongLink] = useState("");

  const handleInputChange = (e) => {
    setSongLink(e.target.value);
  };

  const handleRegisterLink = () => {
    if (songLink) {
      registerLink({ url: songLink })
        .then(() => {
          toast.success("Música registrada com sucesso.");
          setSongLink("");
          handleInsertSong();
        })
        .catch((error) => {
          toast.error(error.response.data.message);
          console.log("error", error);
        });
    }
  };

  return (
    <Container>
      <Title>Sugerir Música</Title>
      <Div>
        <Input
          value={songLink}
          variant="outlined"
          placeholder="Cole aqui o link do YouTube"
          size="small"
          onChange={handleInputChange}
          InputProps={{
            startAdornment: (
              <CInputAdornment position="start">
                <IconButton edge="start">
                  <SearchIcon sx={{ color: "#bcbcbc" }} />
                </IconButton>
              </CInputAdornment>
            ),
          }}
          style={{ backgroundColor: "white" }}
        />
        <ButtonStyled variant="outlined" onClick={handleRegisterLink}>
          Enviar Link
        </ButtonStyled>
      </Div>
    </Container>
  );
};
