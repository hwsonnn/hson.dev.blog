import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { TbBrandGithub, TbBrandLinkedin, TbBriefcase } from 'react-icons/tb'
import cn from 'classnames'

function ExternalLink({
  href,
  children,
  className,
}: PropsWithChildren<{ href: string; className: string }>) {
  return (
    <a className={className} target="_blank" rel="noopener noreferrer" href={href}>
      {children}
    </a>
  )
}

export default function Footer() {
  return (
    <footer
      className={cn(
        'max-w-3xl mx-auto w-full mb-8',
        'flex flex-col justify-center items-start',
      )}
    >
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8"></hr>
      <div className="w-full flex flex-wrap flex-col sm:flex-row justify-start gap-4">
        <ExternalLink
          className={cn(
            'text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition',
            'flex flex-row items-center gap-1',
          )}
          href="https://github.com/hwsonnn"
        >
          <TbBrandGithub />
          Github
        </ExternalLink>
        <ExternalLink
          className={cn(
            'text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition',
            'flex flex-row items-center gap-1',
          )}
          href=""
        >
          <TbBrandLinkedin />
          LinkedIn
        </ExternalLink>
        <Link
          className={cn(
            'text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition',
            'flex flex-row items-center gap-1',
          )}
          href="/resume"
        >
          <TbBriefcase />
          Resume
        </Link>
      </div>
    </footer>
  )
}
