// app/components/FieldWrapper.js

export default function FieldWrapper({ label, name, type, value, onChange, placeholder, multiple, accept, options }) {
  return (
    <div className="field-wrapper w-full">
      <label htmlFor={name} className="block font-semibold mb-2">
        {label}:
      </label>

      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="border p-2 w-full outline-none focus:border-ag-brown focus:outline-none"
        />
      ) : type === 'select' ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="border p-2 w-full bg-transparent outline-none focus:border-ag-brown focus:outline-none"
        >
          <option value="" disabled className='bg-gray-800'>
            Select an option
          </option>
          {options.map((option, index) => (
            <option key={index} value={option} className='bg-gray-800'>
              {option}
            </option>
          ))}
        </select>
      ) : type === 'file' ? (
        <input
          id={name}
          name={name}
          type="file"
          onChange={onChange}
          multiple={multiple}
          accept={accept}
          className="border p-2 w-full outline-none focus:border-ag-brown focus:outline-none"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="border p-2 w-full outline-none focus:border-ag-brown focus:outline-none"
        />
      )}
    </div>
  )
}
