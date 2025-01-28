import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUser, FaLock, FaFacebookF, FaGoogle } from 'react-icons/fa'
import Logo from './common/Logo'

const SignIn = () => {
  const [formData, setFormData] = useState({
    emailOrNumber: '',
    password: '',
    acceptTerms: false
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-purple-800 flex flex-col items-center p-4 sm:p-6 md:p-8">
      {/* Logo */}
      <div className="flex justify-center pt-2 sm:pt-3 md:pt-4 mb-4 sm:mb-6">
        <Logo className="h-24 sm:h-32 md:h-40 w-auto" />
      </div>

      {/* Login Card */}
      <div className="bg-white w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] 
                    rounded-3xl p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold text-purple-800 
                     mb-4 sm:mb-6 md:mb-8">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-3 sm:left-4 flex items-center">
              <FaUser className="w-5 h-5 sm:w-6 sm:h-6 text-purple-800" />
            </div>
            <input
              type="text"
              placeholder="Email or Number"
              value={formData.emailOrNumber}
              onChange={(e) => setFormData({ ...formData, emailOrNumber: e.target.value })}
              className="w-full pl-12 sm:pl-14 pr-4 py-2.5 sm:py-3 rounded-full 
                       border-2 border-purple-800 outline-none text-purple-800 
                       placeholder-purple-800 text-sm sm:text-base"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-3 sm:left-4 flex items-center">
              <FaLock className="w-5 h-5 sm:w-6 sm:h-6 text-purple-800" />
            </div>
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full pl-12 sm:pl-14 pr-4 py-2.5 sm:py-3 rounded-full 
                       border-2 border-purple-800 outline-none text-purple-800 
                       placeholder-purple-800 text-sm sm:text-base"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              checked={formData.acceptTerms}
              onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
              className="w-4 h-4 rounded border-2 border-purple-800 text-purple-800"
            />
            <label htmlFor="terms" className="ml-2 text-xs sm:text-sm text-purple-800">
              Accept all terms and conditions
            </label>
          </div>

          <button 
            type="submit"
            className="w-full bg-purple-800 text-white py-2.5 sm:py-3 
                     text-base sm:text-lg rounded-full 
                     hover:bg-purple-800/90 transition-colors"
          >
            Submit
          </button>
        </form>

        <div className="mt-2 sm:mt-3 text-right">
          <Link to="/forgot-password" className="text-purple-800 text-xs sm:text-sm">
            Forgot Password
          </Link>
        </div>

        <div className="mt-4 sm:mt-6 text-center border-t border-gray-200 pt-4 sm:pt-6">
          <p className="text-purple-800 text-xs sm:text-sm mb-1">
            Don&apos;t have an account?
          </p>
          <Link to="/signup" className="text-purple-800 text-base sm:text-lg font-semibold">
            Sign Up
          </Link>
        </div>

        <div className="mt-4 sm:mt-6 flex justify-center space-x-4">
          <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-800 
                         flex items-center justify-center transition-transform hover:scale-105">
            <FaFacebookF className="text-white text-base sm:text-lg" />
          </button>
          <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-800 
                         flex items-center justify-center transition-transform hover:scale-105">
            <FaGoogle className="text-white text-base sm:text-lg" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignIn