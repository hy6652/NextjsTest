import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ReactNode } from "react";

interface ModalProps{
    title: string;
    cancelBtn: string;
    confirmBtn: string;
    onClose: () => void;
    onConfirm: () => void;
    children?: ReactNode;
}

export default function CommonModal({ title, cancelBtn, confirmBtn, onClose, onConfirm, children }: ModalProps){
    return(
        <div className="modal-container" style={{ display: "flex" }} id="modal1">
            <div className="modal-wrap">
                <div className="modal-content">
                    <div className="modal-content-header pr0">
                        <p className="modal-title">{title}</p>
                        <button className="btn btn-transparent btn-sm" onClick={onClose}>
                            <FontAwesomeIcon icon={faXmark}/>
                        </button>
                    </div>
                    <div className="modal-content-body">
                        {children}
                    </div>
                </div>
                <div className="modal-btn-wrap">
                    <button className="btn btn-default btn-lg" onClick={onClose}>{cancelBtn}</button>
                    <button className="btn btn-primary btn-lg" onClick={onConfirm}>{confirmBtn}</button>
                </div>
            </div>
        </div>
    )
}