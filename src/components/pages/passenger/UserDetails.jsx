
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
  FaUser, 
  FaEnvelope, 
  FaLock, 
  FaCalendarAlt, 
  FaGraduationCap 
} from 'react-icons/fa'
import Logo from '../../common/Logo'
import { MdPhone } from 'react-icons/md'

const UserDetails = () => {
  const navigate = useNavigate()
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobile: '',
    dob: '',
    course: ''
  })

  const getCurrentDate = () => {
    const today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    if (!formData.mobile) {
      newErrors.mobile = 'Mobile number is required'
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Invalid mobile number'
    }

    if (!formData.dob) {
      newErrors.dob = 'Date of birth is required'
    }

    if (!formData.course.trim()) {
      newErrors.course = 'Course is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field, value) => {
    if (field === 'mobile') {
      // Only allow numbers and max 10 digits
      if (!/^\d*$/.test(value) || value.length > 10) return
    }

    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      navigate('/signin')
    }
  }

  return (
    <div className="min-h-screen bg-purple-800 flex flex-col items-center">
      {/* Logo Section */}
      <div className="flex justify-center mt-4 sm:mt-6 md:mt-8 mb-4 sm:mb-6">
        <Logo className="h-20 sm:h-24 md:h-28 w-auto" />
      </div>

      {/* Form Section */}
      <div className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-md mx-auto px-4 mb-6 sm:mb-8">
        <div className="bg-white rounded-3xl p-4 sm:p-6 md:p-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-purple-800 mb-4 sm:mb-6">
            Sign Up
          </h1>

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            {/* Input field - Full Name */}
            <div className="relative">
              <FaUser className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-purple-800" />
              <input
                type="text"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className={`w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 text-sm sm:text-base 
                         font-semibold text-purple-800 border-2 
                         ${errors.fullName ? 'border-red-500' : 'border-purple-800'} 
                         rounded-full focus:outline-none focus:ring-2 
                         focus:ring-purple-800 focus:ring-opacity-50
                         placeholder:text-purple-800/60`}
              />
              {errors.fullName && <p className="text-red-500 text-xs sm:text-sm mt-1 ml-4">{errors.fullName}</p>}
            </div>

            {/* Input field - Email */}
            <div className="relative">
              <FaEnvelope className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-purple-800" />
              <input
                type="email"
                placeholder="Email Id"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 text-sm sm:text-base 
                         font-semibold text-purple-800 border-2 
                         ${errors.email ? 'border-red-500' : 'border-purple-800'} 
                         rounded-full focus:outline-none focus:ring-2 
                         focus:ring-purple-800 focus:ring-opacity-50
                         placeholder:text-purple-800/60`}
              />
              {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1 ml-4">{errors.email}</p>}
            </div>

            {/* Input field - Password */}
            <div className="relative">
              <FaLock className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-purple-800" />
              <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className={`w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 text-sm sm:text-base 
                         font-semibold text-purple-800 border-2 
                         ${errors.password ? 'border-red-500' : 'border-purple-800'} 
                         rounded-full focus:outline-none focus:ring-2 
                         focus:ring-purple-800 focus:ring-opacity-50
                         placeholder:text-purple-800/60`}
              />
              {errors.password && <p className="text-red-500 text-xs sm:text-sm mt-1 ml-4">{errors.password}</p>}
            </div>

            {/* Input field - Confirm Password */}
            <div className="relative">
              <FaLock className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-purple-800" />
              <input
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                className={`w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 text-sm sm:text-base 
                         font-semibold text-purple-800 border-2 
                         ${errors.confirmPassword ? 'border-red-500' : 'border-purple-800'} 
                         rounded-full focus:outline-none focus:ring-2 
                         focus:ring-purple-800 focus:ring-opacity-50
                         placeholder:text-purple-800/60`}
              />
              {errors.confirmPassword && <p className="text-red-500 text-xs sm:text-sm mt-1 ml-4">{errors.confirmPassword}</p>}
            </div>

            {/* Input field - Mobile */}
            <div className="relative">
              <MdPhone className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-purple-800" />
              <input
                type="tel"
                maxLength={10}
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={(e) => handleInputChange('mobile', e.target.value)}
                className={`w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 text-sm sm:text-base 
                         font-semibold text-purple-800 border-2 
                         ${errors.mobile ? 'border-red-500' : 'border-purple-800'} 
                         rounded-full focus:outline-none focus:ring-2 
                         focus:ring-purple-800 focus:ring-opacity-50
                         placeholder:text-purple-800/60`}
              />
              {errors.mobile && <p className="text-red-500 text-xs sm:text-sm mt-1 ml-4">{errors.mobile}</p>}
            </div>

            {/* Input field - Date of Birth */}
            <div className="relative">
              <FaCalendarAlt className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-purple-800" />
              <input
                type="date"
                max={getCurrentDate()}
                value={formData.dob}
                onChange={(e) => handleInputChange('dob', e.target.value)}
                className={`w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 text-sm sm:text-base 
                         font-semibold text-purple-800 border-2 
                         ${errors.dob ? 'border-red-500' : 'border-purple-800'} 
                         rounded-full focus:outline-none focus:ring-2 
                         focus:ring-purple-800 focus:ring-opacity-50`}
              />
              {errors.dob && <p className="text-red-500 text-xs sm:text-sm mt-1 ml-4">{errors.dob}</p>}
            </div>

            {/* Input field - Course */}
            <div className="relative">
              <FaGraduationCap className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-purple-800" />
              <input
                type="text"
                placeholder="Course"
                value={formData.course}
                onChange={(e) => handleInputChange('course', e.target.value)}
                className={`w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 text-sm sm:text-base 
                         font-semibold text-purple-800 border-2 
                         ${errors.course ? 'border-red-500' : 'border-purple-800'} 
                         rounded-full focus:outline-none focus:ring-2 
                         focus:ring-purple-800 focus:ring-opacity-50
                         placeholder:text-purple-800/60`}
              />
              {errors.course && <p className="text-red-500 text-xs sm:text-sm mt-1 ml-4">{errors.course}</p>}
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full py-2.5 sm:py-3 text-base sm:text-lg md:text-xl 
                       font-semibold text-white bg-purple-800 rounded-full 
                       transition-colors hover:bg-purple-700 mt-4 sm:mt-6"
            >
              Sign Up
            </button>
          </form>

          {/* Sign In Link */}
          <div className="mt-4 sm:mt-6 text-center">
            <p className="text-gray-600 text-sm sm:text-base">
              Already have an account?{' '}
              <Link to="/signin" className="text-purple-800 font-semibold hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDetails