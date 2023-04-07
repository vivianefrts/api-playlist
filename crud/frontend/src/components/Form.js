import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";


//edicoes
const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #5A0;
  padding: 20px;
  box-shadow: 0px 0px 5px #000;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 300px;
  padding: 0 10px;
  border: 1px solid #c0c0c0;
  border-radius: 5px;
  height: 30px;
`;

const Label = styled.label`
  color: #000;
`;

const Button = styled.button`
  padding: 10px;
  border: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #c0c0c0;
  color: #000;
  height: 37px;
  font-weight: bold;
`;

const Form = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.nome.value = onEdit.nome;
      
      
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (
      !user.nome.value 
      
      
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/" + onEdit.id, {
          nome: user.nome.value,
          
          
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800/", {
          nome: user.nome.value,
          

        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    user.nome.value = "";

    setOnEdit(null);
    getUsers();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
      <Label></Label>
        <Input name="nome" />
      </InputArea>

      <Button type="submit">Adicionar</Button>
      
    </FormContainer>
  );
};

export default Form;