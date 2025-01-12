import { useEffect, useState } from "react";
import Table from "../../components/table";
import useSongervice from "../../services/song";
import { Title } from "./styles";
import { toast } from "react-toastify";
import { IconButton } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const Approve = () => {
  const { findAll, deleteSong, rejectSong } = useSongervice();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);

  const fetchData = () => {
    setLoading(true);
    findAll("approved")
      .then((resp) => {
        console.log(resp.data.songs);
        setData(resp.data.songs);
      })
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
            <IconButton onClick={(e) => handleUpdate(e, row)}>
              <ModeEditIcon sx={{ color: "yellow" }} />
            </IconButton>
            <IconButton onClick={(e) => handleDelete(e, row)}>
              <DeleteOutlineIcon color="error" />
            </IconButton>
          </div>
        </>
      ),
    },
  ];

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

  const handleUpdate = (e, row) => {
    e.stopPropagation();

    rejectSong(row.id)
      .then(() => {
        toast.success("Status alterado com sucesso!");
        fetchData();
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        console.log("error", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Title>Músicas Aprovadas</Title>

      <Table
        columns={tableColumns}
        data={data}
        noResults={"Nenhuma Música Encontrada"}
        loading={loading}
      />
    </>
  );
};
