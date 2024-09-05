import IdeaIcon from '../IdeaIcon'
import SplitWord from '../SplitWord'

const AtelierIntro = () => {
  return (
    <section className="flex flex-col gap-6">
      <SplitWord word="Atelier" />
      <div className="w-full h-[1px] bg-ag-ash opacity-20"></div>

      <div className="atelier-meaning w-full flex flex-col gap-2 bg-ag-gray p-4">
        <div className="w-full flex items-start gap-4">
          <IdeaIcon brown className={'scale-150'} />

          <div className="flex flex-col gap-0">
            <h2 className='text-lg leading-[1rem]'>atelier</h2>
            <p className='text-gray-500'>/əˈtɛlɪeɪ/</p>
          </div>

        </div>

        <div className="w-full flex flex-col gap-0">
          <p className='text-gray-500 italic'>noun</p>
          <p className='meaning'>A workshop or studio, especially one used by an artist or designer.</p>
        </div>

      </div>
    </section>
  )
}

export default AtelierIntro
