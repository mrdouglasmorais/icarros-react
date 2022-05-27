import styled from 'styled-components';

export const FormContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const ContactCard = styled.div`
  border-radius: 12px;
  margin: 20px;
  padding: 20px;
  background-color: #aaaaaa;

  form {
    display: grid;

    input {
      margin: 2px;
    }
  }
`