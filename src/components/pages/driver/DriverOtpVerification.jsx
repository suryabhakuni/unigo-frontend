
import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const DriverOtpVerification = () => {
  const navigate = useNavigate()
  const [otp, setOtp] = useState(['', '', '', ''])
  const inputRefs = [useRef(), useRef(), useRef(), useRef()]

  useEffect(() => {
    inputRefs[0].current?.focus()
  }, [])

  const handleChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)
      
      if (value && index < 3) {
        inputRefs[index + 1].current?.focus()
      }
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus()
    }
  }

  const handleConfirm = () => {
    if (otp.every(digit => digit)) {
      navigate('/signup/driver/registration')
    }
  }

  return (
    <div className="min-h-screen bg-purple-800 flex flex-col items-center">
      {/* Logo Section */}
      
        <h1 className="text-xl sm:text-2xl md:text-3xl text-white text-center 
                      font-bold mb-6 sm:mb-8 mt-12">
          UniGo! Ride Sharing
        </h1>

      {/* OTP Section */}
      <div className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-md mx-auto px-4 mb-6 sm:mb-8">
        <div className="bg-white rounded-3xl p-4 sm:p-6 md:p-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-purple-800 mb-6 sm:mb-8">
            Enter OTP
          </h2>

          {/* OTP Input Group */}
          <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={inputRefs[index]}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 
                         text-center text-lg sm:text-xl md:text-2xl font-bold 
                         border-2 border-purple-800 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-purple-800 
                         focus:ring-opacity-50"
              />
            ))}
          </div>

          <button
            onClick={handleConfirm}
            className="w-full py-2.5 sm:py-3 text-base sm:text-lg md:text-xl 
                     font-semibold text-white bg-purple-800 rounded-full 
                     transition-colors hover:bg-purple-700"
          >
            Confirm
          </button>

          {/* Back Button */}
          <div className="mt-4 sm:mt-6 text-center">
            <button 
              onClick={() => navigate('/signup/driver')}
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

export default DriverOtpVerification