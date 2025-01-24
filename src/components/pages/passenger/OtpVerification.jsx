import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../common/Logo'

const OtpVerification = () => {
  const navigate = useNavigate()
  const [otp, setOtp] = useState(['', '', '', ''])

  const handleChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)
      
      // Auto-focus next input
      if (value && index < 3) {
        document.getElementById(`otp-${index + 1}`).focus()
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/signup/passenger/details')
  }

  return (
    <div className="min-h-screen bg-purple-800 flex flex-col items-center">
      {/* Logo Section */}
      <div className="flex-1 flex items-center justify-center pt-6 pb-2">
        <Logo className="h-24 w-auto" />
      </div>

      {/* OTP Section */}
      <div className="w-full max-w-md bg-white rounded-[40px] p-8 mx-4 mb-8">
        <h1 className="text-3xl font-bold text-center text-purple-800 mb-8">
          Enter OTP
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="flex justify-center space-x-4 mb-8">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                className="w-12 h-12 text-center text-2xl font-bold 
                         border-2 border-purple-800 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50"
              />
            ))}
          </div>

          <button 
            type="submit"
            className="w-full py-3 text-xl font-semibold text-white bg-purple-800 
                     rounded-full transition-colors"
          >
            Confirm
          </button>
        </form>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <button 
            onClick={() => navigate('/signup/passenger')}
            className="text-purple-800 font-semibold text-lg"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  )
}

export default OtpVerification