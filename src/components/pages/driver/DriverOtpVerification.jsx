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
      <div className="w-full px-4 py-8">
        <h1 className="text-4xl text-white text-center font-bold mt-8 mb-12">
          UniGo! Ride Sharing
        </h1>

        <div className="bg-white rounded-3xl p-8 max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">
            Enter OTP
          </h2>

          <div className="flex justify-center space-x-4 mb-12">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={inputRefs[index]}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-2xl font-bold border-b-2 border-purple-800
                          focus:outline-none focus:border-purple-600"
              />
            ))}
          </div>

          <button
            onClick={handleConfirm}
            className="w-full bg-purple-800 text-white py-3 rounded-full font-semibold"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

export default DriverOtpVerification