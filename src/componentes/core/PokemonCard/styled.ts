import styled from 'styled-components';

interface Props {
  shadow: string;
}

export const CardBody = styled.div<Props>`
  width: 350px;
  height: 409px;
  border-radius: 10px;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  margin-bottom: 15px;
  box-shadow: ${props =>
    `0 0 0.5em ${props.shadow}, 0 0 0.5em ${props.shadow}`};
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
`;
