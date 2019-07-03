import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Person = ({ img, name, job, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article className="person">
      <img src={url} alt="person" />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

const PersonList = () => {
  return (
    <section className="person-list">
      <Person img="32" name="John" job="Developer">
        <ul>
          <li>Html/Css</li>
          <li>JavaScript/jQuery</li>
          <li>CSS Preprocessing</li>
        </ul>
      </Person>
      <Person img="22" name="Alex" job="Ceo" />
      <Person img="14" name="Jacob" job="Designer" />
    </section>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<PersonList />, rootElement);
