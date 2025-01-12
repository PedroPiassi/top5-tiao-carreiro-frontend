import { IconButton } from "@mui/material";
import Table from "../../components/table";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useEffect, useState } from "react";
import useSongervice from "../../services/song";
import { toast } from "react-toastify";
import { Title } from "./styles";
import { InsertSong } from "../../components/insertSong";

export const Pending = () => {
  const { findAll, approveSong, rejectSong, deleteSong } = useSongervice();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);

  const fetchData = () => {
    setLoading(true);
    findAll("pending")
      .then((resp) => setData(resp.data.songs))
      .catch((error) => {
        toast.error(error.response.data.message);
        console.error("Error fetching data:", error);
      })
      .finally(() => setLoading(false));
  };

  const tableColumns = [
    {
      key: "thumbnail",
      label: "Capa",
      maxWidth: "8%",
    },
    {
      key: "title",
      label: "Título",
    },
    {
      key: "views",
      label: "Vizualizações",
    },
    {
      key: "actions",
      label: "Ações",
      maxWidth: "8%",
      render: (_, row) => (
        <>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <IconButton onClick={(e) => handleApprove(e, row)}>
              <CheckCircleOutlineIcon sx={{ color: "green" }} />
            </IconButton>
            <IconButton onClick={(e) => handleReject(e, row)}>
              <HighlightOffIcon color="error" />
            </IconButton>
            <IconButton onClick={(e) => handleDelete(e, row)}>
              <DeleteOutlineIcon color="error" />
            </IconButton>
          </div>
        </>
      ),
    },
  ];

  const handleApprove = (e, row) => {
    e.stopPropagation();

    approveSong(row.id)
      .then(() => {
        toast.success("Música aprovada com sucesso!");
        fetchData();
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        console.log("error", error);
      });
  };

  const handleReject = (e, row) => {
    e.stopPropagation();

    rejectSong(row.id)
      .then(() => {
        toast.success("Música reprovada com sucesso!");
        fetchData();
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        console.log("error", error);
      });
  };

  const handleDelete = (e, row) => {
    e.stopPropagation();

    deleteSong(row.id)
      .then(() => {
        toast.success("Música deletada com sucesso!");
        fetchData();
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        console.log("error", error);
      });
  };

  const handleInsertSong = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Title>Músicas Pendentes</Title>

      <InsertSong handleInsertSong={handleInsertSong} />

      <Table
        columns={tableColumns}
        data={data}
        noResults={"Nenhuma Música Encontrada"}
        loading={loading}
      />
    </>
  );
};
