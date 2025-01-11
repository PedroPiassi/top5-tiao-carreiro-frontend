import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import {
  ButtonStyled,
  Container,
  Form,
  InputGroup,
  InputLabelStyled,
  SectionForm,
  SectionTile,
  Title,
} from "./styles";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { formikProps } from "../../utils/formikProps";
import useUserervice from "../../services/user";

export const Register = () => {
  const navigate = useNavigate();
  const { store } = useUserervice();
  const [showPassword, setShowPassword] = useState(false);

  const formikValidation = Yup.object().shape({
    name: Yup.string().required("O nome é obrigatório"),
    email: Yup.string()
      .email("E-mail inválido")
      .required("O e-mail é obrigatório"),
    password: Yup.string().required("O senha é obrigatória"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: formikValidation,
    onSubmit: () => {
      store(formik.values)
        .then(() => {
          toast.success("Cadastro efetuado com sucesso.");
          navigate("/login");
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
          <h1>Top 5</h1>
          <h2>Tião Carreiro e Pardinho</h2>
        </SectionTile>

        <SectionForm>
          <Form noValidate onSubmit={formik.handleSubmit}>
            <Title>Faça seu Registro</Title>

            <InputGroup>
              <InputLabelStyled>Nome</InputLabelStyled>
              <TextField
                {...formikProps("name", formik)}
                name="name"
                placeholder="Digite seu nome"
                fullWidth
                type="text"
                size={"small"}
                required
              />
            </InputGroup>

            <InputGroup>
              <InputLabelStyled>E-mail</InputLabelStyled>
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
            </div>

            <ButtonStyled type="submit" variant="contained">
              Cadastrar
            </ButtonStyled>
          </Form>
        </SectionForm>
      </Container>
    </>
  );
};
