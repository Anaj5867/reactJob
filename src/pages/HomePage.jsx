import React from 'react'
import Hero from '../components/Hero'
import HomeCard from '../components/HomeCard'
import JobListings from '../components/JobListings'
import ViewallJobs from '../components/ViewallJobs'

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCard />
      <JobListings isHome='true' />
      <ViewallJobs />
    </>
  )
}

export default HomePage
