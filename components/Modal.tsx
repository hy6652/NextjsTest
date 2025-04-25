import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ReactNode } from "react";

interface ModalProps{
    modalHeading: string;
    primaryButtonText: string;
    secondaryButtonText: string;
    onRequestClose: () => void;
    onRequestSubmit: () => void;
    children?: ReactNode;
}

export default function Modal({ modalHeading, primaryButtonText, secondaryButtonText, onRequestClose, onRequestSubmit, children }: ModalProps){
    return(
        <div className="modal-container" style={{ display: "flex" }} id="modal1">
            <div className="modal-wrap">
                <div className="modal-content">
                    <div className="modal-content-header pr0">
                        <p className="modal-title">{modalHeading}</p>
                        <button className="btn btn-transparent btn-sm" onClick={onRequestClose}>
                            <FontAwesomeIcon icon={faXmark}/>
                        </button>
                    </div>
                    <div className="modal-content-body">
                        {children}
                    </div>
                </div>
                <div className="modal-btn-wrap">
                    <button className="btn btn-default btn-lg" onClick={onRequestClose}>{secondaryButtonText}</button>
                    <button className="btn btn-primary btn-lg" onClick={onRequestSubmit}>{primaryButtonText}</button>
                </div>
            </div>
        </div>
    )
}