/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'

const style = {
  wrapper: `hover:text-purple-500 flex cursor-pointer items-center space-x-3`,
  svgText: `h-14 w-24 fill-[#04111D] pt-1 dark:fill-white`,
}

const Logo = () => {
  return (
    <div className={style.wrapper}>
      <Image src='/logo.jpg' width={70} height={70} />
     
    </div>
  )
}

export default Logo