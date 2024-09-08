export default function Textarea({ name, label }) {
    return ( 
        <> 
            <label htmlFor={name} className="text-gray-300">{ label ?? ''}</label> 
            <textarea 
                name={name} 
                id={name} 
                placeholder={name + " *"} 
                className="w-full p-2 bg-custom-dark-blue border border-custom-blue focus:outline-none rounded-sm" 
                autoComplete="off" >

            </textarea>
        </>
    );
}