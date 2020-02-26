import styled from 'styled-components';

interface Props {
  shadow: string;
}

export const CardBody = styled.div<Props>`
  width: 300px;
  height: 400px;
  border-radius: 10px;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  margin-bottom: 15px;
  margin-left: 15px;

  cursor: pointer;
  :hover {
    box-shadow: ${props => `0 0 1em ${props.shadow}, 0 0 1em ${props.shadow}`};
    transition: box-shadow 0.3s ease-in-out;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
`;
