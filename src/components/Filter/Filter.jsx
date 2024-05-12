import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { selectCurrentPage } from "../../redux/pharmacy/selectors";
import { useEffect, useState } from "react";
import { getProducts } from "../../redux/pharmacy/operations";
import { useScreenWidth } from "../../hooks/useScreenWidth";
import InputForm from "../InputForm/InputForm";
import { useForm } from "react-hook-form";

const options = [
  { value: "medicine", label: "Medicine" },
  { value: "heart", label: "Heart" },
  { value: "head", label: "Head" },
  { value: "hand", label: "Hand" },
  { value: "leg", label: "Leg" },
];

const Filter = ({ totalPages }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const [selectCategory, setSelectCategory] = useState("");
  const [searchName, setSearchName] = useState("");
  const isDesktop = useScreenWidth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onTouched",
  });

  const searchNameValue = watch("searchName");

  useEffect(() => {
    dispatch(
      getProducts({
        category: selectCategory,
        name: searchName,
        page: currentPage,
        limit: isDesktop === "desktop" ? 12 : 9,
      })
    );
  }, [
    dispatch,
    selectCategory,
    searchName,
    currentPage,
    isDesktop,
    totalPages,
  ]);

  const handleCategoryChange = (selectedOption) => {
    setSelectCategory(selectedOption.value);
    dispatch(
      getProducts({
        category: selectedOption.value,
        name: searchName,
        page: 1,
        limit: isDesktop === "desktop" ? 12 : 9,
      })
    );
  };

  const handleSearchInputChange = (e) => {
    setSearchName(searchNameValue);
    dispatch(
      getProducts({
        category: selectCategory,
        name: searchNameValue,
        page: 1,
        limit: isDesktop === "desktop" ? 12 : 9,
      })
    );
  };

  const onSubmit = () => {
    dispatch(
      getProducts({
        category: selectCategory,
        name: searchNameValue,
        page: 1,
        limit: isDesktop === "desktop" ? 12 : 9,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Select
        options={options}
        placeholder="Product category"
        onChange={handleCategoryChange}
        value={{ value: selectCategory, label: selectCategory }}
      />

      <InputForm
        name="searchName"
        type="text"
        placeholder="Search medicine"
        register={register}
        errors={errors}
        onChange={handleSearchInputChange}
      />
      <button type="submit">Filter</button>
    </form>
  );
};

export default Filter;
