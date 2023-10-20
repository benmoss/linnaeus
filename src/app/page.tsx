import Image from 'next/image'

export default function Home() {
  return (
    <div className='min-h-screen overflow-hidden'>
      <div className='relative mt-16 overflow-hidden md:mt-18 bg-gradient-to-b from-gray-50 to-white'>
        <div className='relative pb-4'>
          <nav className='backdrop-filter backdrop-blur-xl border-b border-slate-900/5 z-10 bg-gray-50/90 fixed top-0 w-full'>
            nav here
          </nav>
          <main className='px-4 mx-auto mt-10 max-w-7xl sm:mt-14'>
            main here
          </main>
        </div>
      </div>
    </div>
  )
}
