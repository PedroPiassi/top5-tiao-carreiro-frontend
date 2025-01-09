import { Container } from "./style";

const AccessDenied = () => {
  return (
    <Container>
      <div>
        <h2>Acesso Negado</h2>
      </div>
      <p>Você não tem permissão para acessar esta página.</p>
    </Container>
  );
};

export default AccessDenied;
