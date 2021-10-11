import styled from '@emotion/styled'
import { Flex } from '..'

export const StyledContainer = styled(Flex)(() => {
  return {
    borderRadius: '5rem',
    backgroundColor: '#F1EDE8',
    color: '#4B453E',
    padding: '1rem 2rem',
    fontSize: '2.4rem',
    lineHeight: '3rem',
    boxShadow: '0 0 1rem 0 #4B453E26',

    svg: {
      width: '2.5rem',
    },
  }
})

export const StyledDropContainer = styled(Flex)(() => {
  return {
    position: 'absolute',
    top: 'calc(100% + .8rem)',
    boxShadow: '0 0 1rem 0 #4B453E26',
    backgroundColor: '#F1EDE8',
    padding: '2rem 0',
    minWidth: '18.5rem',
    borderRadius: '1rem',
    left: '50%',
    transform: 'translateX(-50%);',

    '& > *': {
      '&:not(:last-child)': {
        borderBottom: '1px solid #EEE9E2',
      },

      '&:first-child': {
        paddingTop: '0',
      },

      '&:last-child': {
        paddingBottom: '0',
      },
    },
  }
})
