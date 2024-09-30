interface FilterButtonProps {
  category: string;
  isSelected: boolean;
  onClick: (category: string) => void;
}
const FilterButton = ({ category, isSelected, onClick }: FilterButtonProps) => {
  return (
    <button
      className={isSelected ? "active" : ""}
      onClick={() => onClick(category)}
    >
      {category}
    </button>
  );
};

export default FilterButton;
