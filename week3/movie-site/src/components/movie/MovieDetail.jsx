import { styled } from "styled-components";

export default function MoviewDetail({
  title,
  backdrop_path,
  poster_path,
  vote_average,
  release_date,
  overview,
}) {
  const makeStar = (vote_average) => {
    let count = Math.round(vote_average);
    let i = 0;

    let star = "";

    while (i < count) {
      count--;
      star += `⭐️`;
    }

    return star;
  };

  return (
    <WrapperContainer
      image={`https://image.tmdb.org/t/p/original${backdrop_path}`}
    >
      <div className="wrapper">
        <div className="img_container">
          <img
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt={title}
          />
        </div>

        <Detial>
          <div>
            <span>제목</span>
            <span>{title}</span>
          </div>

          <div>
            <span>평점</span>
            <span>{makeStar(vote_average)}</span>
          </div>

          <div>
            <span>개봉일</span>
            <span>{release_date}</span>
          </div>

          <div>
            <p>줄거리</p>

            <p id="over_view">
              {overview === "" ? "제공된 줄거리가 없습니다." : overview}
            </p>
          </div>
        </Detial>
      </div>
    </WrapperContainer>
  );
}

const WrapperContainer = styled.div`
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  box-sizing: content-box;
  background: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    backdrop-filter: blur(10px);
  }

  .wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  .img_container {
    width: 500px;
    padding: 20px;
  }

  .img_container img {
    display: block;
    width: 100%;
    height: auto;
  }
`;
const Detial = styled.div`
  span {
    padding-right: 30px;
  }
  div {
    margin: 20px;
  }

  #over_view {
    margin-top: 20px;
  }
`;
