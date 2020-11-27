import React, { Component } from "react";
import Helmet from "react-helmet";
import { useMediaQuery } from 'react-responsive';
var pete = "";
var formPos = "";

export default function App() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [funfact, setfunFact] = React.useState("");
  const isMobile = useMediaQuery({ query:'(max-width: 760px)'});
  if (isMobile){
    pete = "petrPositionMobile"
    formPos = "formMobile"
  }
  else{
    pete = "petrPosition"
    formPos = "form"
  }

  const subButton = {
    padding: "10px 0px",
    border: "none",
    borderRadius: "20px",
    background: "#ff7b5c",
    fontSize: "14px"
  };
  const handleSubmit = event => {
    console.log(`
      Name: ${name}
      Email: ${email}
      Funfact: ${funfact}
    `);

    event.preventDefault();
  };

  if(!isMobile){
  return (
      <form onSubmit={handleSubmit}>
        <h2>Hack UCI Application</h2>

        <label>
          Name:
          <input
            name="name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </label>

        <label>
          Email:
          <input
            name="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Fun fact:
          <input
            name="funfact"
            type="text"
            value={funfact}
            onChange={e => setfunFact(e.target.value)}
            required
          />
        </label>

        <button style={subButton}>Submit</button>

        <img
          src= "/images/petr.png"
          class = {pete}
          style={{ width: 150, height: 200 }}
        />
      </form>
    );
  }

  if(isMobile) {
    return (
    <formMobile onSubmit={handleSubmit}>
      <h2>Hack UCI Application</h2>

      <label>
        Name:
        <input
          name="name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </label>

      <label>
        Email:
        <input
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </label>

      <label>
        Fun fact:
        <input
          name="funfact"
          type="text"
          value={funfact}
          onChange={e => setfunFact(e.target.value)}
          required
        />
      </label>

      <button style={subButton}>Submit</button>

      <img
        src="images/petr.png"
        class = {pete}
        style={{ width: 150, height: 200 }}
      />
    </formMobile>
  );
  }
  
}
