
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaCheckCircle } from 'react-icons/fa'

const BillingDetails = () => {
  const navigate = useNavigate()
  const [billingData] = useState({
    paymentAmount: 50,
    totalDistance: 0.8,
    rideTime: 10,
    totalAmount: 100
  })

  const handleOkClick = () => {
    navigate('/review')
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-[320px] sm:max-w-[380px] md:max-w-md overflow-hidden">
        {/* Header */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center py-3 sm:py-4 md:py-5 border-b">
          Billing Details
        </h1>

        {/* Content */}
        <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
          {/* Success Icon */}
          <div className="flex justify-center">
            <FaCheckCircle className="text-green-500 text-5xl sm:text-6xl md:text-7xl" />
          </div>

          {/* Total Payment */}
          <div className="text-center space-y-1 sm:space-y-2">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Total Payment</h2>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold">₹{billingData.paymentAmount}</p>
          </div>

          {/* Details */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 text-sm sm:text-base md:text-lg font-medium">Total Distance</span>
              <span className="font-semibold text-sm sm:text-base md:text-lg">{billingData.totalDistance} Km</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-700 text-sm sm:text-base md:text-lg font-medium">Ride Time</span>
              <span className="font-semibold text-sm sm:text-base md:text-lg">{billingData.rideTime} Min.</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-700 text-sm sm:text-base md:text-lg font-medium">Total Amount</span>
              <span className="font-semibold text-sm sm:text-base md:text-lg">₹{billingData.totalAmount}</span>
            </div>
          </div>
        </div>

        {/* OK Button */}
        <button
          onClick={handleOkClick}
          className="w-full bg-purple-800 text-white py-3 sm:py-4 text-base sm:text-lg md:text-xl 
                   font-semibold hover:bg-purple-700 transition-colors"
        >
          OK
        </button>
      </div>
    </div>
  )
}

export default BillingDetails


// import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { FaCheckCircle } from 'react-icons/fa'
// import axios from 'axios'

// // Skeleton Loading Component
// const BillingDetailsSkeleton = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="bg-white rounded-3xl shadow-lg w-full max-w-md overflow-hidden">
//         {/* Header Skeleton */}
//         <div className="py-4 border-b">
//           <div className="h-8 bg-gray-200 rounded-full w-1/2 mx-auto animate-pulse" />
//         </div>

//         {/* Content Skeleton */}
//         <div className="p-6 space-y-8">
//           {/* Icon Skeleton */}
//           <div className="flex justify-center">
//             <div className="w-16 h-16 bg-gray-200 rounded-full animate-pulse" />
//           </div>

//           {/* Total Payment Skeleton */}
//           <div className="text-center space-y-2">
//             <div className="h-6 bg-gray-200 rounded-full w-1/3 mx-auto animate-pulse" />
//             <div className="h-10 bg-gray-200 rounded-full w-1/4 mx-auto animate-pulse mt-2" />
//           </div>

//           {/* Details Skeleton */}
//           <div className="space-y-4">
//             {/* Total Distance */}
//             <div className="flex justify-between items-center">
//               <div className="h-4 bg-gray-200 rounded-full w-1/3 animate-pulse" />
//               <div className="h-4 bg-gray-200 rounded-full w-1/4 animate-pulse" />
//             </div>

//             {/* Ride Time */}
//             <div className="flex justify-between items-center">
//               <div className="h-4 bg-gray-200 rounded-full w-1/3 animate-pulse" />
//               <div className="h-4 bg-gray-200 rounded-full w-1/4 animate-pulse" />
//             </div>

//             {/* Total Amount */}
//             <div className="flex justify-between items-center">
//               <div className="h-4 bg-gray-200 rounded-full w-1/3 animate-pulse" />
//               <div className="h-4 bg-gray-200 rounded-full w-1/4 animate-pulse" />
//             </div>
//           </div>
//         </div>

//         {/* Button Skeleton */}
//         <div className="h-14 bg-gray-200 animate-pulse" />
//       </div>
//     </div>
//   )
// }

// const BillingDetails = () => {
//   const navigate = useNavigate()
//   const [billingData, setBillingData] = useState({
//     paymentAmount: 0,
//     totalDistance: 0,
//     rideTime: 0,
//     totalAmount: 0
//   })
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     const fetchBillingDetails = async () => {
//       try {
//         setLoading(true)
//         // Replace with your actual API endpoint
//         const response = await axios.get('http://your-backend-url/api/billing-details')
//         setBillingData(response.data)
//         setError(null)
//       } catch (err) {
//         setError('Failed to fetch billing details')
//         console.error('Error fetching billing details:', err)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchBillingDetails()
//   }, [])

//   const handleOkClick = () => {
//     navigate('/dashboard')
//   }

//   if (loading) {
//     return <BillingDetailsSkeleton />
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//         <div className="text-red-500 text-xl font-semibold">{error}</div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="bg-white rounded-3xl shadow-lg w-full max-w-md overflow-hidden">
//         {/* Header */}
//         <h1 className="text-2xl font-bold text-center py-4 border-b">
//           Billing Details
//         </h1>

//         {/* Content */}
//         <div className="p-6 space-y-8">
//           {/* Success Icon */}
//           <div className="flex justify-center">
//             <FaCheckCircle className="text-green-500 text-7xl" />
//           </div>

//           {/* Total Payment */}
//           <div className="text-center space-y-2">
//             <h2 className="text-xl font-semibold">Total Payment</h2>
//             <p className="text-4xl font-bold">₹{billingData.paymentAmount}</p>
//           </div>

//           {/* Details */}
//           <div className="space-y-4">
//             <div className="flex justify-between items-center">
//               <span className="text-gray-700 font-medium">Total Distance</span>
//               <span className="font-semibold">{billingData.totalDistance} Km</span>
//             </div>

//             <div className="flex justify-between items-center">
//               <span className="text-gray-700 font-medium">Ride Time</span>
//               <span className="font-semibold">{billingData.rideTime} Min.</span>
//             </div>

//             <div className="flex justify-between items-center">
//               <span className="text-gray-700 font-medium">Total Amount</span>
//               <span className="font-semibold">₹{billingData.totalAmount}</span>
//             </div>
//           </div>
//         </div>

//         {/* OK Button */}
//         <button
//           onClick={handleOkClick}
//           className="w-full bg-purple-800 text-white py-4 text-lg font-semibold 
//                    hover:bg-purple-700 transition-colors"
//         >
//           OK
//         </button>
//       </div>
//     </div>
//   )
// }

// export default BillingDetails