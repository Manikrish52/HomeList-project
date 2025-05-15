import {
  Button,
  useMediaQuery,
  IconButton,
  Menu,
  MenuItem,
  Grid,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
// images
import MDBImage from "../../Assets/Images/MDB image.png";
// icons
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Header = () => {
  // mobile responsive
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  // menu items
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: { xs: "", md: "0rem" },
      }}
    >
      <Grid
        size={{ xs: 2, sm: 2, md: 2 }}
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          paddingRight: isMobile ? "0px" : "3rem",
          marginBottom: { xs: "5px", md: "0rem" },
        }}
      >
        <img src={MDBImage} alt="MDBImage" />
      </Grid>
      <Grid
        size={{ xs: 6, sm: 6, md: 5 }}
        sx={{
          marginBottom: { xs: "5px", md: "0rem" },
          paddingLeft: isMobile ? "0px" : "6rem",
        }}
      >
        <div className="search_container">
          <input type="text" placeholder="Search" className="search_input" />
          <button className="searchbutton_icon">
            <SearchOutlinedIcon />
          </button>
        </div>
      </Grid>
      {isMobile ? (
        <Grid size={{ xs: 2 }} sx={{ display: "flex", justifyContent: "end" }}>
          <IconButton onClick={handleClick}>
            <MenuIcon />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
          >
            <MenuItem sx={{ padding: "0px 8px" }} onClick={handleClose}>
              <Button
                sx={{ textTransform: "none" }}
                className="ButtonMobile_content"
              >
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
            </MenuItem>

            <MenuItem sx={{ padding: "0px 8px" }} onClick={handleClose}>
              <Button
                sx={{ textTransform: "none" }}
                className="ButtonMobile_content"
              >
                <FavoriteIcon
                  sx={{
                    padding: "0px 8px 0px 0px",
                    color: "#505150",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                />
                Wishlist
              </Button>
            </MenuItem>

            <MenuItem sx={{ padding: "0px 8px" }} onClick={handleClose}>
              <Button
                sx={{ textTransform: "none" }}
                className="ButtonMobile_content"
              >
                <ShoppingCartIcon
                  sx={{
                    padding: "0px 8px 0px 0px",
                    color: "#505150",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                />
                My Cart
              </Button>
            </MenuItem>
          </Menu>
        </Grid>
      ) : (
        <Grid
          size={{ xs: 12, sm: 6, md: 5 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingLeft: "75px",
            gap: "6px",
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
      )}
    </Grid>
  );
};

export default Header;
