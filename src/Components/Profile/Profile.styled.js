import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`;

export const Avatar = styled.img`
  size: 100px;
`;

export const UserDescription = styled.p`
  margin-bottom: 0px;
  margin-top: 5px;
  color: #4d4e59;
`;

export const Stats = styled.ul`
  padding: 0;
  margin-top: 5px;
  margin-bottom: 0px;
  display: flex;
  background-color: #bcbdc5;
`;

export const StatsItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 8px;
  margin: 0px;
  border: 1px solid grey;
  color: #ffff;
`;
