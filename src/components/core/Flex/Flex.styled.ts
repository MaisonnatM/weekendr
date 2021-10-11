import styled from '@emotion/styled'

type TProps = {
  direction?: 'column' | 'row'
  justify?: keyof typeof AlignEnum
  align?: keyof typeof AlignEnum
  position?: 'relative'
  gap?: keyof typeof GapEnum
  alignSelf?: keyof typeof AlignEnum
  flex?: boolean
}

enum AlignEnum {
  'between' = 'space-between',
  'end' = 'flex-end',
  'start' = 'flex-start',
  'center' = 'center',
  'default' = 'initial',
}

enum GapEnum {
  xxsmall = 0.6,
  xsmall = 1.2,
  small = 2.4,
  medium = 3.2,
  large = 4.8,
}

export const StyledContainer = styled('div')<TProps>(
  ({ onClick, position, direction, justify, align, gap, flex, alignSelf }) => {
    return {
      position,
      display: 'flex',
      ...(flex && {
        flex: flex ? '1 1' : '0 0 auto',
      }),
      flexDirection: direction,
      ...(gap && {
        gap: `${GapEnum[gap]}rem`,
      }),
      ...(justify && {
        justifyContent: AlignEnum[justify],
      }),
      ...(align && {
        alignItems: AlignEnum[align],
      }),
      ...(alignSelf && {
        alignSelf: AlignEnum[alignSelf],
      }),
      ...(onClick && {
        cursor: 'pointer',
      }),
    }
  },
)

export type TFlexStyles = TProps
