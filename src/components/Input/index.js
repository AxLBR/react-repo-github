import React from 'react'

import { InputContainer } from './styles';

function Input({value, onChange}) {
  return (
    <InputContainer>
        <input value={value} onChange={onChange} placeholder="Digite o usuário do Github"/>
    </InputContainer>
  )
}

export default Input
