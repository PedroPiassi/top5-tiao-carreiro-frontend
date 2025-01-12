import { useFormik } from "formik";
import Cookies from "js-cookie";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import {
  ALink,
  ButtonStyled,
  Container,
  Form,
  Image,
  Information,
  InputGroup,
  InputLabelStyled,
  Mask,
  SectionForm,
  SectionTile,
  Title,
} from "./styles";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { formikProps } from "../../utils/formikProps";
import useAuthService from "../../services/auth";
import { setUser } from "../../redux/slices/authSlice";
import background from "../../assets/background.jpg";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authentication } = useAuthService();
  const [showPassword, setShowPassword] = useState(false);

  const formikValidation = Yup.object().shape({
    email: Yup.string()
      .email("E-mail inválido")
      .required("O e-mail é obrigatório"),
    password: Yup.string().required("O senha é obrigatória"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: formikValidation,
    onSubmit: () => {
      authentication(formik.values)
        .then((resp) => {
          dispatch(setUser(resp.data.user));

          if (resp.data.token) {
            Cookies.set("token", resp.data.token);
          }

          toast.success("Login efetuado com sucesso.");
          navigate("/");
        })
        .catch((error) => {
          toast.error(error.response.data.message);
          console.log("error", error);
        });
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Container>
        <SectionTile>
          <Image src={background} alt="background" />
          <Mask />
          <Information>
            <h2>Top Músicas</h2>
            <h3>Tião Carreiro e Pardinho</h3>
          </Information>
        </SectionTile>

        <SectionForm>
          <Form noValidate onSubmit={formik.handleSubmit}>
            <Title>Faça seu login</Title>

            <InputGroup>
              <InputLabelStyled>Usuário</InputLabelStyled>
              <TextField
                {...formikProps("email", formik)}
                name="email"
                placeholder="Digite seu e-mail"
                fullWidth
                type="email"
                size={"small"}
                required
              />
            </InputGroup>

            <div>
              <InputLabelStyled>Senha</InputLabelStyled>
              <TextField
                {...formikProps("password", formik)}
                name="password"
                placeholder="Digite sua senha"
                fullWidth
                type={showPassword ? "text" : "password"}
                size={"small"}
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <ALink href="register">Registre-se agora!</ALink>
            </div>

            <ButtonStyled type="submit" variant="contained">
              Entrar
            </ButtonStyled>
          </Form>
        </SectionForm>
      </Container>
    </>
  );
};
