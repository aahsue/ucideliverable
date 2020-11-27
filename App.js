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
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b9a7595c-79f0-4c8c-863b-8b2cec78fcba/petr.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201126T064558Z&X-Amz-Expires=86400&X-Amz-Signature=54f04562f05729b75c844f6af26fa24ee8813f03ec40b7051ba22fc9fd2d5d05&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22petr.png%22"
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
        src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b9a7595c-79f0-4c8c-863b-8b2cec78fcba/petr.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201126T064558Z&X-Amz-Expires=86400&X-Amz-Signature=54f04562f05729b75c844f6af26fa24ee8813f03ec40b7051ba22fc9fd2d5d05&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22petr.png%22"
        class = {pete}
        style={{ width: 150, height: 200 }}
      />
    </formMobile>
  );
  }
  
}
