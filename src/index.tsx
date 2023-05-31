import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.scss'

import App from './App'

const root = document.getElementById('root')

if (root) {
    ReactDOM
        .createRoot(root)
        .render(
            <React.StrictMode>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </React.StrictMode>
        )
}
