import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { data } from 'react-router-dom';

function App() {

let [user,setUser]=useState([]);

const userUrl="https://dummyjson.com/users"

let fetchUser=async()=>{
  try{
    const Res= await fetch(userUrl);
    if(!Res.ok) throw new Error("problem to fetch data")
      const Data = await Res.json();
  setUser(Data.users)
 console.log(Data.users)
  }catch(error){
    
  }
}
useEffect(()=>{
  fetchUser()

},[])
 console.log(user)

  return (
    <>
  <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-7xl flex-1">
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-700 px-6 py-4 rounded-xl bg-white dark:bg-background-dark shadow-sm">
              <div className="flex items-center gap-4 text-gray-800 dark:text-gray-200">
                <span className="material-symbols-outlined text-3xl text-primary">group</span>
                <h1 className="text-xl font-bold leading-tight tracking-tight">Users Dashboard</h1>
              </div>

              <div className="flex items-center gap-4">
                <label className="relative flex flex-col w-64">
                  <div className="flex w-full flex-1 items-stretch rounded-lg h-10">
                    <span className="material-symbols-outlined text-gray-500 dark:text-gray-400 flex items-center justify-center pl-3">search</span>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-800 dark:text-gray-200 focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-background-light dark:bg-gray-800 h-full placeholder:text-gray-500 dark:placeholder:text-gray-400 px-2 text-sm font-normal"
                      placeholder="Search users..."
                    />
                  </div>
                </label>

                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-semibold leading-normal tracking-wide hover:bg-primary/90 transition-colors">
                  <span className="material-symbols-outlined mr-2 text-lg">filter_list</span>
                  <span className="truncate">Filter</span>
                </button>

                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                  data-alt="User avatar"
                  style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCSYIOQpLc1bKdPtjHMUzP6XThGSSoK5E45eSw8eqRMT2WTpqHKXX1r2OrGG-n0oG50uLPg6T3ec0fyjHBcCRLGuLeOAgphWgWB9Rc0FbnaGcKvbKgJyhBRV-Fo_jG3JXH23bmtZCveHRRpwv0OJV0w7NcbN7klr50oHNQza1QHDBMcgNTDSil9rr0x15Lmy9nYjqn4x-jeWW-bK0XYp3ZgAMOnfSyHcJUlsxZzODmn-mIHZGU90zS_XSs28sogrqw0-4FisfQCGVre ")` }}
                />
              </div>
            </header>

            <main className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
                {
                  user.length>0?
                
               user.map((user, idx) => (
                  <div key={idx} className="flex flex-col gap-3 text-center pb-4 bg-white dark:bg-gray-800/50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                    <div className="p-4">
                      <div
                        className="w-24 h-24 mx-auto bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                        style={{ backgroundImage: `url(${user.image})` }}
                      />
                    </div>
                    <div className="px-4">
                      <p className="text-gray-800 dark:text-white text-lg font-semibold leading-normal">{user.firstName}</p>
                      <p className="text-primary text-sm font-medium leading-normal">{user.age}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal mt-1">{user.role}</p>
                    </div>
                  </div>
                )):null}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
     
    </>
  )
}

export default App
