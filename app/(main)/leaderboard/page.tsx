import { FeedWrapper } from '@/components/feed-wrapper'
import { Promo } from '@/components/promo'
import { Quests } from '@/components/quests'
import { StickyWrapper } from '@/components/sticky-wrapper'
import { UserProgress } from '@/components/user-progress'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import {
  getTopTenUsers,
  getUserProgress,
  getUserSubscription
} from '@/db/queries'
import Image from 'next/image'
import { redirect } from 'next/navigation'

const LeaderboardPage = async () => {
  const userProgressData = getUserProgress()
  const userSubscriptionData = getUserSubscription()
  const topTenUsersData = getTopTenUsers()

  const [userProgress, userSubscription, topTenUsers] = await Promise.all([
    userProgressData,
    userSubscriptionData,
    topTenUsersData
  ])

  if (!userProgress || !userProgress.activeCourse) {
    redirect('/courses')
  }

  const isPro = !!userSubscription?.isActive

  return (
    <div className='flex flex-row-reverse gap-[48px] px-6'>
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={isPro}
        />
        {!isPro && <Promo />}
        <Quests points={userProgress.points} />
      </StickyWrapper>
      <FeedWrapper>
        <div className='flex w-full flex-col items-center'>
          <Image
            src='/leaderboard.png'
            alt='Leaderboard'
            height={90}
            width={90}
          />
          <h1 className='my-6 text-center text-2xl font-bold text-neutral-800 dark:text-white'>
            Marcador
          </h1>
          <p className='mb-6 text-center text-lg text-muted-foreground dark:text-white'>
            Vea su posición entre otros estudiantes de la comunidad.
          </p>
          <Separator className='mb-4 h-0.5 rounded-full' />
          {topTenUsers.map((userProgress, index) => (
            <div
              key={userProgress.userId}
              className='flex w-full items-center rounded-xl p-2 px-4 hover:bg-gray-200/50'
            >
              <p className='mr-4 font-bold text-lime-700'>{index + 1}</p>
              <Avatar className='ml-3 mr-6 h-12 w-12 border bg-green-500'>
                <AvatarImage
                  className='object-cover'
                  src={userProgress.userImageSrc}
                />
              </Avatar>
              <p className='flex-1 font-bold text-neutral-800 dark:text-white'>
                {userProgress.userName}
              </p>
              <p className='text-muted-foreground dark:text-white'>{userProgress.points} XP</p>
            </div>
          ))}
        </div>
      </FeedWrapper>
    </div>
  )
}

export default LeaderboardPage