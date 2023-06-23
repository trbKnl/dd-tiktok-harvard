import React, { ReactNode, useState } from 'react'

interface Props {
  children: ReactNode
}

export const Minimizable = ({ children }: Props): JSX.Element => {
  const [isMinimized, setIsMinimized] = useState<boolean>(true)

  const containerStyle = isMinimized ? `overflow-hidden h-[15rem] w-[24rem] animate-fadeIn` : `w-full`
  const childStyle = isMinimized ? `scale-50 origin-top-left z-10 p-5 w-[200%] ` : `transition-all`
  const toggleStyle = isMinimized
    ? `transition-all absolute top-0 left-0 h-full w-full z-20 bg-primary/0 hover:bg-primary/25 border-solid border-2 cursor-zoom-in`
    : `w-min ml-auto cursor-zoom-out`
  const iconStyle = isMinimized ? `rounded-tr-sm bg-primary` : `rounded-sm mb-2 bg-primary`

  return (
    <div className={`overflow-auto relative min-h-[15rem] min-w-[24rem] ${containerStyle}`}>
      <div className={`flex items-end justify-start rounded-sm border-primary ${toggleStyle}`} onClick={() => setIsMinimized(!isMinimized)}>
        <div className={`relative font-caption text-xl px-4 py-1 backdrop-blur-[2px] text-white z-30 ${iconStyle}`}>
          {isMinimized ? zoomInIcon : zoomOutIcon}
        </div>
      </div>
      <div className={`relative  ${childStyle}`}>{children}</div>
    </div>
  )
}

const zoomInIcon = (
  <svg
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
    ></path>
  </svg>
)

const zoomOutIcon = (
  <svg
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6"
    ></path>
  </svg>
)
