import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaGoogle } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Logo from './common/Logo'
import Button from './common/Button'
import Input from './common/Input'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle password reset
  }

  return (
    <div className="min-h-screen bg-purple-800 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="flex justify-center mb-4 sm:mb-6">
        <Logo className="h-28 sm:h-32 md:h-40"/>
      </div>
      <div className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-md bg-white rounded-3xl shadow-lg p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-center text-purple-800 mb-6 sm:mb-8">
          Forgot Password
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <Input
            type="text"
            placeholder="Enter Email or Number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon={<MdEmail className="w-5 h-5 sm:w-6 sm:h-6 text-purple-800" />}
          />

          <Button type="submit" className="text-sm sm:text-base">Send</Button>
        </form>

        <div className="mt-6 sm:mt-8 text-center space-y-2">
          <p className="text-gray-600 text-sm sm:text-base">
            Back to{' '}
            <Link to="/signin" className="text-purple-800 font-semibold">
              Sign In
            </Link>
          </p>
          
          <p className="text-gray-600 text-sm sm:text-base">
            Don&apos;t have an account?{' '}
            <Link to="/signup" className="text-purple-800 font-semibold">
              Sign Up
            </Link>
          </p>
        </div>

        <div className="mt-6 sm:mt-8 flex justify-center space-x-4">
          <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-800 flex items-center justify-center">
            <FaFacebookF className="text-white text-lg sm:text-xl" />
          </button>
          <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-800 flex items-center justify-center">
            <FaGoogle className="text-white text-lg sm:text-xl" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword