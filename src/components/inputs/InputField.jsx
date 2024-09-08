export default function InputField({ name, label, type = 'text' }) {
    return ( 
        <> 
            <label htmlFor={name} className="text-gray-300">{ label ?? ''}</label> 
            <input 
                type={type} 
                name={name} 
                id={name} 
                className="w-full p-2 bg-custom-dark-blue border border-custom-blue focus:outline-none rounded-sm" 
                autoComplete="off" 
                required  
                placeholder={name + " *"}
            /> 
        </>
    );
}