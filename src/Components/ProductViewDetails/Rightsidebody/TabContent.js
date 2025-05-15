import { Button } from "@mui/material";
// icons
import GridOnIcon from "@mui/icons-material/GridOn";
import DehazeIcon from "@mui/icons-material/Dehaze";

const TabContent = ({ handleflexRow, handleflexColumn, activeTabs }) => {
  return (
    <div>
      {activeTabs === "tab2" ? (
        <>
          {/* Button for list view */}
          <Button
            sx={{
              backgroundColor: "#E1E1E1",
              color: "black",
              borderRadius: "5px 0px 0px 5px",
            }}
            onClick={handleflexRow}
          >
            <DehazeIcon />
          </Button>
        </>
      ) : (
        <Button
          sx={{
            color: "black",
            border: "2px solid #F2F2F2",
            borderRadius: "5px 0px 0px 5px",
          }}
          onClick={handleflexRow}
        >
          <DehazeIcon />
        </Button>
      )}
      {activeTabs === "tab1" ? (
        <>
          {/* Button for grid view */}
          <Button
            sx={{
              backgroundColor: "#E1E1E1",
              color: "black",
              border: "1px solid #F2F2F2",
              borderRadius: "0px 5px 5px 0px",
            }}
            onClick={handleflexColumn}
          >
            <GridOnIcon />
          </Button>
        </>
      ) : (
        <Button
          sx={{
            color: "black",
            border: "1px solid #F2F2F2",
            borderRadius: "0px 5px 5px 0px",
            margin: "0px",
          }}
          onClick={handleflexColumn}
        >
          <GridOnIcon />
        </Button>
      )}
    </div>
  );
};

export default TabContent;
