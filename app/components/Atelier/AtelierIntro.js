import Image from 'next/image'
import IdeaIcon from '../IdeaIcon'
import ScrollAnimationWrapper from '../ScrollAnimationWrapper'
import SplitWord from '../SplitWord'

const AtelierIntro = () => {
  return (
    <section className="flex flex-col items-center gap-12">
      <div className="w-full flex items-center justify-center gap-9 mt-6 overflow-visible relative">
        <SplitWord word="Atelier" className='hidden md:flex' />
        <ScrollAnimationWrapper variant='slideInBottom'>
          <h1
            className="md:hidden font-bold bg-[url('/images/montage.webp')] bg-clip-text bg-cover bg-center text-transparent"
          >Atelier</h1>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper className="image hidden md:flex w-auto h-64 aspect-[21/4] overflow-hidden absolute -z-10">
          <Image 
            alt="ambient graphics studio" 
            src="/images/montage.webp" 
            width={100} 
            height={100}
            className='hover:scale-125 opacity-40' 
          />
        </ScrollAnimationWrapper>
      </div>

      <div className="w-full h-[1px] bg-ag-ash opacity-20"></div>

      <div className="atelier-meaning w-full md:w-3/4 flex flex-col gap-2 bg-ag-gray p-4">
        <div className="w-full flex items-start gap-4">
          <IdeaIcon brown className={'scale-150'} />

          <div className="flex flex-col gap-0">
            <h2 className="text-lg leading-[1rem]">atelier</h2>
            <p className="text-gray-500">/əˈtɛlɪeɪ/</p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-0">
          <p className="text-gray-500 italic">noun</p>
          <p className="meaning">
            A workshop or studio, especially one used by an artist or designer.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AtelierIntro
