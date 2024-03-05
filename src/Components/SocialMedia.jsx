import facebook from '../assets/images/icon-facebook.svg'

const SocialMedia = () => {
  return (
    <div className='flex h-[200px] bg-red-600'>
      <div className="">
        <img src={ facebook } alt="facebook" className='size-5'/>
        <p className='text-DarkTheme-DesaturatedBlueText text-[18px]'>@Abrotello</p>
      </div>
      <p className='text-DarkTheme-WhiteText text-6xl font-bold'>1987</p>
      <p className='text-DarkTheme-DesaturatedBlueText text-[18px] -tracking-normal'>FOLLOWERS</p>
      <p className='text-DarkTheme-DesaturatedBlueText text-[18px]'>12 Today</p>
    </div>
  )
}

export default SocialMedia