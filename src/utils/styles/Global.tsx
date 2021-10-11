import React, { FunctionComponent } from 'react'
import emotionReset from 'emotion-reset'
import { css, Global } from '@emotion/react'

type TProps = {}

export const GlobalStyles: FunctionComponent<TProps> = () => {
  return (
    <Global
      styles={css`
        ${emotionReset}
        *, *::after, *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }

        html {
          font-size: 62.5%;
          font-family: 'Source Sans Pro', serif;
        }

        body {
          overflow: hidden;
          padding: 5rem;
          height: 100vh;
          background-color: #e7dfd5;
          width: 100%;
        }

        a {
          text-decoration: none;
        }
      `}
    />
  )
}

export type TThemeProps = TProps
