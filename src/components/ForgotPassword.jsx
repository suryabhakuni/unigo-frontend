import { useState } from 'react'
import { Link } from 'react-router-dom'
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
    <div className="min-h-screen bg-[#412160] flex flex-col items-center justify-center p-4">
        <div className="flex justify-center mb-4">
          <Logo className='h-40'/>
        </div>
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">


        <h1 className="text-2xl font-bold text-center text-[#4B0082] mb-8">
          Forgot Password
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            type="text"
            placeholder="Enter Email or Number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon={
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            }
          />

          <Button type="submit">Send</Button>
        </form>

        <div className="mt-8 text-center space-y-2">
          <p className="text-gray-600">
            Back to{' '}
            <Link to="/signin" className="text-[#4B0082] font-semibold">
              Sign In
            </Link>
          </p>
          
          <p className="text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-[#4B0082] font-semibold">
              Sign Up
            </Link>
          </p>
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <button className="w-12 h-12 rounded-full bg-[#4B0082] flex items-center justify-center">
            <span className="text-white">f</span>
          </button>
          <button className="w-12 h-12 rounded-full bg-[#4B0082] flex items-center justify-center">
            <span className="text-white">G</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword