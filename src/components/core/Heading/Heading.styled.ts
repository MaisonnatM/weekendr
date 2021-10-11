import styled, { CSSObject } from '@emotion/styled'

type TProps = {
  as: 'h1'
  textAlign?: 'center' | 'right' | 'left'
}

export const StyledHeading = styled('div')<TProps>(({ as, textAlign }) => {
  const headingOneStyle: CSSObject = {
    fontWeight: 700,
    color: '#4B453E',
    fontSize: '3.2rem',
    lineHeight: '4rem',
  }

  switch (as) {
    case 'h1':
      return {
        ...headingOneStyle,
        textAlign,
      }
    default:
      return {}
  }
})

export type TStyledHeadingProps = TProps
