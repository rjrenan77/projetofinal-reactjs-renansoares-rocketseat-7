import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  margin-top: 40px;

  header {
    display: inline-flexbox;
    color: #fff;
  }

  button {
    display: flex;
    align-self: center;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    border: 0;
    background: #bf26c9;

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

  .button1 {
    margin-left: 500px;
    color: #fff;
  }

  .button2 {
    margin-left: 10px;
  }

  img {
    width: 810px;
    height: 200px;
    margin-top: 40px;
  }

  h4 {
    margin-top: 40px;
    margin-bottom: 90px;

    display: flex;
    color: #eee;
    align-self: center;
    align-items: center;
  }

  h3 {
    display: inline;
    margin-right: 200px;
    color: #999;
    align-self: center;
    align-items: center;
  }
`;
