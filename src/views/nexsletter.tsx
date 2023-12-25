import React from 'react'

export const Newsletter = () => {
  return (
    <div>
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
  <h2 className="text-2xl font-semibold mb-6">
    Want product news and updates?
  </h2>
  <p className="text-gray-600 mb-4">Sign up for our newsletter.</p>
  <form>
    <div className="mb-4">
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-600"
      >
        Email address
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="mt-1 p-2 w-full border rounded-md"
      />
    </div>
    <div className="flex items-center">
      <input
        type="checkbox"
        id="subscribe"
        name="subscribe"
        className="text-indigo-600"
      />
      <label htmlFor="subscribe" className="ml-2 text-sm text-gray-600">
        Subscribe
      </label>
    </div>
    <button
      type="submit"
      className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo active:bg-indigo-800"
    >
      Subscribe
    </button>
  </form>
  <p className="mt-4 text-sm text-gray-600">
    We care about your data. Read our{" "}
    <a href="#" className="text-indigo-600">
      privacy policy
    </a>
    .
  </p>
</div>

  </div>
  )
}
