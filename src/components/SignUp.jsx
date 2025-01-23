import { Link } from 'react-router-dom'
import Logo from './common/Logo'
import Button from './common/Button'

const SignUp = () => {
  return (
    <div className="min-h-screen bg-purple-800 flex flex-col items-center justify-center p-4">
        <div className="flex justify-end">
          <Logo className="h-40" />
        </div>
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">


        <h1 className="text-2xl font-bold text-center text-[#4B0082] mt-2 mb-12">
          Sign Up
        </h1>

        <div className="space-y-4">
          <Button variant="outline">SignUp for Driver</Button>
          <Button variant="outline">SignUp for Passenger</Button>
        </div>

        <div className="mt-8 text-center">
          <Link to="/signin" className="text-[#4B0082] font-semibold">
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp