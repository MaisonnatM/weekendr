import styled from '@emotion/styled'

type TProps = {
  color?: 'light' | 'dark' | 'primary' | 'success' | 'error'
  textAlign?: 'center' | 'right' | 'left'
  ellipsis?: boolean
  serif?: boolean
}

enum ColorEnum {
  light = '#867E76',
  dark = '#68615B',
  primary = '#FF7A7A',
  success = '#00AD98',
  error = '#FF7A7A',
}

export const StyledContainer = styled('p')<TProps>(
  ({ color, textAlign, serif = false, ellipsis = false }) => {
    return {
      textAlign,
      fontSize: '2.4rem',
      lineHeight: '3rem',
      fontWeight: 600,
      ...(color && {
        color: ColorEnum[color],
      }),
      ...(serif && {
        fontFamily: "'Source Serif Pro', sans-serif",
      }),
      ...(ellipsis && {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }),
    }
  },
)

export type TParagraphStyles = TProps
