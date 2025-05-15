import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  Divider,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#376EC8", color: "#fff", py: 4, px: 4 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "35px" }}>
            MDB
          </Typography>
          <Typography variant="body2" mt={1} sx={{ fontSize: "30px" }}>
            © 2023 Copyright:
            <br />
            <Link
              href="https://mdbootstrap.com"
              color="inherit"
              underline="hover"
            >
              MDBootstrap.com
            </Link>
          </Typography>
        </Grid>
        {/* store */}
        <Grid size={{ xs: 12, sm: 6, md: 2 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            STORE
          </Typography>
          <Grid className="Footer_lable">About us</Grid>
          <Grid className="Footer_lable">Find store</Grid>
          <Grid className="Footer_lable">Categories</Grid>
          <Grid className="Footer_lable">Blogs</Grid>
        </Grid>
        {/* information */}
        <Grid size={{ xs: 12, sm: 6, md: 2 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            INFORMATION
          </Typography>
          <Grid className="Footer_lable">Help center</Grid>
          <Grid className="Footer_lable">Money refund</Grid>
          <Grid className="Footer_lable">Shipping info</Grid>
          <Grid className="Footer_lable">Refunds</Grid>
        </Grid>
        {/* support */}
        <Grid size={{ xs: 12, sm: 6, md: 2 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            SUPPORT
          </Typography>
          <Grid className="Footer_lable">Help center</Grid>
          <Grid className="Footer_lable">Documents</Grid>
          <Grid className="Footer_lable">Account restore</Grid>
          <Grid className="Footer_lable">My orders</Grid>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            NEWSLETTER
          </Typography>
          <Typography variant="body2" mt={1} mb={2}>
            Stay in touch with latest updates
            <br />
            about our products and offers
          </Typography>
          <Box display="flex">
            <TextField
              variant="outlined"
              size="small"
              placeholder="Email"
              className="Footer_textfield"
              sx={{
                bgcolor: "#fff",
                flexGrow: 1,
                borderRadius: "5px 0px 0px 5px",
                color: "gray",
                fontSize: "12px",
                fontWeight: "bold",
                borderRight: "none",
              }}
            />
            <Button
              variant="contained"
              sx={{
                bgcolor: "#fff",

                color: "gray",
                borderRadius: "0 5px 5px 0",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              JOIN
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{ border: "1px solid #d0c7c7", mt: 2 }} />
      <Box
        mt={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box mt={2}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/120px-Visa_Inc._logo.svg.png"
            alt="Visa"
            style={{ width: 30, marginRight: 8 }}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Mastercard-logo.png/120px-Mastercard-logo.png"
            alt="Mastercard"
            style={{ width: 30, marginRight: 8 }}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/120px-PayPal.svg.png"
            alt="Paypal"
            style={{ width: 30 }}
          />
        </Box>
        <Grid container>
          <LanguageIcon fontSize="small" />
          <Typography variant="body2" ml={1}>
            English
          </Typography>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
