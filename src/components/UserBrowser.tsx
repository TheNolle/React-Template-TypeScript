import React, { useEffect, useState } from 'react'

export default function UserBrowser(): JSX.Element {
    const [browser, setBrowser] = useState<string>('')

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase()
        const browsers: Record<string, string> = { chrome: 'Chrome', safari: 'Safari', firefox: 'Firefox', msie: 'Internet Explorer' }
        const detectedBrowser = Object.keys(browsers).find((key) => userAgent.includes(key)) || 'Unknown Browser'
        setBrowser(browsers[detectedBrowser])
    }, [])

    return (
        <span>{browser}</span>
    )
}
