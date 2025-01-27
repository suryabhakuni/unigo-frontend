// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { 
//   FaUser, 
//   FaEnvelope, 
//   FaLock, 
//   FaCalendarAlt, 
//   FaGraduationCap 
// } from 'react-icons/fa'
// import Logo from '../../common/Logo'
// import { MdPhone } from 'react-icons/md'

// const UserDetails = () => {
//   const navigate = useNavigate()
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     mobile: '',
//     dob: '',
//     course: ''
//   })

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     navigate('/signin')
//   }

//   return (
//     <div className="min-h-screen bg-purple-800 flex flex-col items-center">
//       {/* Logo Section */}
//       <div className="flex-1 flex items-center justify-center pt-6 pb-2">
//         <Logo className="h-24 w-auto" />
//       </div>

//       {/* Form Section */}
//       <div className="w-full max-w-md bg-white rounded-[40px] p-8 mx-4 mb-8">
//         <h1 className="text-3xl font-bold text-center text-purple-800 mb-6">
//           Sign Up
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Input Fields */}
//           <div className="relative">
//             <FaUser className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-800" />
//             <input
//               type="text"
//               placeholder="Full Name"
//               value={formData.fullName}
//               onChange={(e) => setFormData({...formData, fullName: e.target.value})}
//               className="w-full pl-14 pr-6 py-3 text-base font-semibold
//                        text-purple-800 border-2 border-purple-800 rounded-full
//                        focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50
//                        placeholder:text-purple-800/60"
//             />
//           </div>

//           <div className="relative">
//             <FaEnvelope className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-800" />
//             <input
//               type="email"
//               placeholder="Email Id"
//               value={formData.email}
//               onChange={(e) => setFormData({...formData, email: e.target.value})}
//               className="w-full pl-14 pr-6 py-3 text-base font-semibold
//                        text-purple-800 border-2 border-purple-800 rounded-full
//                        focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50
//                        placeholder:text-purple-800/60"
//             />
//           </div>

//           <div className="relative">
//             <FaLock className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-800" />
//             <input
//               type="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={(e) => setFormData({...formData, password: e.target.value})}
//               className="w-full pl-14 pr-6 py-3 text-base font-semibold
//                        text-purple-800 border-2 border-purple-800 rounded-full
//                        focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50
//                        placeholder:text-purple-800/60"
//             />
//           </div>

//           <div className="relative">
//             <FaLock className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-800" />
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               value={formData.confirmPassword}
//               onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
//               className="w-full pl-14 pr-6 py-3 text-base font-semibold
//                        text-purple-800 border-2 border-purple-800 rounded-full
//                        focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50
//                        placeholder:text-purple-800/60"
//             />
//           </div>

//           <div className="relative">
//             <MdPhone className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-800" />
//             <input
//               type="tel"
//               maxLength={10}
//               placeholder="Mobile Number"
//               value={formData.mobile}
//               onChange={(e) => setFormData({...formData, mobile: e.target.value})}
//               className="w-full pl-14 pr-6 py-3 text-base font-semibold
//                        text-purple-800 border-2 border-purple-800 rounded-full
//                        focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50
//                        placeholder:text-purple-800/60"
//             />
//           </div>

//           <div className="relative">
//             <FaCalendarAlt className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-800" />
//             <input
//               type="date"
//               value={formData.dob}
//               onChange={(e) => setFormData({...formData, dob: e.target.value})}
//               className="w-full pl-14 pr-6 py-3 text-base font-semibold
//                        text-purple-800 border-2 border-purple-800 rounded-full
//                        focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50"
//             />
//           </div>

//           <div className="relative">
//             <FaGraduationCap className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-800" />
//             <input
//               type="text"
//               placeholder="Course"
//               value={formData.course}
//               onChange={(e) => setFormData({...formData, course: e.target.value})}
//               className="w-full pl-14 pr-6 py-3 text-base font-semibold
//                        text-purple-800 border-2 border-purple-800 rounded-full
//                        focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50
//                        placeholder:text-purple-800/60"
//             />
//           </div>

//           <button 
//             type="submit"
//             className="w-full py-3 text-xl font-semibold text-white bg-purple-800 
//                      rounded-full transition-colors mt-6"
//           >
//             Sign Up
//           </button>
//         </form>

//         <div className="mt-6 text-center">
//           <p className="text-gray-600">
//             Already have an account?{' '}
//             <Link to="/signin" className="text-purple-800 font-semibold">
//               Sign In
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default UserDetails


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
      <div className="flex-1 flex items-center justify-center pt-6 pb-2">
        <Logo className="h-24 w-auto" />
      </div>

      {/* Form Section */}
      <div className="w-full max-w-md bg-white rounded-[40px] p-8 mx-4 mb-8">
        <h1 className="text-3xl font-bold text-center text-purple-800 mb-6">
          Sign Up
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Input Fields */}
          <div className="relative">
            <FaUser className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-800" />
            <input
              type="text"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              className={`w-full pl-14 pr-6 py-3 text-base font-semibold
                       text-purple-800 border-2 ${errors.fullName ? 'border-red-500' : 'border-purple-800'} rounded-full
                       focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50
                       placeholder:text-purple-800/60`}
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1 ml-4">{errors.fullName}</p>}
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-800" />
            <input
              type="email"
              placeholder="Email Id"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`w-full pl-14 pr-6 py-3 text-base font-semibold
                       text-purple-800 border-2 ${errors.email ? 'border-red-500' : 'border-purple-800'} rounded-full
                       focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50
                       placeholder:text-purple-800/60`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1 ml-4">{errors.email}</p>}
          </div>

          <div className="relative">
            <FaLock className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-800" />
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className={`w-full pl-14 pr-6 py-3 text-base font-semibold
                       text-purple-800 border-2 ${errors.password ? 'border-red-500' : 'border-purple-800'} rounded-full
                       focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50
                       placeholder:text-purple-800/60`}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1 ml-4">{errors.password}</p>}
          </div>

          <div className="relative">
            <FaLock className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-800" />
            <input
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
              className={`w-full pl-14 pr-6 py-3 text-base font-semibold
                       text-purple-800 border-2 ${errors.confirmPassword ? 'border-red-500' : 'border-purple-800'} rounded-full
                       focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50
                       placeholder:text-purple-800/60`}
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1 ml-4">{errors.confirmPassword}</p>}
          </div>

          <div className="relative">
            <MdPhone className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-800" />
            <input
              type="tel"
              maxLength={10}
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={(e) => handleInputChange('mobile', e.target.value)}
              className={`w-full pl-14 pr-6 py-3 text-base font-semibold
                       text-purple-800 border-2 ${errors.mobile ? 'border-red-500' : 'border-purple-800'} rounded-full
                       focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50
                       placeholder:text-purple-800/60`}
            />
            {errors.mobile && <p className="text-red-500 text-sm mt-1 ml-4">{errors.mobile}</p>}
          </div>

          <div className="relative">
            <FaCalendarAlt className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-800" />
            <input
              type="date"
              max={getCurrentDate()}
              value={formData.dob}
              onChange={(e) => handleInputChange('dob', e.target.value)}
              className={`w-full pl-14 pr-6 py-3 text-base font-semibold
                       text-purple-800 border-2 ${errors.dob ? 'border-red-500' : 'border-purple-800'} rounded-full
                       focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50`}
            />
            {errors.dob && <p className="text-red-500 text-sm mt-1 ml-4">{errors.dob}</p>}
          </div>

          <div className="relative">
            <FaGraduationCap className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-800" />
            <input
              type="text"
              placeholder="Course"
              value={formData.course}
              onChange={(e) => handleInputChange('course', e.target.value)}
              className={`w-full pl-14 pr-6 py-3 text-base font-semibold
                       text-purple-800 border-2 ${errors.course ? 'border-red-500' : 'border-purple-800'} rounded-full
                       focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50
                       placeholder:text-purple-800/60`}
            />
            {errors.course && <p className="text-red-500 text-sm mt-1 ml-4">{errors.course}</p>}
          </div>

          <button 
            type="submit"
            className="w-full py-3 text-xl font-semibold text-white bg-purple-800 
                     rounded-full transition-colors mt-6"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/signin" className="text-purple-800 font-semibold">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default UserDetails