import React, { FunctionComponent } from 'react'
import { Flex, Heading, Icon } from '..'

import SpinnerIcon from '@src/assets/icons/spinner.svg'

import { StyledContainer, TStyledCardProps } from './Card.styled'

type TProps = {
  title: string
} & TStyledCardProps

export const Card: FunctionComponent<TProps> = ({ isLoading, title, children }) => {
  return (
    <StyledContainer isLoading={isLoading} direction="column">
      <Heading as="h1" textAlign="center">
        {title}
      </Heading>
      {isLoading ? (
        <Flex justify="center" align="center" flex>
          <Icon animation="infiniteRotate" icon={SpinnerIcon} />
        </Flex>
      ) : (
        <>{children}</>
      )}
    </StyledContainer>
  )
}

export type TCardProps = TProps
