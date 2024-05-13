import styled from "styled-components";

const Image = styled.img`
  height: 380px;
  margin-bottom: 10px;
  /* object-fit: cover;
  object-position: center; */
`;

const Description = styled.div`
  display: none;
  padding: 25px 15px 0 15px;
  position: absolute;
  top: 0;
  width: 100%;
  height: 470px;
  background-color: black;
  opacity: 0.8;

  & strong {
    display: block;
    font-size: 15px;
    margin-bottom: 15px;
  }
  & p {
    font-size: 15px;
    line-height: 1.3;
  }
`;

const ItemContainer = styled.div`
  position: relative;
  width: 270px;
  height: 470px;
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  margin: 10px 0;
  color: white;
  background-color: #3c386b;

  &:hover ${Description} {
    display: block;
    /* opacity: 0.1;
    filter: brightness(0.5); */
    /* background-color: rgba(0, 0, 0, 0.2); */
  }
`;

const Title = styled.span`
  display: inline-block;
  margin-left: 7px;
  font-size: 13px;
  font-weight: 500;
`;

const Rate = styled.span`
  display: inline-block;
  position: absolute;
  top: 390px;
  right: 10px;
  font-size: 12px;
  font-weight: 300;
`;

function MovieListItem({ item }) {
  return (
    <ItemContainer>
      <Image
        src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
        alt={item.original_title}
      ></Image>
      <div>
        <Title>{item.original_title}</Title>
        <Rate>{item.vote_average}</Rate>
      </div>
      <Description>
        <strong>{item.original_title}</strong>
        <p>{item.overview}</p>
      </Description>
    </ItemContainer>
  );
}

export default MovieListItem;
