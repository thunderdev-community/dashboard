import React from 'react';
import styled from "styled-components";

export default function Picture() {

  return (
    <Content>
      <Main>
        <Image src="http://tachyons.io/img/avatar_1.jpg"/>
        <Name>Mimi W.</Name>
        <Description>CCO (Chief Cat Officer)</Description>
      </Main>
    </Content>
  );
}

const Content = styled.article.attrs({
  className: "bb b--black-05 pb2 mt2 flex items-center justify-between",
})``

const Main = styled.article.attrs({
  className: "tc",
})``

const Image = styled.img.attrs({
  className: "br-100 h4 w4 dib ba b--black-05 pa2",
})``

const Name = styled.h1.attrs({
  className: "f3 ma0",
})``

const Description = styled.h2.attrs({
  className: "f5 fw4 gray mt0",
})``