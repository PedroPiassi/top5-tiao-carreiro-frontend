import { useEffect, useState } from "react";
import Table from "../../components/table";
import { IconButton } from "@mui/material";
import useSongervice from "../../services/song";
import { toast } from "react-toastify";
import { Title } from "./styles";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const Reject = () => {
  const { getPerStatus, deleteSong, approveSong } = useSongervice();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);

  const fetchData = () => {
    setLoading(true);
    getPerStatus("rejected")
      .then((resp) => setData(resp.data.songs.data))
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

    approveSong(row.id)
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
      <Title>Músicas Reprovadas</Title>

      <Table
        columns={tableColumns}
        data={data}
        noResults={"Nenhuma Música Encontrada"}
        loading={loading}
      />
    </>
  );
};
