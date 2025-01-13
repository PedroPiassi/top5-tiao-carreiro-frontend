import { useEffect, useRef, useState } from "react";
import { InsertSong } from "../../components/insertSong";
import useSongervice from "../../services/song";
import { Title } from "./style";
import { toast } from "react-toastify";
import { CardSong } from "../../components/cardSong";
import { CircularProgress } from "@mui/material";

export const Home = () => {
  const { getPerStatus } = useSongervice();
  const lastDataRef = useRef(null);
  const observer = useRef(null);

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = () => {
    if (!hasMore) return;

    getPerStatus("approved", page, 5)
      .then((resp) => {
        const songs = resp.data.songs;
        const totalCount = resp.data.total;

        setData([...data, ...songs]);
        setPage(page + 1);

        if (data.length + songs.length >= totalCount) {
          setHasMore(false);
        }
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        console.error("Error fetching data:", error);
      });
  };

  const handleInsertSong = () => {
    setPage(1);
    setHasMore(true);
    setData([]);
    fetchData();
  };

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const lastEntry = entries[entries.length - 1];
      if (lastEntry.isIntersecting && hasMore) {
        fetchData();
      }
    });

    if (lastDataRef.current) {
      observer.current.observe(lastDataRef.current);
    }

    return () => {
      if (lastDataRef.current && observer.current) {
        observer.current.unobserve(lastDataRef.current);
      }
    };
  }, [data, hasMore]);

  return (
    <>
      <Title>Top Músicas Tocadas</Title>

      <InsertSong handleInsertSong={handleInsertSong} />

      <CardSong data={data} />

      {hasMore && (
        <div ref={lastDataRef}>
          <CircularProgress />
        </div>
      )}
    </>
  );
};
