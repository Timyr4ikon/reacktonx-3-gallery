import React from 'react'
import styled from 'styled-components';

const LoadMore = styled.button`
padding: 8px 16px;
  border-radius: 2px;
  background-color: #3f51b5;
  text-align: center;
  display: block;
  margin:0 auto;
  margin-top:10px;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  :hover,
:focus {
  background-color: #303f9f;
}`

export const Button = ({onClick}) => {
    return (
        <LoadMore onClick={onClick}>Load more</LoadMore>
    )
}
