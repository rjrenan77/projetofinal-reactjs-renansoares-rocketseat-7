import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    color: #fff;
    align-self: center;
    align-items: center;
  }

  button {
    display: flex;
    align-self: center;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    border: 0;
    background: #bf26c9;
    margin-left: 300px;
    height: 33px;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.1, '#bf26c9')};
    }
  }

  strong {
    display: flex;
    color: #fff;
    opacity: 100;
    font-size: 14px;
    margin: 0 4px;
  }

  ul {
    display: grid;
    grid-gap: 15px;
  }
`;

export const Meetup = styled.li`
  margin-top: 30px;
  padding: 20px;
  border-radius: 4px;
  background: #201930;

  h4 {
    color: #fff;
    display: inline;
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: inline;
    color: #666;
    margin-left: 180px;
  }

  a {
    color: #fff;
    margin-top: 1000px;
    margin-left: 20px;
  }
`;
