import React from 'react'

const AddressCard= ({address}) => {
    return (
        <div className="px-4 pt-6 pb-8 bg-white border border-gray-200 rounded shadow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-800">
            Shipping address
          </h3>
          <a href="#" className="text-primary">
            Edit
          </a>
        </div>
        <div className="space-y-1">
          <h4 className="font-medium text-gray-700">{address?.title}</h4>
          <p className="text-gray-800">{address?.address}</p>
          <p className="text-gray-800">{address?.postalCode}</p>
          <p className="text-gray-800">{address?.house_name}</p>
        </div>
      </div>
    )
}

export default AddressCard