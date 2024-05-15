import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationButtons = () => {
  return (
    <Stack spacing={2}>
      <Pagination
        count={10}
        showFirstButton
        showLastButton
        defaultPage={1}
        siblingCount={0}
        boundaryCount={0}
        variant="outlined"
        sx={{
          "& .MuiPaginationItem-root": {
            color: "#1D1E21",
            backgroundColor: "#transparent",
          },
          "& .Mui-selected": {
            backgroundColor: "#59B17A !important",
            color: "white",
            borderColor: "#59B17A",
          },
        }}
      />
    </Stack>
  );
};

export default PaginationButtons;
