import styled from '@emotion/styled'
import { Flex } from '../Flex'

type TProps = {
  isLoading?: boolean
}

export const StyledContainer = styled(Flex)<TProps>(({ isLoading }) => {
  return {
    width: '40rem',
    backgroundColor: '#F1EDE8',
    boxShadow: '0 0 1rem 0 #4B453E26',
    borderRadius: '1.5rem',

    ...(isLoading && {
      minHeight: '43rem',
    }),

    '& > *': {
      padding: '2rem 2.4rem',
      '&:not(:last-child)': {
        borderBottom: '.1rem solid #E7DFD5',
      },
    },
  }
})

export type TStyledCardProps = TProps
