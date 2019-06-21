import React, { Component } from "react";
//import axios from "axios";
import Main from "../template/Main";
import "./Chat.css";

const headerProps = {
  icon: "comments",
  title: "Chat",
  subtitle: "Live chatbot"
};

export default class Chat extends Component {
  renderForm() {
    return (
      <div className="form">
        <div className="row d-flex justify-content-center">
          <div className="col-6">
            <div className="form-group">
              <label>Nome</label>
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="Digite seu usuário..."
              />
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-6">
            <div className="form-group">
              <textarea
                type="text"
                className="form-control"
                name="chat"
                style={{ height: 400 }}
              />
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-6">
            <div className="form-group">
              <label>Mensagem</label>
              <input
                type="text"
                className="form-control"
                name="message"
                placeholder="Digite sua mensagem..."
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <button className="btn btn-primary">Enviar</button>
          </div>
        </div>
      </div>

      // <form id="chat">
      //   <input
      //     type="text"
      //     name="username"
      //     placeholder="Digite seu usuário..."
      //   />
      //   <div className="message" />
      //   <input
      //     type="text"
      //     name="message"
      //     placeholder="Digite sua mensagem..."
      //   />
      //   <div className="col-12 d-flex justify-content-end">
      //     <button type="submit" className="btn btn-primary">
      //       Enviar
      //     </button>
      //   </div>
      // </form>
    );
  }

  render() {
    return <Main {...headerProps}>{this.renderForm()}</Main>;
  }
}
