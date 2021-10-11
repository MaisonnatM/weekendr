import styled from '@emotion/styled'
import { Flex } from '@src/components/core'
import { TInventoryCardProps } from '.'

type TProps = {
  ctx: TInventoryCardProps['ctx']
}

export const StyledContainer = styled(Flex)<TProps>(({ ctx }) => {
  switch (ctx) {
    case 'remove':
      return {
        minHeight: '35rem',
      }
    case 'add':
      return {
        minHeight: '2rem',
      }
  }
})
