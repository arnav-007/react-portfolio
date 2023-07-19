import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'
import React from 'react'
import ReactDOM  from 'react-dom'
import App from './App'
import './index.css'
ReactDOM.render(<App/>, document.querySelector("#root"))

