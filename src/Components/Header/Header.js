import { Button, Grid } from "@mui/material";
// images
import MDBImage from "../../Components/Images/MDB image.png";
// icons
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
const Header = () => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom:{xs:"1rem", md:"0rem"},
      }}
    >
      <Grid
        size={{ xs: 12, sm: 6, md: 2 }}
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          paddingRight: "3rem",
        marginBottom:{xs:"5px", md:"0rem"},

        }}
      >
        <img src={MDBImage} alt="MDBImage" />
      </Grid>
      <Grid size={{xs: 12, sm: 6, md: 5 }}
      sx={{
        marginBottom:{xs:"5px", md:"0rem"},
          paddingLeft:"6rem",


      }}>
        <div className="search_container">
          <input type="text" placeholder="Search" className="search_input" />
          <button className="searchbutton_icon">
            <SearchOutlinedIcon />
          </button>
        </div>
      </Grid>
      <Grid
        size={{xs: 12, sm: 6, md: 5 }}
        sx={{ display: "flex", justifyContent:"center", paddingLeft:"75px",gap: "6px",
       }}
      >
        <Grid>
          <Button sx={{ textTransform: "none" }} className="Button_content">
            <PersonIcon
              sx={{
                padding: "0px 8px 0px 0px",
                color: "#505150",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            />
            Sign in
          </Button>
        </Grid>
        <Grid>
          <Button sx={{ textTransform: "none" }} className="Button_content">
            <FavoriteIcon
              sx={{
                padding: "0px 8px 0px 0px",
                fontSize: "18px",
                fontWeight: "bold",
                color: "#505150",

              }}
            />
            Wishlist
          </Button>
        </Grid>{" "}
        <Grid>
          <Button sx={{ textTransform: "none" }} className="Button_content">
            <ShoppingCartIcon
              sx={{
                color: "#505150",
                padding: "0px 8px 0px 0px",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            />
            My Cart
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
