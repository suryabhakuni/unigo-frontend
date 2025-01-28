
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdEmail, MdPhone } from 'react-icons/md'

const DriverSignUpChoice = () => {
  const navigate = useNavigate()
  const [mobileNumber, setMobileNumber] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const validateMobile = (mobile) => {
    return mobile.length === 10 && /^\d+$/.test(mobile)
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleMobileChange = (e) => {
    const value = e.target.value
    if (value === '' || /^\d+$/.test(value)) {
      setMobileNumber(value)
      setError('')
    }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    setError('')
  }

  const handleContinue = () => {
    if (!mobileNumber && !email) {
      setError('Please enter either mobile number or email')
      return
    }

    if (mobileNumber && !validateMobile(mobileNumber)) {
      setError('Please enter a valid 10-digit mobile number')
      return
    }

    if (email && !validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }

    navigate('/signup/driver/otp', { 
      state: { mobileNumber, email } 
    })
  }

  const handleBack = () => {
    navigate('/signup')
  }

  return (
    <div className="min-h-screen bg-purple-800 flex flex-col items-center">
      <div className="mt-4 sm:mt-6 md:mt-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-white text-center font-bold px-4">
          UniGo! Ride Sharing
        </h1>
      </div>

      <div className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-md mx-auto mt-6 sm:mt-8 px-4">
        <div className="bg-white rounded-3xl p-4 sm:p-6 md:p-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-purple-800 mb-6 sm:mb-8">
            Sign Up Using
          </h2>

          <div className="space-y-4 sm:space-y-6">
            <div className="relative">
              <MdPhone className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-purple-800" />
              <input
                type="text"
                maxLength={10}
                placeholder="Enter Mobile Number"
                value={mobileNumber}
                onChange={handleMobileChange}
                className="w-full pl-12 sm:pl-16 pr-4 sm:pr-6 py-3 sm:py-4 
                         text-base sm:text-lg font-semibold text-purple-800 
                         border-2 border-purple-800 rounded-full
                         focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50
                         placeholder:text-purple-800/60"
              />
            </div>

            <div className="text-purple-800 text-xl sm:text-2xl md:text-3xl font-semibold text-center">
              Or
            </div>

            <div className="relative">
              <MdEmail className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-purple-800" />
              <input
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={handleEmailChange}
                className="w-full pl-12 sm:pl-16 pr-4 sm:pr-6 py-3 sm:py-4 
                         text-base sm:text-lg font-semibold text-purple-800 
                         border-2 border-purple-800 rounded-full
                         focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50
                         placeholder:text-purple-800/60"
              />
            </div>

            {error && (
              <p className="text-red-500 text-xs sm:text-sm text-center mt-2">{error}</p>
            )}

            <button 
              onClick={handleContinue}
              className="w-full py-3 sm:py-4 text-base sm:text-lg md:text-xl 
                       font-semibold text-white bg-purple-800 rounded-full 
                       transition-colors hover:bg-purple-700"
            >
              Continue
            </button>
          </div>

          <div className="mt-6 sm:mt-8 text-center">
            <button 
              onClick={handleBack}
              className="text-purple-800 font-semibold text-base sm:text-lg 
                       hover:underline"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DriverSignUpChoice