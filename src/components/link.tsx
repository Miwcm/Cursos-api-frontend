import * as Headless from '@headlessui/react'
import { forwardRef } from 'react'
import {
    Link as RouterLink,
    type LinkProps as RouterLinkProps,
} from 'react-router-dom'

type Props = {
    href: string
} & Omit<RouterLinkProps, 'to'>

export const Link = forwardRef<HTMLAnchorElement, Props>(function Link(
    { href, ...props },
    ref
) {
    return (
        <Headless.DataInteractive>
            <RouterLink to={href} {...props} ref={ref} />
        </Headless.DataInteractive>
    )
})