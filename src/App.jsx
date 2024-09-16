import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

import HomePage from '../src/pages/HomePage'
import MainLayout from './Layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import PagenotFound from './pages/PagenotFound'
import JobPage,{jobLoader} from './pages/JobPage'
import AddjobPage from './pages/AddjobPage'
import EditJobPage from './pages/EditJobPage'


const App = () => {
  //add new job
  const addJob=async(newJob)=>{
  const res=await fetch('/api/jobs',{
    method:'POST',
    headers:{
      'content-Type':'application/json'
    },
      body:JSON.stringify(newJob)
  })
    return;
  };

  //for delete
  const deleteJob=async(id)=>{
    const res=await fetch(`/api/jobs/${id}`,{
      method:'DELETE',
    })
      return;

  };
    //edit page
    const updateJob=async(job)=>{
      const res=await fetch(`/api/jobs/${job.id}`,{
        method:'PUT',
        headers:{
          'content-Type':'application/json'
        },
          body:JSON.stringify(job)
      })
        return;
    };
    const router=createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={< MainLayout />}>
      <Route index element={<HomePage />}/>
      <Route path='/jobs' element={< JobsPage />}></Route>
      <Route path='/jobs/:id' element={< JobPage deleteJob={deleteJob}/>}loader={jobLoader}></Route>
      <Route path='/edit-job/:id' element={< EditJobPage updateJobSubmit={updateJob}/>}loader={jobLoader}></Route>
      <Route path='/add-job' element={< AddjobPage addJobSubmit={addJob}/>}></Route>
      <Route path='*' element={<PagenotFound />}></Route>
      </Route>
      )
    );  
  return (
    <RouterProvider router={router}/>
  )
}

export default App;
