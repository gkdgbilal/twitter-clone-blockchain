import React from 'react'
import { BsStars } from 'react-icons/bs'
import Post from '../Post'
import TweetBox from './TweetBox'

const style = {
  wrapper: `flex-[2] border-r border-l border-[#38444d]`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

const tweets = [
  {
    displayName: 'John Doe',
    username: 'johndoe',
    avatar: 'https://picsum.photos/200/300',
    text: 'Gm',
    isProfileImageNft: false,
    timestamp: '2022-03-02T12:00:00.000Z',
  },
  {
    displayName: 'John Doe',
    username: 'johndoe',
    avatar: 'https://picsum.photos/201/300',
    text: 'Gm',
    isProfileImageNft: false,
    timestamp: '2020-01-01T12:00:00.000Z',
  },
  {
    displayName: 'John Doe',
    username: 'johndoe',
    avatar: 'https://picsum.photos/202/310',
    text: 'Gm',
    isProfileImageNft: false,
    timestamp: '2020-01-01T12:00:00.000Z',
  },
]

export default function Feed() {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStars />
      </div>
      <TweetBox />
      {tweets.map((tweet, index) => (
        <Post
          key={index}
          displayName={tweet.displayName}
          username={`${tweet.username.slice(0, 4)}...${tweet.username.slice(
            -4
          )}`}
          avatar={tweet.avatar}
          text={tweet.text}
          isProfileImageNft={tweet.isProfileImageNft}
          timestamp={tweet.timestamp}
        />
      ))}
    </div>
  )
}
