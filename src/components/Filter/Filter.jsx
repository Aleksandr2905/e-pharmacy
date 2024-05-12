import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { selectCurrentPage } from "../../redux/pharmacy/selectors";
import { useEffect, useState } from "react";
import { getProducts } from "../../redux/pharmacy/operations";
import { useScreenWidth } from "../../hooks/useScreenWidth";
import InputForm from "../InputForm/InputForm";
import { useForm } from "react-hook-form";

const options = [
  { value: "Medicine", label: "Medicine" },
  { value: "Heart", label: "Heart" },
  { value: "Head", label: "Head" },
  { value: "Hand", label: "Hand" },
  { value: "Leg", label: "Leg" },
];

const Filter = ({ totalPages }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const [selectCategory, setSelectCategory] = useState("");
  const [search, setSearch] = useState("");
  const isDesktop = useScreenWidth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const searchValue = watch("search");

  useEffect(() => {
    dispatch(
      getProducts({
        category: selectCategory.value,
        name: search,
        page: currentPage,
        limit: isDesktop === "desktop" ? 12 : 9,
      })
    );
  }, [dispatch, selectCategory, search, currentPage, isDesktop, totalPages]);

  const handleCategoryChange = (selectedOption) => {
    setSelectCategory(selectedOption);
    dispatch(
      getProducts({
        category: selectedOption,
        name: search,
        page: 1,
        limit: isDesktop === "desktop" ? 12 : 9,
      })
    );
  };

  const onSubmit = () => {
    setSearch(searchValue);
    dispatch(
      getProducts({
        category: selectCategory.value,
        name: searchValue,
        page: 1,
        limit: isDesktop === "desktop" ? 12 : 9,
      })
    );
  };

  const handleResetClick = () => {
    dispatch(
      getProducts({
        category: "",
        name: "",
        page: 1,
        limit: isDesktop === "desktop" ? 12 : 9,
      })
    );
    setSearch("");
    setSelectCategory("");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Select
        options={options}
        placeholder="Product category"
        onChange={handleCategoryChange}
        value={selectCategory}
      />

      <InputForm
        name="search"
        type="text"
        placeholder="Search medicine"
        register={register}
        errors={errors}
      />
      <button type="submit">Filter</button>
      <button type="reset" onClick={handleResetClick}>
        Reset
      </button>
    </form>
  );
};

export default Filter;
