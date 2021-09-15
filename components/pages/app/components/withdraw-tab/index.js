import WithdrawHeader from './withdraw-header';
import WithdrawMoney from './withdraw-money';

const WithdrawTab = () => {
  return (
    <div className="w-full flex justify-center items-center mt-8 flex-col">
      <WithdrawHeader />
      <WithdrawMoney />
    </div>
  );
};

export default WithdrawTab;
