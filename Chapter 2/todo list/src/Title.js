import styled from "styled-components";

const StudyPlan = styled.h1`
  border-bottom: 2px solid #d7dcde;
  margin-bottom: 35px;
  width: 600px;
  height: 100px;
  text-align: center;
`;

function Title() {
  return <StudyPlan>UMC Study Plan</StudyPlan>;
}

export default Title;
