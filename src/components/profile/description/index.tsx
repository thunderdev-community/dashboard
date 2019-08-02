import React from 'react';
import styled from "styled-components";

export default function Description() {

  return (
    <article className="pa3 pa5-ns">
        <h1>Title</h1>
        <p className="measure lh-copy">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
          vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
          no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </article>
  );
}

/*
const Article = styled.article.attrs({
  className: "pa3 pa5-ns",
})``

const Paragraph = styled.p.attrs({
  className: "measure lh-copy",
})

<Article>
      <Paragraph>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
        no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </Paragraph>
    </Article>
*/