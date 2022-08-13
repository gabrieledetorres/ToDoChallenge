import React, { Component } from "react";
import Styled from "styled-components";
import Styles from "../styles.css";

export const Body = Styled.div`
  background-color:#D52941;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

export const Title = Styled.h2`
   font-family: "Bebas Neue", cursive;
   text-align:center;
`;

export const Input = Styled.input`
  border:none;
  font-family: "Bebas Neue", cursive;
`;

export const Button = Styled.button`
  border:none;
  margin-top:20px;
  margin-bottom:10px;
  font-family: "Bebas Neue", cursive;
`;

export const List = Styled.li`
font-family: "Bebas Neue", cursive;

`;

export default class Main extends Component {
  state = {
    tarefas: "",
    listaDeTarefas: []
  };

  handleChange = (event) => {
    this.setState({
      tarefas: event.target.value
    });
  };

  adicionar = () => {
    if (this.state.tarefas !== "" && !this.state.tarefas.match(/^[  \t]+$/)) {
      this.setState({
        listaDeTarefas: this.state.listaDeTarefas.concat({
          tarefas: this.state.tarefas,
          id: Date.now()
        }),
        tarefas: ""
      });
    }
  };

  remover = (id) => {
    this.setState({
      listaDeTarefas: this.state.listaDeTarefas.filter((item) => {
        return item.id !== id;
      })
    });
  };

  handleKeyPress = (event) => {
    if (
      event.key === "Enter" &&
      this.state.tarefas !== "" &&
      !this.state.tarefas.match(/^[  \t]+$/)
    ) {
      this.setState({
        listaDeTarefas: this.state.listaDeTarefas.concat({
          tarefas: this.state.tarefas,
          id: Date.now()
        }),
        tarefas: ""
      });
    }
  };

  render() {
    return (
      <Body>
        <Title>To Do List</Title>

        <Input
          onKeyPress={this.handleKeyPress}
          onChange={this.handleChange}
          value={this.state.tarefas}
        />

        <Button onClick={this.adicionar}>Add</Button>

        <div>
          {this.state.listaDeTarefas.map((item) => (
            <ul key={item.id}>
              <List>
                {item.tarefas}{" "}
                <Button onClick={() => this.remover(item.id)}>X</Button>{" "}
              </List>
            </ul>
          ))}
        </div>
      </Body>
    );
  }
}
