import React, {useState} from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link  from 'next/link';
import {GoogleLogin} from '@leecheuk/react-google-login';
import { AiFillHome, AiOutlineMenu  } from 'react-icons/ai';
import {ImCancelCircle } from 'react-icons/im'
import Discover from './Discover'
import SuggestedAccount from './SuggestedAccount'
import Footer from './Footer'

const Sidebar = () =>{ 
    const [showSidebar, setShowSidebar]= useState(true)
    const userProfile = false 

    const normalLink =  'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:jusify-center cursor-pointer font-semibold text-[#F51997] rounded'
    return (
        <div>
            <div 
             className='block xl:hidden m-2 ml-4 mt-3 text-xl '
             onClick={() => setShowSidebar((prev) => (!prev))}
             >
                {showSidebar ? <ImCancelCircle/> :
                <AiOutlineMenu />}
            </div>
            {showSidebar && (
                <div className='xl:w-40 w-20 flex-col justify-start mb-10 border-r-2 border-gray-100
                 xl:border-0 p-3'>
                    <div className='xl:border-b-2 border-gray-200 xl:pb-4'>
                        <Link href='/'>
                            <div className={normalLink}>
                                <p className='text-2xl'>
                                    <AiFillHome />
                                </p>
                                <span className='text-2xl hidden xl:block'>
                                for you
                                </span>
                                

                            </div>
                        </Link>
                        
                    </div>
                    {!userProfile && (
                        <div className='px-2 px-4 hidden xl:block'>
                            <p className='text-gray-400'>
                                log in to like comment on videos
                            </p>
                            <div className='pr-4'>
                                <GoogleLogin
                                    clientId=''
                                    render={(renderProps) => (
                                        <button
                                        className='cursor-pointer bg-white text-lg text-[#F51997] border-[1px] 
                                        border-[#F51997] front-semibold px-6 py-3 rounded-md 
                                        outline-none w-full mt-3 hover:text-white hover:bg[#F51997] '
                                        onClick={renderProps.onClick}
                                        disabled={renderProps.disabled} 
                                        >
                                          Log in
                                        </button >
                                    )
                                        
                                    }
                                    onSuccess={() => {}}
                                    onFailure={() => {}}
                                    cookiePolicy='single_host_origin'
                                 />

                            </div>
                        </div>
                    )}

                    <Discover/>
                    <SuggestedAccount/>
                    <Footer/>

                </div>
            )}
        </div>
    )
}

export default Sidebar 