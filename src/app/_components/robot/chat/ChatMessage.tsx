import MountainIcon from '@/app/_components/MountainIcon'
import { useState, type PropsWithChildren } from 'react'
import { FaCheck, FaClipboard, FaUser } from 'react-icons/fa'

// export type ChatMessage = {
//   message: string,
//   type: "outgoing" | "incoming" | "working",
// }

type CopyIconState = "hide" | "clip" | "check"// Three states hide = don't show, clip = show clipboard Icon, check = show check Icon


type ChatMessageWrapperProps = {
  role: "system" | "user" | "assistant"
}

export const ChatMessageWrapper = ({ children, role }: PropsWithChildren<ChatMessageWrapperProps>) => {
  const [copyIcon, setCopyIcon] = useState<CopyIconState>("hide") 

    const copyToClipboard = async (text: string | undefined) => {
    try {
      await navigator.clipboard.writeText(text || "")
      setCopyIcon("check")
    } catch (err) {
      console.error(err)
    }
  }


  if (role === "assistant") {
    return (
      <div className='flex py-2 mr-14 text-left items-end gap-2'>
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
                  onClick={() => copyToClipboard("message")}
                />
                : 
                <FaCheck/> 
              }
            </div>
          }
            <div className="px-3 py-2 text-left whitespace-normal">
              {children}
            </div>
        </div>   
      </div>
    )
  } else if (role === "user"){
    return (
      <div className="flex justify-end items-end gap-2">
        <div className={`ml-14 bg-accent text-white self-center rounded-t-xl rounded-l-xl justify-end break-words`}>
          <div className="px-3 py-2 text-left whitespace-normal">
            {children}
          </div>
        </div>
        <FaUser size={30} className='bg-[#062136] text-highlight rounded-full p-1 mx-1 shrink-0' />
      </div>
    );
  }

  return null
};











// type ChatMessageProps = {
//   message: UIMessage<unknown, UIDataTypes, UITools>,
// }

// const ChatMessage = ({message}: ChatMessageProps) => {

//   return (
//     <>
//       {message.role ==='user' && <UserMessage parts={message.parts} /> }
//       {message.role ==='assistant' && <ModelMessage parts={message.parts}/>  }
//     </>
//   )
// }

// export default ChatMessage




/********************/
/*** User Message ***/
/********************/



/*********************/
/*** MODEL Message ***/
/*********************/















// const ModelMessage = ({ parts }: { parts: UIMessagePart<UIDataTypes, UITools>[] }) => {
//   // const [copyIcon, setCopyIcon] = useState<CopyIconState>("hide") 

//   // const copyToClipboard = async (text: string | undefined) => {
//   //   try {
//   //     await navigator.clipboard.writeText(text || "")
//   //     setCopyIcon("check")
//   //   } catch (err) {
//   //     console.error(err)
//   //   }
//   // }

//   return (
//       <div className='flex py-2 mr-14 text-left items-end'>
//         <MountainIcon size={30} className="mx-1 bg-white rounded-full p-0.5 shrink-0" />
        

//         <div className={` bg-white rounded-r-xl rounded-t-xl self-center break-words`}
//           // onMouseEnter={() => setCopyIcon("clip")}
//           // onMouseLeave={() => setCopyIcon("hide")}
//         >
//           {/* {
//             copyIcon !== "hide" &&
//             <div className="absolute bg-white p-1 shadow-sm rounded-md">
//               { 
//                 copyIcon === "clip" ? 
//                 <FaClipboard 
//                   className="hover:cursor-pointer"
//                   onClick={() => copyToClipboard("message")}
//                 />
//                 : 
//                 <FaCheck/> 
//               }
//             </div>
//           } */}
//           <div className='px-3 py-2 whitespace-normal'>

//           <div className="px-3 py-2 text-left whitespace-normal">
//             {parts.map((part, i) => {
//               if(part.type === 'text') {
//                 return <div key={`${"message.id.here"}-${i}`}>{part.text.replace(/ {2,}/g, ' ')}</div>
//               }
//           })}</div>

//           </div>
//         </div>   
        
//       </div>
//   )
// }





































// /************************/
// /** Markdown Overrides **/
// /************************/

// const H1 = ( {children}: PropsWithChildren) => {
//   return <h1 className="text-2xl font-bold my-1">{children}</h1>;
//   // return <h1 className="text-xl md:text-2xl font-bold my-1">{props.children}</h1>;
// };

// const H2 = (  {children}: PropsWithChildren) => {
//   return <h2 className="text-xl font-bold my-1">{children}</h2>;
//   // return <h2 className="text-lg md:text-xl font-bold my-1">{children}</h2>;
// };

// const H3 = (  {children}: PropsWithChildren) => {
//   return <h3 className="text-lg font-bold my-1">{children}</h3>;
//   // return <h3 className="text-base md:text-lg font-bold my-1">{children}</h3>;
// };

// const H4 = (  {children}: PropsWithChildren) => {
//   return <h4 className="text-center">{children}</h4>;
// };

// const OL = (  {children}: PropsWithChildren) => {
//   return <ol className="list-decimal list-inside mx-2">{children}</ol>;
// };

// const UL = (  {children}: PropsWithChildren) => {
//   return <ul className="list-disc list-inside mx-2">{children}</ul>;
// };

// const LI = (  {children}: PropsWithChildren) => {
//   return <li className="">{children}</li>;
// };

// const P = (  {children}: PropsWithChildren) => {
//   return <p className="mb-2">{children}</p>;
// };

// // const PRE = (  {children}: PropsWithChildren) => {
// //   return <pre className="">{children}</pre>;
// // };


// const WorkingMessage = () => {
//   return (
//     <div className="flex py-2 mr-10 text-left items-end">
//       <MountainIcon size={30} className="mx-1 bg-white rounded-full p-0.5 shrink-0" />
//       <div
//         className={` bg-white rounded-r-xl rounded-t-xl self-center break-words`}
//       >
//         <div className="px-3 py-2 whitespace-normal">
//           <ChatTypingIndicator isTyping={true} />
//         </div>
//       </div>
//     </div>
//   );
// };
