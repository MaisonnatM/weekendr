import styled from '@emotion/styled'

type TProps = {
  disabled?: boolean
}

export const StyledContainer = styled.button<TProps>(({ disabled }) => {
  return {
    backgroundColor: '#FF7A7A',
    borderRadius: '.5rem',
    fontSize: '2.4rem',
    lineHeight: '3rem',
    height: '5.4rem',
    padding: '0 8rem',
    border: 'none',
    fontWeight: 700,
    color: '#fff',
    cursor: 'pointer',

    ...(disabled && {
      '&:disabled': {
        backgroundColor: '#F5CBC7',
        cursor: 'not-allowed',
      },
    }),
  }
})

export type StyledButtonProps = TProps
