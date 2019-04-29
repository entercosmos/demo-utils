import React from 'react'
import {css} from 'emotion'

export const Canvas = ({children}) => (
    <div
        className={css`
            padding: 30px 15px;
            background-color: #fafafa;
            @media (min-width: 768px) {
                padding: 50px 100px;
            }
        `}
    >
        {children}
    </div>
)

export const Box = ({children}) => (
    <div
        className={css`
            background: #fff;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 2px 0px;
    border-radius: 5px;
    margin-bottom: 50px;
    padding: 30px;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    &:hover {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 2px 0px;
    }
        `}
    >
        {children}
    </div>
)

export const Paragraph = ({children}) => (
    <div
        className={css`
color: #999;
font-size: 12px;
margin: 0 0 20px 0;
        `}
    >
        {children}
    </div>
)

export const Heading = ({children}) => (
    <h2
        className={css`
font-weight: 400;
font-size: 24px;
        `}
    >
        {children}
    </h2>
)