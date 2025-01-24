import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdEmail, MdPhone } from 'react-icons/md'
import Logo from '../../common/Logo'

const SignUpChoice = () => {
  const navigate = useNavigate()
  const [mobileNumber, setMobileNumber] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const validateMobile = (mobile) => {
    // Check if it's exactly 10 digits
    if (mobile && (
      mobile.length !== 10 || 
      isNaN(mobile)
    )) {
      return false
    }
    return true
  }

  const validateEmail = (email) => {
    // Basic email validation
    if (email && (
      !email.includes('@') || 
      !email.includes('.') || 
      email.length < 5 ||
      email.startsWith('@') ||
      email.endsWith('@') ||
      email.startsWith('.') ||
      email.endsWith('.')
    )) {
      return false
    }
    return true
  }

  const handleMobileChange = (e) => {
    const value = e.target.value
    // Only allow numbers
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
    // If both fields are empty
    if (!mobileNumber && !email) {
      setError('Please enter either mobile number or email')
      return
    }

    // Validate mobile if entered
    if (mobileNumber && !validateMobile(mobileNumber)) {
      setError('Please enter a valid 10-digit mobile number.')
      return
    }

    // Validate email if entered
    if (email && !validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }

    // If validation passes, proceed to OTP page
    navigate('/signup/passenger/otp', { 
      state: { 
        mobileNumber,
        email
      } 
    })
  }

  return (
    <div className="min-h-screen bg-purple-800 flex flex-col items-center">
      <div className="flex-1 flex items-center justify-center">
        <Logo className="h-40 w-auto" />
      </div>

      <div className="w-full max-w-md bg-white rounded-[40px] p-8 mx-4 mb-12">
        <h1 className="text-4xl font-bold text-center text-purple-800 mb-10">
          Sign Up Using
        </h1>

        <div className="space-y-6">
          <div className="relative">
            <MdPhone className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-purple-800" />
            <input
              type="text"
              maxLength={10}
              placeholder="Enter Mobile Number"
              value={mobileNumber}
              onChange={handleMobileChange}
              className="w-full pl-16 pr-6 py-4 text-lg font-semibold
                       text-purple-800 border-2 border-purple-800 rounded-full
                       focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50
                       placeholder:text-purple-800/60"
            />
          </div>

          <div className="text-center text-purple-800 text-3xl font-semibold">Or</div>

          <div className="relative">
            <MdEmail className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-purple-800" />
            <input
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={handleEmailChange}
              className="w-full pl-16 pr-6 py-4 text-lg font-semibold
                       text-purple-800 border-2 border-purple-800 rounded-full
                       focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50
                       placeholder:text-purple-800/60"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center font-medium">{error}</p>
          )}

          <button 
            onClick={handleContinue}
            className="w-full py-4 text-xl font-semibold text-white bg-purple-800 
                     rounded-full transition-colors mt-6"
          >
            Continue
          </button>
        </div>

        <div className="mt-8 text-center">
          <button 
            onClick={() => navigate('/signup')}
            className="text-purple-800 font-semibold text-lg"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignUpChoice