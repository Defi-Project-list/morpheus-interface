import CheckAnimation from '@components/components/check-animation';
import Modal from '@components/components/modal';

const WithdrawModal = ({ open, setOpen, status }) => {
  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl h-80 px-20 transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div className="h-full">
          <div className="bg-white px-4 py-12 flex justify-center items-center flex-col">
            <CheckAnimation status={status} />
            {status?.success ? (
              <span>Success! The money is in your account.</span>
            ) : (
              <span>Getting your money...</span>
            )}
          </div>
          {status?.success && (
            <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md shadow-sm px-4 py-2 bg-primary-500 text-base font-medium text-white hover:bg-primary-700  "
                onClick={() => setOpen(false)}
              >
                Check my balance
              </button>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default WithdrawModal;
