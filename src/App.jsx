// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// // import SplashScreen from './components/SplashScreen'
// // import SignIn from './components/SignIn'
// // import SignUp from './components/SignUp'
// // import ForgotPassword from './components/ForgotPassword'
// // import './App.css'

// // function App() {
// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/" element={<SplashScreen />} />
// //         <Route path="/signin" element={<SignIn />} />
// //         <Route path="/signup" element={<SignUp />} />
// //         <Route path="/forgot-password" element={<ForgotPassword />} />
// //       </Routes>
// //     </Router>
// //   )
// // }

// // export default App

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import SplashScreen from './components/SplashScreen'
// import SignIn from './components/SignIn'
// import SignUp from './components/SignUp'
// import ForgotPassword from './components/ForgotPassword'
// import SignUpChoice from './components/pages/passenger/SignUpChoice'
// import OtpVerification from './components/pages/passenger/OtpVerification'
// import UserDetails from './components/pages/passenger/UserDetails'
// import './App.css'

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<SplashScreen />} />
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
        
//         {/* Passenger Signup Flow */}
//         <Route path="/signup/passenger" element={<SignUpChoice />} />
//         <Route path="/signup/passenger/otp" element={<OtpVerification />} />
//         <Route path="/signup/passenger/details" element={<UserDetails />} />
//       </Routes>
//     </Router>
//   )
// }

// export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SplashScreen from './components/SplashScreen'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import ForgotPassword from './components/ForgotPassword'

// Passenger Routes
import SignUpChoice from './components/pages/passenger/SignUpChoice'
import OtpVerification from './components/pages/passenger/OtpVerification'
import UserDetails from './components/pages/passenger/UserDetails'

// Driver Routes
import DriverSignUpChoice from './components/pages/driver/DriverSignUpChoice'
import DriverOtpVerification from './components/pages/driver/DriverOtpVerification'
import DriverRegistration from './components/pages/driver/DriverRegistration'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        
        {/* Passenger Signup Flow */}
        <Route path="/signup/passenger" element={<SignUpChoice />} />
        <Route path="/signup/passenger/otp" element={<OtpVerification />} />
        <Route path="/signup/passenger/details" element={<UserDetails />} />

        {/* Driver Signup Flow */}
        <Route path="/signup/driver" element={<DriverSignUpChoice />} />
        <Route path="/signup/driver/otp" element={<DriverOtpVerification />} />
        <Route path="/signup/driver/registration" element={<DriverRegistration />} />
      </Routes>
    </Router>
  )
}

export default App