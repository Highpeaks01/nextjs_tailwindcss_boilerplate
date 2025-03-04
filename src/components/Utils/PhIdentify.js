import posthog from 'posthog-js'

export default function PhIdentify (email, userData) {

  // Get the timestamp of the last identify action
  const lastIdentifiedTime = localStorage.getItem('posthogLastIdentifiedTime')
  const currentTime = Date.now()

  // Check if 24 hours have passed since the last identification
  if (!lastIdentifiedTime || currentTime - lastIdentifiedTime > 12 * 60 * 60 * 1000) {
    // Add subscription plan information if it is "plus"
    const posthogData = {
      ...userData,
      plus: userData?.subscription?.plan === "plus"
    }

    // Identify the user
    posthog.identify(email, posthogData)

    // Set the current time as the last identification time in localStorage
    localStorage.setItem('posthogLastIdentifiedTime', currentTime.toString())
  }
}