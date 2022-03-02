import React from 'react'
import Feed from '../components/home/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

const style = {
  wrapper: `flex justify-center w-screen h-screen select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-2/3 flex justify-between`,
}

export default function Home() {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  )
}
