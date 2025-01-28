import { Link, useNavigate } from 'react-router-dom'
import Logo from './common/Logo'
import Button from './common/Button'

const SignUp = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-purple-800 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="flex justify-center mb-4 sm:mb-6">
        <Logo className="h-24 sm:h-28 md:h-32 lg:h-40 w-auto" />
      </div>

      <div className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-md 
                    bg-white rounded-3xl shadow-lg 
                    p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl 
                     font-bold text-center text-purple-800 
                     mt-2 mb-8 sm:mb-10 md:mb-14">
          Sign Up
        </h1>

        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          <Button 
            variant="outline" 
            className="w-full py-3 sm:py-4 
                     text-lg sm:text-xl 
                     font-semibold tracking-wide"
            onClick={() => navigate('/signup/driver')}
          >
            SignUp for Driver
          </Button>
          <Button 
            variant="outline"
            className="w-full py-3 sm:py-4 
                     text-lg sm:text-xl 
                     font-semibold tracking-wide"
            onClick={() => navigate('/signup/passenger')}
          >
            SignUp for Passenger
          </Button>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
          <Link 
            to="/signin" 
            className="text-purple-800 font-semibold 
                     text-base sm:text-lg md:text-xl 
                     hover:text-purple-700 
                     transition-colors duration-200"
          >
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp