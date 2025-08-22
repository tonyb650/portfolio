import { useState, type PropsWithChildren } from 'react'
import Markdown from "markdown-to-jsx"
import { FaCheck, FaClipboard, FaUser } from 'react-icons/fa'
import ChatTypingIndicator from './ChatTypingIndicator'
import MountainIcon from '@/app/_components/MountainIcon'

export type ChatMessage = {
  message: string,
  type: "outgoing" | "incoming" | "working",
}

type ChatMessageProps = {
  message: ChatMessage,
}

const ChatMessage = ({message}: ChatMessageProps) => {

  return (
    <>
      {message.type==='working' && <WorkingMessage/> }
      {message.type==='incoming' && <ModelMessage message={message.message}/> }
      {message.type === 'outgoing' && <UserMessage message={message.message}/> }
    </>
  )
}

export default ChatMessage







const UserMessage = ({ message }: { message: string }) => {
  return (
    <div className="flex justify-end items-end">
      <div className={`ml-14 bg-[#B37D4E] self-center rounded-t-xl rounded-l-xl justify-end break-words`}>
        <div className="px-3 py-2 text-left whitespace-normal">{message}</div>
      </div>
      <FaUser size={30} className='bg-[#438496] rounded-full p-0.5 mx-1 shrink-0' />
    </div>
  );
};





type CopyIconState = "hide" | "clip" | "check"// Three states hide = don't show, clip = show clipboard Icon, check = show check Icon

const ModelMessage = ({message}: {message: string}) => {
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
      <div className='flex py-2 mr-14 text-left items-end'>
        <MountainIcon size={30} className="mx-1 bg-white rounded-full p-0.5 shrink-0" />
        

        <div className={` bg-white rounded-r-xl rounded-t-xl self-center break-words`}
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
                  onClick={() => copyToClipboard(message)}
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
            {message.replace(/ {2,}/g, ' ')}
          </Markdown>
          </div>
        </div>   
        
      </div>
  )
}






/************************/
/** Markdown Overrides **/
/************************/

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


const WorkingMessage = () => {
  return (
    <div className="flex py-2 mr-10 text-left items-end">
      <MountainIcon size={30} className="mx-1 bg-white rounded-full p-0.5 shrink-0" />
      <div
        className={` bg-white rounded-r-xl rounded-t-xl self-center break-words`}
      >
        <div className="px-3 py-2 whitespace-normal">
          <ChatTypingIndicator isTyping={true} />
        </div>
      </div>
    </div>
  );
};
