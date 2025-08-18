// import UserIcon from '@assets/icons/user-avatar.svg'
// import Logo from '@assets/artwork-svg/logo-icon.svg'
// import checkIcon from "/src/assets/icons/check.svg"
// import clipboardIcon from "/src/assets/icons/clipboard.svg"
import { useState, type PropsWithChildren } from 'react'
import Markdown from "markdown-to-jsx"
import { FaCheck, FaClipboard, FaUser } from 'react-icons/fa'

export type ChatMessage = {
  message: string,
  sender: string,
  direction: string,
  position: string
}

type Props = {
  message: ChatMessage,
  className?: string,
}

type CopyIconState = "hide" | "clip" | "check"// Three states hide = don't show, clip = show clipboard Icon, check = show check Icon

const ChatMessage = ({message, className: addedClasses=""}: Props) => {
  const [copyIcon, setCopyIcon] = useState<CopyIconState>("hide") 

  const copyToClipboard = async (text: string | undefined) => {
    try {
      await navigator.clipboard.writeText(text || "")
      setCopyIcon("check")
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      {message.direction==='incoming'
      ?
      <div className='flex py-2 mr-10 text-left'>
                  <FaUser className='w-[42px] h-[42px]'/>
        {/* <img src={Logo} alt="Wedding WordSmith Logo" className='w-[42px] h-[42px] self-end'/> */}
        <div className={`${addedClasses} bg-white rounded-r-xl self-center break-words`}
          onMouseEnter={() => setCopyIcon("clip")}
          onMouseLeave={() => setCopyIcon("hide")}
        >
          {
            copyIcon !== "hide" &&
            <div className="absolute bg-white p-1 shadow-sm rounded-md">
              { 
                copyIcon === "clip" ? 
                <FaClipboard 
                  className="hover:cursor-pointer"
                  onClick={() => copyToClipboard(message.message)}
                />
                : 

                <FaCheck/> 
              }
            </div>
          }
          <div className='px-3 py-2 whitespace-normal'>
          <Markdown
            options={{
              overrides: {
                h1: {component: H1,},
                h2: {component: H2,},
                h3: {component: H3,},
                h4: {component: H4,},
                ol: {component: OL,},
                ul: {component: UL,},
                li: {component: LI,},
                p: {component: P,},
              },
            }}
          >
            {message.message.replace(/ {2,}/g, ' ')}
          </Markdown>
          </div>
        </div>   
      </div>
      :
        <div className='flex justify-end ml-10'>
          <div className={`${addedClasses} bg-wwsPurple self-center rounded-l-xl justify-end break-words`}>
            <div className='px-3 py-2 text-left whitespace-normal'>
              {message.message}
            </div>
          </div>
          <FaUser className='w-[42px] h-[42px]'/>
        </div>
      }
    </>
  )
}

export default ChatMessage


const H1 = ( {children}: PropsWithChildren) => {
  return <h1 className="text-2xl font-bold my-1">{children}</h1>;
  // return <h1 className="text-xl md:text-2xl font-bold my-1">{props.children}</h1>;
};

const H2 = (  {children}: PropsWithChildren) => {
  return <h2 className="text-xl font-bold my-1">{children}</h2>;
  // return <h2 className="text-lg md:text-xl font-bold my-1">{children}</h2>;
};

const H3 = (  {children}: PropsWithChildren) => {
  return <h3 className="text-lg font-bold my-1">{children}</h3>;
  // return <h3 className="text-base md:text-lg font-bold my-1">{children}</h3>;
};

const H4 = (  {children}: PropsWithChildren) => {
  return <h4 className="text-center">{children}</h4>;
};

const OL = (  {children}: PropsWithChildren) => {
  return <ol className="list-decimal list-inside mx-2">{children}</ol>;
};

const UL = (  {children}: PropsWithChildren) => {
  return <ul className="list-disc list-inside mx-2">{children}</ul>;
};

const LI = (  {children}: PropsWithChildren) => {
  return <li className="">{children}</li>;
};

const P = (  {children}: PropsWithChildren) => {
  return <p className="mb-2">{children}</p>;
};

// const PRE = (  {children}: PropsWithChildren) => {
//   return <pre className="">{children}</pre>;
// };