/* eslint-disable react/no-unescaped-entities */
const Features = () => {
  return (
    <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
      <div className='max-w-2xl mx-auto'>
        {/* Grid */}
        <div className='grid gap-12'>
          <div>
            <h2 className='text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white'>
              Why are we even doing this thing?
            </h2>
            <p className='mt-3 text-gray-800 dark:text-neutral-400'>
              Well, not for money(at least). C A has worked in the NGO industry for just 5 years, and he can testify first hand that data is everything. Well, verified data is crucial to making informed decisions, and investments from donor organizations. And that is why we are building this tool. To help organizations that are data driven to collect and verify structured data, analyze it, and make data driven decisions.
            </p>
          </div>
          <div className='space-y-6 lg:space-y-10'>
            {/* Icon Block */}
            <div className='flex gap-x-5 sm:gap-x-8'>
            <svg
                className='shrink-0 mt-2 size-6 text-gray-800 dark:text-white'
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
                <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
                <circle cx={9} cy={7} r={4} />
                <path d='M22 21v-2a4 4 0 0 0-3-3.87' />
                <path d='M16 3.13a4 4 0 0 1 0 7.75' />
              </svg>
              <div className='grow'>
                <h3 className='text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200'>
                  People Data
                </h3>
                <p className='mt-1 text-gray-600 dark:text-neutral-400'>
                  This is sensitive and most crucial data to organizations. It is important to have a tool that can help organizations to collect, verify and analyze this data. This is the backbone of the People Workbook, it comes in handy to track progress of all projects and activities by organizations. Getting true Insights, even at individual level. Users will be able to track an individual's progress in a project, and even the organization's progress in a project.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className='flex gap-x-5 sm:gap-x-8'>
              <svg
                className='shrink-0 mt-2 size-6 text-gray-800 dark:text-white'
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
                <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
                <circle cx={9} cy={7} r={4} />
                <path d='M22 21v-2a4 4 0 0 0-3-3.87' />
                <path d='M16 3.13a4 4 0 0 1 0 7.75' />
              </svg>
              <div className='grow'>
                <h3 className='text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200'>
                  Projects and Activities
                </h3>
                <p className='mt-1 text-gray-600 dark:text-neutral-400'>
                  This tool allows organizations to track progress of all projects and activities. Getting true Insights, even at individual level. Users will be able to track an individual's progress in a project, and even the organization's progress in a project. This modules works hand in hand with the People Data module, making sure people involved in the projects are from the organization's database, reducing time for outreach and improving impact tracking per projecty/activity and per individual.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className='flex gap-x-5 sm:gap-x-8'>
              <svg
                className='shrink-0 mt-2 size-6 text-gray-800 dark:text-white'
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
                <path d='M7 10v12' />
                <path d='M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z' />
              </svg>
              <div className='grow'>
                <h3 className='text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200'>
                  Simple and all-inclusive
                </h3>
                <p className='mt-1 text-gray-600 dark:text-neutral-400'>
                  We suffer so organization don't. We make it easy for the workbook user to easily see who benefited from what project, who did not benefit from what projecy and why. This is a simple tool that is all inclusive, it is not only for the data analyst, but also for the project manager, the field officer, the donor, the beneficiary and the organization's leadership. It is a tool that is easy to use, and easy to understand.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
          </div>
        </div>
        {/* End Grid */}
      </div>
    </div>
  )
}

export default Features
