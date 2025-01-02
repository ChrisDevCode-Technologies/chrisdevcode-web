const NotHiring = () => {
  return (
    <a
      className='col-span-full lg:col-span-1 group flex flex-col justify-center text-center rounded-xl p-4 md:p-6 border border-dashed border-gray-200 hover:shadow-sm focus:outline-none focus:shadow-sm dark:border-neutral-700'
      href='#'
    >
      <h3 className='text-lg text-gray-800 dark:text-neutral-200'>
        Not Hiring!
      </h3>
      <div>
        <span className='inline-flex items-center gap-x-2 text-blue-600 group-hover:text-blue-700 group-focus:text-blue-700 dark:text-blue-500 dark:group-hover:text-blue-400 dark:group-focus:text-blue-400'>
          But You can Hire Us ...
          <svg
            className='shrink-0 size-4'
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='m9 18 6-6-6-6' />
          </svg>
        </span>
      </div>
    </a>
  )
}

export default NotHiring
