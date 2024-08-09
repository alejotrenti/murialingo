import Image from 'next/image'
import { redirect } from 'next/navigation'

import { FeedWrapper } from '@/components/feed-wrapper'
import { StickyWrapper } from '@/components/sticky-wrapper'
import {UserProgress} from '@/components/user-progress'
import { getUserProgress, getUserSubscription } from '@/db/queries'
import { quests } from '@/constants'
import { Progress } from '@/components/ui/progress'
import { Promo } from '@/components/promo'
import { Quests } from '@/components/quests'

const QuestsPage = async () => {
  const userProgressData = getUserProgress()
  const userSubscriptionData = getUserSubscription()

  const [userProgress, userSubscription] = await Promise.all([
    userProgressData,
    userSubscriptionData
  ])

  if (!userProgress || !userProgress.activeCourse) {
    redirect('/courses')
  }

  const isPro = !!userSubscription?.isActive

  return (
    <div className='flex flex-row-reverse gap-[48px] px-6 dark:text-white'>
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={isPro}
        />
        {!isPro && <Promo />}
      </StickyWrapper>
      <FeedWrapper>
        <div className='flex w-full flex-col items-center'>
          <Image src='/quests.png' alt='Quests' height={90} width={90} />
          <h1 className='my-6 text-center text-2xl font-bold text-neutral-800 dark:text-white'>
            Tareas
          </h1>
          <p className='mb-6 text-center text-lg text-muted-foreground'>
            Completa las tareas ganando experiencia.
          </p>
          <ul className='w-full'>
            {quests.map(quest => {
              const progress = (userProgress.points / quest.value) * 100

              return (
                <div
                  className='flex w-full items-center gap-x-4 border-t-2 p-4'
                  key={quest.title}
                >
                  <Image
                    src='/points.png'
                    alt='Points'
                    width={60}
                    height={60}
                  />
                  <div className='flex w-full flex-col gap-y-2' >
                    <p className='text-xl font-bold text-neutral-700 dark:text-white'>
                      {quest.title}
                    </p>
                    <Progress value={progress} className='h-3' />
                  </div>
                </div>
              )
            })}
          </ul>
        </div>
      </FeedWrapper>
    </div>
  )
}

export default QuestsPage
