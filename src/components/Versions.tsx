import React, { useEffect, useState } from 'react'

import './Versions.scss'

import packageJson from '../../package.json'

export default function Versions(): JSX.Element {
    const [reactVersion, setReactVersion] = useState<string>('')
    const [reactDomVersion, setReactDomVersion] = useState<string>('')
    const [reactRouterDomVersion, setReactRouterDomVersion] = useState<string>('')
    const [typescriptVersion, setTypescriptVersion] = useState<string>('')
    const [sassVersion, setSassVersion] = useState<string>('')
    const [webpackVersion, setWebpackVersion] = useState<string>('')

    
    useEffect(() => {
        setReactVersion(packageJson.dependencies.react)
        setReactDomVersion(packageJson.dependencies['react-dom'])
        setReactRouterDomVersion(packageJson.dependencies['react-router-dom'])
        setTypescriptVersion(packageJson.devDependencies.typescript)
        setSassVersion(packageJson.devDependencies.sass)
        setWebpackVersion(packageJson.devDependencies.webpack)
    }, [])

    return (
        <ul className="versions">
            <li>React: {reactVersion}</li>
            <li>React DOM: {reactDomVersion}</li>
            <li>React Router DOM: {reactRouterDomVersion}</li>
            <li>TypeScript: {typescriptVersion}</li>
            <li>Sass: {sassVersion}</li>
            <li>Webpack: {webpackVersion}</li>
        </ul>
    )
}
