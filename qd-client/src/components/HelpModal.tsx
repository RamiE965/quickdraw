interface HelpModalProps {
    isVisible: boolean,
    onClose: () => void;
}

export const HelpModal = ({ isVisible, onClose }: HelpModalProps ) => {
    if (!isVisible) return null;

    return (
        <div className="covercard">
          <div className="covercard-container">
            <button className="button-3d blue" onClick={onClose} >
                Close
            </button>
          </div>
        </div>
    );
};