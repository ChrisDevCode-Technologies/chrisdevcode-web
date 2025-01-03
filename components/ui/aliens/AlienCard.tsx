import Image from 'next/image'

interface AlienCardProps {
  name?: string
  role?: string
  description?: string
  imageUrl?: string
  ghUser?: string
}

const AlienCard = ({
  name = 'David Forren',
  role = 'Founder / CEO',
  description = 'I am an ambitious workaholic, but apart from that, pretty simple person.',
  imageUrl = 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
  ghUser = 'chrisdevcode',
}: AlienCardProps) => {
  return (
    <div className='flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-neutral-900 dark:border-neutral-700'>
      <div className='flex items-center gap-x-4'>
        <Image
          className='rounded-full size-20'
          src={imageUrl}
          width={80}
          height={80}
          alt={`Avatar of ${name}`}
        />
        <div className='grow'>
          <h3 className='font-medium text-gray-800 dark:text-neutral-200'>
            {name}
          </h3>
          <p className='text-xs uppercase text-gray-500 dark:text-neutral-500'>
            {role}
          </p>
        </div>
      </div>
      <p className='mt-3 text-gray-500 dark:text-neutral-500'>
        {description}
      </p>
      {/* Social Brands */}
      <div className='mt-3 space-x-1'>
        <a
          className='inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700'
          href={`https://github.com/${ghUser}.png`}
        >
          <svg
            className='shrink-0 size-3.5'
            xmlns='http://www.w3.org/2000/svg'
            width={16}
            height={16}
            fill='currentColor'
            viewBox='0 0 16 16'
          >
            <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
          </svg>
        </a>
       
      </div>
      {/* End Social Brands */}
    </div>
  )
}

export default AlienCard
