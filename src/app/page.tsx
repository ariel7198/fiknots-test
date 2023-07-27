import Image from 'next/image'
import Header from './components/Header'
import style from './components/style/Index.module.css'

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center content-center justify-between">
      <Header />
      <div className={`${style.hero} flex flex-col justify-center w-screen`}>
        <div className={`${style.heroBg} flex flex-col justify-center w-screen items-center min-w-xl`}>
          <div className="container min-h-[100vh] ">
            <div className='columns-2 min-h-[70vh] flex justify-center items-center content-center px-8'>
              <div className='flex items-end content-center min-h-[300px] px-5'> 
                <h1 className='text-white	font-bold sm:text-3xl md:text-5xl lg:text-6xl'>
                    Find NFT Game Scholarship or
                    Lend your Gaming NFT with FiKNOTS. 
                </h1>
              </div>
              <div className='flex items-end px-5 min-h-[300px]'> 
                <h3 className='text-black font-bold md:text-base sm:text-sm'> FiKNOTS is a platform that allows gamers to find NFT Game Scholarship and various other GameFi gaming jobs; 
                  as well as NFT owners to lend their NFT and offer Scholarships for a shared profit.
                </h3>
              </div>
            </div>
            <div className="flex justify-end"> 
              <Image 
                src="/fiknots-text.png"
                alt='fiknots-text'
                width={900}
                height={160}
              />
            </div>
            <div className={`${style.heroActions} flex flex-col justify-center items-center min-h-[40vh] bg-white/90 m-5`}> 
                <div>
                  <button className={`${style.btnWallet} bg-fiknots-yellow btn-lg btn-wide rounded-full m-3`}> 
                    <p className='text-black font-bold'> Connect Wallet to Start </p>
                  </button>
                </div>
                <div>
                  <button className={`${style.btnHero} btn-lg rounded-full m-3`}>
                    <p className='text-black font-bold'> <span className='text-fiknots-yellow'> Find </span> a Gaming Job </p>
                  </button>
                  <button className={`${style.btnHero} btn-lg rounded-full m-3`}>
                    <p className='text-black font-bold'> <span className='text-fiknots-orange'> Post </span> a Gaming Job </p>  
                  </button>
                </div>
                
        </div>
          </div>
          
        </div>
        
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        
      </div>
      <button className="btn">Button</button>


      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
