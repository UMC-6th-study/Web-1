import React, { useState } from 'react';
import styled from '@emotion/styled';

const Card = styled.div`
  position: relative;
  width: 200px;
  margin: 10px;
  cursor: pointer;
  background-color: #2b2b2b;
  color: white;
  border-radius: 10px;
  overflow: hidden;
`;

const Poster = styled.img`
  width: 100%;
  height: 300px;
  display: block;
  object-fit: cover; /* 포스터 이미지가 잘리지 않도록 조정 */
`;

const Detail = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  display: ${props => (props.show ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  text-align: center;
  overflow-y: auto;
`;

const Title = styled.h3`
  margin: 10px 0;
  font-size: 1.1rem;
  word-wrap: break-word;
`;

const OverviewContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  width: 100%;
`;

const Overview = styled.p`
  margin: 10px 0;
  font-size: 0.9rem;
  line-height: 1.2;
`;

const InfoContainer = styled.div`
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AdditionalInfo = styled.p`
  margin: 5px 0;
  font-size: 0.8rem;
`;

const MovieCard = ({ movie }) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <Card 
      onMouseEnter={() => setShowDetail(true)} 
      onMouseLeave={() => setShowDetail(false)}
    >
      <Poster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <Detail show={showDetail}>
        <OverviewContainer>
          <Overview>{movie.overview}</Overview>
        </OverviewContainer>
      </Detail>
      <InfoContainer>
        <Title>{movie.title}</Title>
        <AdditionalInfo>Rating: {movie.vote_average}</AdditionalInfo>
        <AdditionalInfo>Release Date: {movie.release_date}</AdditionalInfo>
      </InfoContainer>
    </Card>
  );
};

export default MovieCard;
