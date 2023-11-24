// 'use client'

import React, { useState } from 'react'

import { Radio } from '@/types'
import Link from 'next/link'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import Image from 'next/image'
import ReactAudioPlayer from 'react-audio-player'
import { useRouter } from 'next/navigation'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { ThumbsUp } from 'lucide-react'

interface RadioCard {
  product: Radio
}

const RadioCard: React.FC<RadioCard> = ({ product }) => {
  // const [url, setUrl] = useState('')
  // const router = useRouter()

  // const handleClick = () => {
  //   setUrl(product.Source1)
  // }

  // const handleClearUrl = () => {
  //   setUrl('')
  // }

  // console.log(items)

  return (
    <Link
      href={product.radio_url}
      // href=''
      className='outline-0 ring-primary transition duration-300 rounded-none'
      target='_blank'
    >
      <Card
        className='border-2 shadow-sm hover:shadow-md dark:shadow-slate-500 rounded-none w-[200px]'
        // onClick={() => setUrl(product.radio_url)}
        // onClick={() => router.push(product.radio_url)}
      >
        <CardContent className='p-1'>
          <div className='w-[190px] h-[100px] relative bg-foreground/5 dark:bg-background '>
            <Image
              // src='https://images.unsplash.com/photo-1598743400863-0201c7e1445b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              src={product.radio_image}
              alt={product.radio_name}
              fill
              // width={300}
              // height={150}
              // onClick={handleClick}
              className='object-contain rounded-lg transition-all duration-300'
            />
          </div>
        </CardContent>
        <CardFooter className='flex-col items-start p-2'>
          <div className='flex flex-col gap-2'>
            {/* <p className='font-semibold text-sm'>
              {product.radio_name.length > 23
                ? product.radio_name.slice(0, 23) + '...'
                : product.radio_name}
            </p> */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className='font-semibold text-sm'>
                  {product.radio_name.length > 20
                    ? product.radio_name.slice(0, 20) + '...'
                    : product.radio_name}
                </TooltipTrigger>
                <TooltipContent>
                  <p>{product.radio_name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            {/* <audio
              src={product.radio_url}
              controls
              className='mx-auto w-full'
            /> */}
            {/* <ReactAudioPlayer
              // src={url}
              // autoPlay
              autoPlay={url ? true : false}
              controls
              className='player w-[250px]'
              onPause={handleClearUrl}
              crossOrigin='Origin, X-Requested-With, Content-Type, Accept'
            /> */}

            <p className='text-sm text-primary/80'>Genre: {product.genre}</p>
          </div>
          {/* <div className='flex items-center justify-between'>{product.price}</div> */}
        </CardFooter>
      </Card>
    </Link>
  )
}

export default RadioCard
