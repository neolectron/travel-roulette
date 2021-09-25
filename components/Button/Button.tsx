interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ children, text, onClick }: ButtonProps) => (
  <button
    onClick={onClick}
    className="hover:bg-primary-light active:border-b-2 active:mt-2 bg-primary border-primary-dark px-4 py-2 font-bold text-white border-b-4 rounded"
  >
    {children || text || 'Button'}
  </button>
);

export default Button;
