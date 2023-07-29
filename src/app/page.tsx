import Image from 'next/image'
import Header from './components/Header'
import style from './components/style/Index.module.css'
import ParameterCards from './components/ParametersCard'

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center content-center justify-between">
      <Header />
      <div className={`${style.gradientContainer}`}>
        <div className={`${style.hero} flex flex-col justify-center w-screen`}>
          <div className={`${style.heroBg} flex flex-col justify-center w-screen items-center min-w-xl`}>
            <div className="container min-h-[100vh] flex flex-col justify-center items-center">
              <div className='columns-2 min-h-[60vh] max-w-[80%] flex justify-center items-center content-center px-8'>
                <div className='flex items-end content-center min-h-[300px] px-5'> 
                  <h1 className='text-white	font-bold sm:text-3xl md:text-4xl lg:text-5xl'>
                      Find NFT Game Scholarship or
                      Lend your Gaming NFT with FiKNOTS. 
                  </h1>
                </div>
                <div className='flex items-end px-5 min-h-[300px]'> 
                  <h3 className='text-black font-bold lg:text-lg sm:text-sm'> FiKNOTS is a platform that allows gamers to find NFT Game Scholarship and various other GameFi gaming jobs; 
                    as well as NFT owners to lend their NFT and offer Scholarships for a shared profit.
                  </h3>
                </div>
              </div>
              <div className="flex justify-end min-w-[100vw]"> 
                <Image 
                  src="/fiknots-text.png"
                  alt='fiknots-text'
                  width={900}
                  height={160}
                />
              </div>
              <div className={`${style.heroActions} flex flex-col min-w-[80%] justify-center items-center min-h-[30vh] bg-white/90 m-5`}> 
                  <div>
                    <button className={`${style.btnWallet} bg-[#FFD74A] btn-lg btn-wide rounded-full m-3 min-w-[400px]`}> 
                      <p className='text-black font-bold'> Connect Wallet to Start </p>
                    </button>
                  </div>
                  <div>
                    <button className={`${style.btnHero} btn-lg rounded-full m-3 min-w-[300px]`}>
                      <p className='text-black font-bold'> <span className='text-fiknots-yellow'> Find </span> a Gaming Job </p>
                    </button>
                    <button className={`${style.btnHero} btn-lg rounded-full m-3 min-w-[300px]`}>
                      <p className='text-black font-bold'> <span className='text-fiknots-orange'> Post </span> a Gaming Job </p>  
                    </button>
                  </div>
                  
              </div>
              <div className="flex items-center content-center justify-center min-h-[200px]"> 
                <h2 className='text-6xl font-bold'> Game Plan </h2> 
              </div>
            </div>
            
          </div>
          
        </div>
        <div className={`${style.gamePlanContainer} min-w-screen min-h-screen`}>
          
          <div className={`${style.infoContainer} min-h-screen flex flex-col flex-wrap justify-center py-16`}>
            <div className="flex items-center content-center justify-center"> 
                <Image 
                  className='-mb-16 z-10'
                  src="/gameplan/jobs-before.svg"
                  alt="arrow-left"
                  width={195}
                  height={200}
                />
                <div className={`${style.cardJobs} card bg-white p-4 px-8 flex flex-col items-center content-center justify-center`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="#F6851B" className="w-14 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>

                 <h5 className='font-bold text-2xl'> Jobs </h5> 
                </div>
                <Image 
                  className='-mb-16 z-10'
                  src="/gameplan/jobs-after.svg"
                  alt="arrow-right"
                  width={195}
                  height={200}
                />
              
            </div>
            <div className="flex items-center content-center justify-center"> 
              <div className={`${style.cardShadow} card bg-[#FEF9F1] p-6 flex flex-col items-center content-center justify-center max-w-[320px]`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FFD74A" className="w-14 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>

                 <h5 className='font-bold text-2xl mt-2'> Scholar </h5>
                 <h6 className='mb-4 text-[#888888] font-medium'> (GameFi Player) </h6> 
                 <ul>
                  <li className='flex items-center content-center my-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FFD74A" className="w-6 h-6 shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                    <span className='font-bold mx-3 text-sm grow-0'> Find and apply any GameFi gaming jobs that suits you.</span>
                  </li>
                  <li className='flex items-center content-center my-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FFD74A" className="w-6 h-6 shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                    <span className='font-bold mx-3 text-sm grow-0'> Get scouted and receive offers for gaming jobs.</span>
                  </li>
                  
                  <li className='flex items-center content-center my-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FFD74A" className="w-6 h-6 shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                    <span className='font-bold mx-3 text-sm grow-0'> Find and make connections with trustworthy managers. </span>
                  </li>
                 </ul>
              </div>
              <div className='flex flex-col justify-between min-h-[320px]'>
                <Image 
                  className='z-10'
                  src="/gameplan/scout-arrow.svg"
                  alt="arrow-right"
                  width={180}
                  height={200}
                />
                <Image 
                  className='z-10 -mb-5'
                  src="/gameplan/build-trust-arrow.svg"
                  alt="arrow-right"
                  width={180}
                  height={200}
                />
              </div>
              <div className={`${style.cardShadow} card bg-[#EFF6FE] p-6 flex flex-col items-center content-center justify-center max-w-[320px]`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#17A4F3" className="w-14 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                  </svg>

                 <h5 className='font-bold text-2xl mt-2'> Manager </h5>
                 <h6 className='mb-4 text-[#888888] font-medium'> (GameFi Player) </h6> 
                 <ul>
                  <li className='flex items-center content-center my-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#17A4F3" className="w-6 h-6 shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                    <span className='font-bold mx-3 text-sm grow-0'> Create a job posting by lending your NFT. </span>
                  </li>
                  <li className='flex items-center content-center my-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#17A4F3" className="w-6 h-6 shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                    <span className='font-bold mx-3 text-sm grow-0'> Find and offer jobs to potential GameFi players. </span>
                  </li>
                  
                  <li className='flex items-center content-center my-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#17A4F3" className="w-6 h-6  shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                    <span className='font-bold mx-3 text-sm grow-0'> Keep track and manage your jobs and scholars easily. </span>
                  </li>
                 </ul>
              </div>
            </div>
            <p className='text-center text-sm font-bold mt-7'>Mutual Review, <br/> Verified User (Requires KYC) </p>
          </div>
        </div>
      </div>
      <div className={`${style.parametersContainer} w-screen flex flex-col items-center content-center`}>
          <div> <h2 className='text-6xl font-bold my-[50px]'> Parameters </h2> </div>
          <div className="flex flex-row items-center content-center my-6">
            <ParameterCards 
              value="1.6"
              unit="million"
              title="Listed Jobs"
              description="available to apply"
              colorClass="text-fiknots-blue"
            />
            <ParameterCards 
              value="23"
              unit="million"
              title="Matches"
              description="made in the last 30 days"
              colorClass="text-fiknots-orange"
            />
            <ParameterCards 
              prefix="$"
              value="3.2"
              unit="billion"
              title="Profit"
              description="made through Fiknots"
              colorClass="text-fiknots-yellow"
            />
          </div>
          <div className="container p-8 max-w-[70%]">
            <div className="divider"> 
            </div>
            <p className='text-3xl font-bold my-2 px-3'>GameFi Scholarship is more than just “renting” NFT to play game. <br/> 
              With the increasing popularity of GameFi, 
              creating a safe and sustainable gaming job market requires effective communication, coaching, 
              and trust, much like in real-life job market.</p>
              <p className='text-4xl font-bold my-3 px-3'>And that is why we build FiKNOTS.</p>
              <div className="divider"> </div>
              <p className='px-3'> Whether you are a solo player or a guild member, beginner or expert, everyone can instantly find a gaming job as a Scholar, 
                or post gaming job as a Manager just by connecting your wallet. <br/> 

                Have fun playing games, 
                earn crypto tokens, build communications and exchange ideas with other Scholars and Managers in a world-wide GameFi community.</p>
          </div>
          <div className="container flex items-center justify-center">
              <button className={`${style.btnHero} btn-lg btn-wide rounded-full m-3`}>
                <p className='text-black font-bold'> <span className='text-fiknots-yellow'> Find </span> a Gaming Job </p>
              </button>
              <button className={`${style.btnHero} btn-lg btn-wide rounded-full m-3`}>
                <p className='text-black font-bold'> <span className='text-fiknots-orange'> Post </span> a Gaming Job </p>  
              </button>
          </div>
          <div className='p-16'>
            <Image 
              src="/fiknots.svg"
              alt="logo"
              height={400}
              width={200}
            />
          </div>
        </div>
        

    </main>
  )
}
