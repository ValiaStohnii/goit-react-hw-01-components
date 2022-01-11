import styled from '@emotion/styled';

export const StatSection = styled.section`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const StatTitle = styled.h2`
  margin: 0;
`;

export const StatList = styled.ul`
  margin-top: 5px;
  display: flex;
  justify-content: center;
`;

export const StatIlem = styled.li`
  list-style: none;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: red;
  border: 1px solid #ffff;
  color: #ffff;
`;

export const Label = styled.span`
  font-size: 12px;
`;
