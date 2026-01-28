import { IoClose } from "react-icons/io5";

const SelectedModal = ({isOpen, onClose, shade}) => {
    if(!isOpen) return null;
    
    return(
        <div className="fixed inset-0 bg-black/80 grid grid-cols-2 items-center  z-50">
            <div className="ml-[20%]">
                <img className="h-110  justify-center flex" src={shade.image} alt="" />
                <IoClose className="text-white text-4xl" />


                
                
            </div>
            <div className="text-white">
                dsiweifeh
            </div>
        </div>
    )
}
export default SelectedModal; 