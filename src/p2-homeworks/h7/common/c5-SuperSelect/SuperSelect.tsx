import React, {
  SelectHTMLAttributes,
  DetailedHTMLProps,
  ChangeEvent,
} from "react";

type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: any[];
  onChangeOption?: (option: any) => void;
};

const SuperSelect: React.FC<SuperSelectPropsType> = ({
  options,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const mappedOptions: any[] = [
    options?.map((el) => (
      <option key={el.id} value={el.id}>
        {el}
      </option>
    )),
  ];

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    // onChange, onChangeOption
    onChangeOption && onChangeOption(e.currentTarget.value);

    onChange && onChange(e);
  };

  return (
    <select onChange={onChangeCallback} {...restProps}>
      {mappedOptions}
    </select>
  );
};

export default SuperSelect;
