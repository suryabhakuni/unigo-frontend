// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import Logo from './common/Logo'
// import Button from './common/Button'
// import Input from './common/Input'

// const SignIn = () => {
//   const [formData, setFormData] = useState({
//     emailOrNumber: '',
//     password: '',
//     acceptTerms: false
//   })

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // Handle form submission
//   }

//   return (
//     <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
//       <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">
//         <div className="flex justify-center mb-8">
//           <Logo />
//         </div>

//         <h1 className="text-2xl font-bold text-center text-[#4B0082] mb-8">
//           Login
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <Input
//             type="text"
//             placeholder="Email or Number"
//             value={formData.emailOrNumber}
//             onChange={(e) => setFormData({ ...formData, emailOrNumber: e.target.value })}
//             icon={
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
//               </svg>
//             }
//           />

//           <Input
//             type="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//             icon={
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" />
//               </svg>
//             }
//           />

//           <div className="flex items-center">
//             <input
//               type="checkbox"
//               id="terms"
//               checked={formData.acceptTerms}
//               onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
//               className="rounded border-gray-300 text-[#4B0082]"
//             />
//             <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
//               Accept all terms and conditions
//             </label>
//           </div>

//           <Button type="submit">Submit</Button>
//         </form>

//         <div className="mt-6 text-center">
//           <Link to="/forgot-password" className="text-[#4B0082] text-sm">
//             Forgot Password
//           </Link>
//         </div>

//         <div className="mt-8 text-center">
//           <p className="text-gray-600">Don't have an account?</p>
//           <Link to="/signup" className="text-[#4B0082] font-semibold">
//             Sign Up
//           </Link>
//         </div>

//         <div className="mt-8 flex justify-center space-x-4">
//           <button className="w-12 h-12 rounded-full bg-[#4B0082] flex items-center justify-center">
//             <span className="text-white">f</span>
//           </button>
//           <button className="w-12 h-12 rounded-full bg-[#4B0082] flex items-center justify-center">
//             <span className="text-white">G</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SignIn

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
    <div className="min-h-screen bg-[#4B0082] flex flex-col items-center">
      {/* Logo */}
      <div className="flex justify-center pt-3 mb-1">
        <Logo className="h-40" />
      </div>

      {/* Login Card */}
      <div className="bg-white w-full max-w-[400px] rounded-3xl p-6">
        <h1 className="text-2xl text-center font-bold text-[#4B0082] mb-6">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center">
              <FaUser className="w-6 h-6 text-[#4B0082]" />
            </div>
            <input
              type="text"
              placeholder="Email or Number"
              value={formData.emailOrNumber}
              onChange={(e) => setFormData({ ...formData, emailOrNumber: e.target.value })}
              className="w-full pl-14 pr-4 py-3 rounded-full border-2 border-[#4B0082] outline-none text-[#4B0082] placeholder-[#4B0082]"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center">
              <FaLock className="w-6 h-6 text-[#4B0082]" />
            </div>
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full pl-14 pr-4 py-3 rounded-full border-2 border-[#4B0082] outline-none text-[#4B0082] placeholder-[#4B0082]"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              checked={formData.acceptTerms}
              onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
              className="w-4 h-4 rounded border-2 border-[#4B0082] text-[#4B0082]"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-[#4B0082]">
              Accept all terms and conditions
            </label>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#4B0082] text-white py-3 text-lg rounded-full hover:bg-[#4B0082]/90"
          >
            Submit
          </button>
        </form>

        <div className="mt-3 text-right">
          <Link to="/forgot-password" className="text-[#4B0082] text-sm">
            Forgot Password
          </Link>
        </div>

        <div className="mt-8 text-center border-t border-gray-200 pt-6">
          <p className="text-[#4B0082] text-sm mb-1"> Don&apos;t have an account?</p>
          <Link to="/signup" className="text-[#4B0082] text-lg font-semibold">
            Sign Up
          </Link>
        </div>

        <div className="mt-6 flex justify-center space-x-4">
          <button className="w-10 h-10 rounded-full bg-[#4B0082] flex items-center justify-center">
            <FaFacebookF className="text-white text-lg" />
          </button>
          <button className="w-10 h-10 rounded-full bg-[#4B0082] flex items-center justify-center">
            <FaGoogle className="text-white text-lg" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignIn