// // import Wordle from "@/components/wordle_interview/Wordle"
// import { useState } from "react"



// const PlaygroundPage = () => {


// return (
//     <>
//       Nothing
//     </>
//   )
// }

// export default PlaygroundPage

// const GuessForm = ({onSubmit}: {onSubmit: (guess: string) => void}) => {

//   const [guess, setGuess] = useState<string[]>(["","","","",""])
//   const [g1, setG1] = useState<string>("")

//   console.log(guess)
//   console.log(guess[0])

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (guess?.join("").length === 5) {
//       onSubmit(guess?.join(""))
//     }
    
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//     <input type="text" value={g1} onChange={(e) => setG1(e.target.value)
//     } className="border rounded"/>

//     </form>
//   )
// }


// const GuessDisplay = ({word, guess}: {word: string, guess: string}) => {

//   // if the letter is a letter match but already used, how to handle

//   const letterStatuses: number[] = []
//   const wordUC = word.toUpperCase()
//   const guessUC = guess.toUpperCase()
//   for (let i = 0; i < 5; i++) {
//     if ( wordUC[i] === guessUC[i]) {
//       letterStatuses[i] = 2
//     } else if ( wordUC.includes(guessUC[i])) {
//       letterStatuses[i] = 1
//     } else {
//       letterStatuses[i] = 0
//     }
//   }

//   console.log(letterStatuses)

//   return (
//     <div className="space-x-3 flex flex-row">
//       {[...guess.toUpperCase()].map((l, i )=> (
//         <div key={i}>
//           { letterStatuses[i] === 2 ?
//           <PositionMatch letter={l}/>:
//           letterStatuses[i] === 1 ?
//           <LetterMatch letter={l}/> :
          
//           <NoMatch letter={l}/>
//         }
//         </div>
//       ))}
//     </div>
//   )
// }

// const NoMatch = ({letter}: {letter: string}) => {
//   return (
    
//     <div className="border w-6 flex justify-center rounded-sm">{letter}</div>
//   )
// }
// const LetterMatch = ({letter}: {letter: string}) => {
//   return (
//   <div className="border w-6 flex justify-center rounded-sm bg-yellow-300">{letter}</div>
//   )
// }
// const PositionMatch = ({letter}: {letter: string}) => {
//   return (
// <div className="border w-6 flex justify-center rounded-sm bg-green-500">{letter}</div>
//   )
// }
// const PlaceholderDisplay = () => {
//   return (
//     <div className="space-x-3 flex flex-row">
//       <div className="border w-6 flex justify-center rounded-sm ">?</div>
//       <div className="border w-6 flex justify-center rounded-sm ">?</div>
//       <div className="border w-6 flex justify-center rounded-sm ">?</div>
//       <div className="border w-6 flex justify-center rounded-sm ">?</div>
//       <div className="border w-6 flex justify-center rounded-sm ">?</div>
//     </div>
//   )
// }






// /*
//     {/* <div className="h-8 bg-[#D9B310]" >Gold Leaf</div> /}
//     <div className="h-8 bg-[#0B3C5d]" >Prussian Blue</div>
//     <div className="h-8 bg-[#328CC1]" >Sky Blue</div>
//     <div className="h-8 bg-[#1D2731]" >Ivory Black</div>
//     {/* <div className="h-8 bg-[#286DA8]" >Summer Sky</div>
//     <div className="h-8 bg-[#CD5360]" >Warm Peach</div>
//     <div className="h-8 bg-[#B37D4E]" >Field</div>
//     <div className="h-8 bg-[#438496]" >Breeze</div> /}
//     {/* <div className="h-8 bg-[#18121E]" >Navy Blue</div>
//     <div className="h-8 bg-[#233237]" >Gunmetal</div>
//     <div className="h-8 bg-[#984B43]" >Rusty Red</div> /}
//     <div className="bg-[#1D2731] text-gray-200">
//     <div className="h-8 bg-[#EAC67A]" >Warm Yellow</div>

//         {/* <Svg/> /}
//         {/* <Laptop/> /}
//         <Welcome/>
//         {/* <Bio/> /}
//         {/* <Circle/> /}


//       </div>

//  */