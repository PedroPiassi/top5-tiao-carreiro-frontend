import { Continaer, Image, Information, Link, Rank, Title } from "./styles";

export const CardSong = ({ data }) => {
  return (
    <>
      {data.map((song, index) => (
        <Link
          key={song.id}
          href={song.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Continaer>
            <Rank>{index + 1}</Rank>

            <Image src={song.thumbnail} alt="capa" />

            <Information>
              <Title>{song.title}</Title>
              <p>{song.views} Visualizações</p>
            </Information>
          </Continaer>
        </Link>
      ))}
    </>
  );
};
