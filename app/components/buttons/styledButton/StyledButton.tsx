import S from './StyledButton.module.scss';

interface StyledButtonProps {
  label: string;
}

const StyledButton: React.FC<StyledButtonProps> = ({ label }) => {
  return (
    <button
      type='button'
      className={S.container}>
      <span>{label}</span>
      <span>{label}</span>
    </button>
  );
};

export default StyledButton;
