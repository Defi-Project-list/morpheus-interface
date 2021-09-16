import CheckAnimation from '@components/components/check-animation';
import Modal from '@components/components/modal';
import DepositMoney from '.';

export const InvestModal = ({ open, setOpen, investmentRisk }) => {
  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow-md transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div className="h-full">
          <div className=" px-6 py-6 flex justify-center items-center flex-col bg-black-700 bg-opacity-95">
            <DepositMoney riskLevel={investmentRisk} setOpen={setOpen} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default InvestModal;
