import styled, { CSSObject } from '@emotion/styled'
import { Flex } from '..'

type TProps = {
  animation?: 'infiniteRotate'
}

const getAnimationStyles = (animation: TProps['animation']): CSSObject => {
  if (!animation) {
    return {}
  }

  switch (animation) {
    case 'infiniteRotate':
      return {
        '@keyframes rotating': {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
        animation: 'rotating 2s linear infinite',
      }
  }
}

export const StyledContainer = styled(Flex)<TProps>(({ animation }) => {
  return {
    height: '3.2rem',
    width: '3.2rem',
    ...getAnimationStyles(animation),
  }
})

export type TStyledIconProps = TProps
