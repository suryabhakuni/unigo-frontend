
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
      <div className="flex justify-center mt-4 sm:mt-6 md:mt-8 mb-4 sm:mb-6">
        <Logo className="h-20 sm:h-24 md:h-28 w-auto" />
      </div>

      {/* OTP Section */}
      <div className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-md mx-auto px-4 mb-6 sm:mb-8">
        <div className="bg-white rounded-3xl p-4 sm:p-6 md:p-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-purple-800 mb-6 sm:mb-8">
            Enter OTP
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 
                           text-center text-lg sm:text-xl md:text-2xl font-bold 
                           border-2 border-purple-800 rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-purple-800 
                           focus:ring-opacity-50"
                />
              ))}
            </div>

            <button 
              type="submit"
              className="w-full py-2.5 sm:py-3 text-base sm:text-lg md:text-xl 
                       font-semibold text-white bg-purple-800 rounded-full 
                       transition-colors hover:bg-purple-700"
            >
              Confirm
            </button>
          </form>

          <div className="mt-4 sm:mt-6 text-center">
            <button 
              onClick={() => navigate('/signup/passenger')}
              className="text-purple-800 font-semibold text-sm sm:text-base 
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

export default OtpVerification