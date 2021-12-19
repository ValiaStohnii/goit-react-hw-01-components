import styled from '@emotion/styled';

export const List = styled.ul`
  padding: 30px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-start;
  justify-content: space-around;
`;

export const FriendsItem = styled.li`
  position: relative;
  width: 135px;
  padding: 10px;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 8px;
  :last-child {
    margin-bottom: 0px;
  }
  border: 2px solid orange;
`;

export const FriendsStatus = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => {
    switch (props.isOnline) {
      case true:
        return '#4caf50';
      case false:
        return '#de2d2d';
      default:
        return 'red';
    }
  }};
`;

export const FriendsAvatar = styled.img`
  margin-right: 25px;
`;
