import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  position: relative;
`

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.error};
  font-size: 0.875rem;
`

export const FormInput = styled.input`
  width: ${({ width }) => width === 'full' ? '100%' : width === 'default' ? '200px' : '60px'};
  padding: 12px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['gray-200']};
  border: 1px solid ${({ theme }) => theme['gray-300']};
  color: ${({ theme }) => theme['gray-600']};

  &::placeholder {
    color: ${({ theme }) => theme['gray-500']};
    font-size: 0.875rem;
  }

  &:active,
  &:focus {
    outline: 1px solid ${({ theme }) => theme['yellow-700']};
  }
`