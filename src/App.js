import { Grid } from "@mui/material";
import "./App.css";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import ProductContent from "./Components/ProductViewDetails/ProductContent";

function App() {
  return (
    <Grid sx={{ height: "100dvh", overflowY: "auto" }}>
      {/* Header Content */}
      <Grid
        sx={{
          width: "100%",
          position: "sticky",
          top: "0",
          backgroundColor: "#fff",
          zIndex: "1",
        }}
      >
        <Header />
      </Grid>
      {/* navbar content */}
      <Grid
        sx={{
          width: "100%",
          position: "sticky",
          top: { xs: "48px", md: "43px" },
          backgroundColor: "#fff",
          zIndex: "1",
        }}
      >
        <NavBar />
      </Grid>
      {/* body content */}

      <Grid
        sx={{
          overflowY: "auto",
          zIndex: "-2",
          marginBottom: "40px",
        }}
      >
        <ProductContent />
        {/* footer content */}
      </Grid>
      <Footer />
    </Grid>
  );
}

export default App;
