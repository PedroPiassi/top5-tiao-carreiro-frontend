import { Continaer, Image, Information, Rank, Title } from "./styles";

export const CardSong = ({ data }) => {
  return (
    <>
      {data.map((song, index) => (
        <Continaer key={song.id}>
          <Rank>{index + 1}</Rank>

          <Image src={song.thumbnail} alt="capa" />

          <Information>
            <Title>{song.title}</Title>
            <p>{song.views} Visualizações</p>
          </Information>
        </Continaer>
      ))}
    </>
  );
};
