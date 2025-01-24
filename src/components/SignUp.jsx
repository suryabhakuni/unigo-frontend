// import { Link } from 'react-router-dom'
// import Logo from './common/Logo'
// import Button from './common/Button'

// const SignUp = () => {
//   return (
//     <div className="min-h-screen bg-purple-800 flex flex-col items-center justify-center p-4">
//       <div className="flex justify-end">
//         <Logo className="h-40" />
//       </div>
//       <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">
//         <h1 className="text-3xl font-bold text-center text-purple-800 mt-2 mb-14">
//           Sign Up
//         </h1>

//         <div className="space-y-6">
//           <Button 
//             variant="outline" 
//             className="w-full py-4 text-xl font-semibold tracking-wide" // Increased text size and added letter spacing
//           >
//             SignUp for Driver
//           </Button>
//           <Button 
//             variant="outline"
//             className="w-full py-4 text-xl font-semibold tracking-wide" // Increased text size and added letter spacing
//           >
//             SignUp for Passanger
//           </Button>
//         </div>

//         <div className="mt-10 text-center">
//           <Link to="/signin" className="text-purple-800 font-semibold text-lg hover:text-purple-700">
//             Back to Sign In
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SignUp

import { Link, useNavigate } from 'react-router-dom' // Add useNavigate
import Logo from './common/Logo'
import Button from './common/Button'

const SignUp = () => {
  const navigate = useNavigate() // Add this hook

  return (
    <div className="min-h-screen bg-purple-800 flex flex-col items-center justify-center p-4">
      <div className="flex justify-end">
        <Logo className="h-32" />
      </div>
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-purple-800 mt-2 mb-14">
          Sign Up
        </h1>

        <div className="space-y-6">
          <Button 
            variant="outline" 
            className="w-full py-4 text-xl font-semibold tracking-wide"
          >
            SignUp for Driver
          </Button>
          <Button 
            variant="outline"
            className="w-full py-4 text-xl font-semibold tracking-wide"
            onClick={() => navigate('/signup/passenger')} // Add navigation to passenger signup
          >
            SignUp for Passenger
          </Button>
        </div>

        <div className="mt-10 text-center">
          <Link to="/signin" className="text-purple-800 font-semibold text-lg hover:text-purple-700">
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp