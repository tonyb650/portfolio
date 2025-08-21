import Welcome from '@/features/about/Welcome'

const PreviewPage = () => {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-radial-[at_50%_00%] from-sky-400 to-blue-800">
        <Welcome width={1000} height={100} className='w-1/2'/>
    </main>
  )
}

export default PreviewPage