import { Hourglass } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 99999,
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0, 0, 0, 0.25)",
        backdropFilter: "blur(3px)",
      }}
    >
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={[
          `${({ theme }) => theme.color.green}`,
          `${({ theme }) => theme.color.lightGreen}`,
        ]}
      />
    </div>
  );
};

export default Loader;