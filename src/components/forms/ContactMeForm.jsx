import InputField from "../inputs/InputField";
import Textarea from "../inputs/Textarea";
import MainButtonDesign from "../buttons/MainButtonDesign";

export default function ContactMeForm() {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Functionality is not yet implemented. Please contact me by my Email or Mobile Number instead.");
    }
    
    return (
        <form className="grid grid-cols-12 w-full gap-5" onSubmit={handleSubmit}>
            <div className="col-span-6">
                <InputField name={"name"} label={"YOUR NAME"} type="text"/>
            </div>
            <div className="col-span-6">
                <InputField name={"email"} label={"YOUR EMAIL"} type="email"/>
            </div>
            <div className="col-span-12">
                <InputField name={"subject"} label={"SUBJECT"} type="text"/>
            </div>
            <div className="col-span-12">
                <Textarea name={"message"} label={"Message"}/>
            </div>
            <div className="col-span-12">
                <button type="submit" className="w-full">
                    <MainButtonDesign text="submit" additionalClasses="w-full">SEND MESSAGE</MainButtonDesign>
                </button>
            </div>
        </form>
    );
}