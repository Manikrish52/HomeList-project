import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Collapse,
  Grid,
  Rating,
  Slider,
  TextField,
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
} from "@mui/material";
// icons
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const LeftSideContent = () => {
  // slider
  const [price, setPrice] = useState([0, 1000]);

  // ratings
  const relatedItems = [
    "Electronics",
    "Home items",
    "Books, Magazines",
    "Men's clothing",
    "Interiors items",
    "Underwears",
    "Shoes for men",
    "Accessories",
  ];

  // brands
  const brands = [
    { name: "Mercedes", count: 120, selected: true },
    { name: "Toyota", count: 15, selected: true },
    { name: "Mitsubishi", count: 35, selected: true },
    { name: "Nissan", count: 89, selected: true },
    { name: "Honda", count: 30, selected: false },
    { name: "Suzuki", count: 30, selected: false },
  ];
  const [brandState, setBrandState] = React.useState(brands);

  const handleBrandChange = (index) => {
    const updated = [...brandState];
    updated[index].selected = !updated[index].selected;
    setBrandState(updated);
  };

  //  slider
  const handleSliderChange = (_, newValue) => {
    if (Array.isArray(newValue)) {
      setPrice(newValue);
    }
  };

  const handleMinChange = (e) => {
    const newMin = parseInt(e.target.value.replace(/\D/g, "")) || 0;
    if (newMin <= price[1]) {
      setPrice([newMin, price[1]]);
    }
  };

  const handleMaxChange = (e) => {
    const newMax = parseInt(e.target.value.replace(/\D/g, "")) || 0;
    if (newMax >= price[0]) {
      setPrice([price[0], newMax]);
    }
  };
  // rating
  const ratings = [5, 4, 3, 2];
  const [selectedRatings, setSelectedRatings] = useState([]);

  const handleToggle = (rating) => {
    setSelectedRatings((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating]
    );
  };

  // mobile
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {isMobile ? (
        <>
          <Grid
            sx={{
              position: "fixed",
              top: "65px",
              right: "10px",
              zIndex: 1,
            }}
          >
            <IconButton
              sx={{
                borderRadius: "100%",
                width: "30px",
                height: "30px",
                backgroundColor: "#fff",
              }}
              onClick={() => setDrawerOpen(!drawerOpen)}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          >
            <Box sx={{ p: 2, width: 280 }}>
              <div>
                <Grid
                  sx={{ display: "flex", justifyContent: "end" }}
                  onClick={() => {
                    setDrawerOpen(!drawerOpen);
                  }}
                >
                  <CloseIcon />
                </Grid>
                <Accordion defaultExpanded>
                  <AccordionSummary
                    className="AccordionSummary_content"
                    sx={{ borderRadius: "5px 5px 0px 0px ", margin: "0px" }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography
                      component="span"
                      sx={{
                        margin: "0px",
                        padding: "0px 20px",
                        color: "#A09187",
                      }}
                    >
                      Related items
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {relatedItems.map((item, index) => (
                      <div
                        key={index}
                        style={{ color: "rgb(101 98 98)", fontWeight: 600 }}
                        className="text-gray-700 hover:underline cursor-pointer"
                      >
                        {item}
                      </div>
                    ))}
                  </AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded>
                  <AccordionSummary
                    className="AccordionSummary_content"
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    sx={{ border: "1px solid #ece2e2" }}
                  >
                    <Typography
                      component="span"
                      sx={{
                        margin: "0px",
                        padding: "0px 20px",
                        color: "#A09187",
                      }}
                    >
                      Brands
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {brandState.map((brand, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Grid>
                          <label
                            className="flex items-center space-x-2"
                            style={{ color: "rgb(101 98 98)" }}
                          >
                            <input
                              type="checkbox"
                              checked={brand?.selected}
                              onChange={() => handleBrandChange(index)}
                            />

                            <span>{brand?.name}</span>
                          </label>
                        </Grid>
                        <Grid sx={{ margin: "2px" }}>
                          <span className="bg-gray-200 px-2 rounded BrandCount_container">
                            {brand?.count}
                          </span>
                        </Grid>
                      </div>
                    ))}
                  </AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                    className="AccordionSummary_content"
                  >
                    <Typography
                      component="span"
                      sx={{
                        margin: "0px",
                        padding: "0px 20px",
                        color: "#A09187",
                      }}
                    >
                      Price
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Collapse in={true}>
                      <Box sx={{ px: 1, pt: 2 }}>
                        <Slider
                          value={price}
                          onChange={handleSliderChange}
                          min={0}
                          max={10000}
                          step={10}
                          valueLabelDisplay="auto"
                        />

                        <Box
                          display="flex"
                          justifyContent="space-between"
                          mt={2}
                        >
                          <Grid sx={{ width: "100%" }}>
                            <Grid sx={{ color: "black", fontWeight: 600 }}>
                              Min
                            </Grid>

                            <TextField
                              value={`$${price[0]}`}
                              onChange={handleMinChange}
                              variant="outlined"
                              size="small"
                              sx={{ width: "90%" }}
                            />
                          </Grid>
                          <Grid sx={{ width: "100%" }}>
                            <Grid sx={{ color: "black", fontWeight: 600 }}>
                              Max
                            </Grid>
                            <TextField
                              value={`$${price[1]?.toLocaleString()}`}
                              onChange={handleMaxChange}
                              variant="outlined"
                              size="small"
                              sx={{ width: "90%" }}
                            />
                          </Grid>
                        </Box>

                        <Button
                          variant="outlined"
                          fullWidth
                          sx={{ mt: 2, color: "#000", borderColor: "gray" }}
                        >
                          APPLY
                        </Button>
                      </Box>
                    </Collapse>
                  </AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded>
                  <AccordionSummary
                    className="AccordionSummary_content"
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    sx={{ border: "1px solid #ece2e2" }}
                  >
                    <Typography
                      component="span"
                      sx={{
                        margin: "0px",
                        padding: "0px 20px",
                        color: "#A09187",
                      }}
                    >
                      Size
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container gap={1}>
                      <Grid>
                        <Button
                          sx={{ backgroundColor: "#cacaca", color: "#000" }}
                        >
                          XS
                        </Button>
                      </Grid>
                      <Grid>
                        <Button
                          sx={{ backgroundColor: "#cacaca", color: "#000" }}
                        >
                          sm
                        </Button>
                      </Grid>{" "}
                      <Grid>
                        <Button
                          sx={{ backgroundColor: "#cacaca", color: "#000" }}
                        >
                          lg
                        </Button>
                      </Grid>{" "}
                      <Grid>
                        <Button
                          sx={{ backgroundColor: "#cacaca", color: "#000" }}
                        >
                          xxl
                        </Button>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>{" "}
                <Accordion defaultExpanded>
                  <AccordionSummary
                    className="AccordionSummary_content"
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    sx={{ border: "1px solid #ece2e2" }}
                  >
                    <Typography
                      component="span"
                      sx={{
                        margin: "0px",
                        padding: "0px 20px",
                        color: "#A09187",
                      }}
                    >
                      Ratings
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Collapse in={true}>
                      {ratings.map((value) => (
                        <Box key={value} display="flex" alignItems="center">
                          <Checkbox
                            checked={selectedRatings?.includes(value)}
                            onChange={() => handleToggle(value)}
                          />
                          <Rating value={value} />
                        </Box>
                      ))}
                    </Collapse>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Box>
          </Drawer>
        </>
      ) : (
        <div>
          <Accordion defaultExpanded>
            <AccordionSummary
              className="AccordionSummary_content"
              sx={{ borderRadius: "5px 5px 0px 0px ", margin: "0px" }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography
                component="span"
                sx={{ margin: "0px", padding: "0px 20px", color: "#A09187" }}
              >
                Related items
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {relatedItems.map((item, index) => (
                <div
                  key={index}
                  style={{ color: "rgb(101 98 98)", fontWeight: 600 }}
                  className="text-gray-700 hover:underline cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
            <AccordionSummary
              className="AccordionSummary_content"
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ border: "1px solid #ece2e2" }}
            >
              <Typography
                component="span"
                sx={{ margin: "0px", padding: "0px 20px", color: "#A09187" }}
              >
                Brands
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {brandState.map((brand, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Grid>
                    <label
                      className="flex items-center space-x-2"
                      style={{ color: "rgb(101 98 98)" }}
                    >
                      <input
                        type="checkbox"
                        checked={brand?.selected}
                        onChange={() => handleBrandChange(index)}
                      />

                      <span>{brand?.name}</span>
                    </label>
                  </Grid>
                  <Grid sx={{ margin: "2px" }}>
                    <span className="bg-gray-200 px-2 rounded BrandCount_container">
                      {brand?.count}
                    </span>
                  </Grid>
                </div>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
              className="AccordionSummary_content"
            >
              <Typography
                component="span"
                sx={{ margin: "0px", padding: "0px 20px", color: "#A09187" }}
              >
                Price
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Collapse in={true}>
                <Box sx={{ px: 1, pt: 2 }}>
                  <Slider
                    value={price}
                    onChange={handleSliderChange}
                    min={0}
                    max={10000}
                    step={10}
                    valueLabelDisplay="auto"
                  />

                  <Box display="flex" justifyContent="space-between" mt={2}>
                    <Grid sx={{ width: "100%" }}>
                      <Grid sx={{ color: "black", fontWeight: 600 }}>Min</Grid>

                      <TextField
                        value={`$${price[0]}`}
                        onChange={handleMinChange}
                        variant="outlined"
                        size="small"
                        sx={{ width: "90%" }}
                      />
                    </Grid>
                    <Grid sx={{ width: "100%" }}>
                      <Grid sx={{ color: "black", fontWeight: 600 }}>Max</Grid>
                      <TextField
                        value={`$${price[1]?.toLocaleString()}`}
                        onChange={handleMaxChange}
                        variant="outlined"
                        size="small"
                        sx={{ width: "90%" }}
                      />
                    </Grid>
                  </Box>

                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{ mt: 2, color: "#000", borderColor: "gray" }}
                  >
                    APPLY
                  </Button>
                </Box>
              </Collapse>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
            <AccordionSummary
              className="AccordionSummary_content"
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ border: "1px solid #ece2e2" }}
            >
              <Typography
                component="span"
                sx={{ margin: "0px", padding: "0px 20px", color: "#A09187" }}
              >
                Size
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container gap={1}>
                <Grid>
                  <Button sx={{ backgroundColor: "#cacaca", color: "#000" }}>
                    XS
                  </Button>
                </Grid>
                <Grid>
                  <Button sx={{ backgroundColor: "#cacaca", color: "#000" }}>
                    sm
                  </Button>
                </Grid>{" "}
                <Grid>
                  <Button sx={{ backgroundColor: "#cacaca", color: "#000" }}>
                    lg
                  </Button>
                </Grid>{" "}
                <Grid>
                  <Button sx={{ backgroundColor: "#cacaca", color: "#000" }}>
                    xxl
                  </Button>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>{" "}
          <Accordion defaultExpanded>
            <AccordionSummary
              className="AccordionSummary_content"
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ border: "1px solid #ece2e2" }}
            >
              <Typography
                component="span"
                sx={{ margin: "0px", padding: "0px 20px", color: "#A09187" }}
              >
                Ratings
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Collapse in={true}>
                {ratings.map((value) => (
                  <Box key={value} display="flex" alignItems="center">
                    <Checkbox
                      checked={selectedRatings?.includes(value)}
                      onChange={() => handleToggle(value)}
                    />
                    <Rating value={value} />
                  </Box>
                ))}
              </Collapse>
            </AccordionDetails>
          </Accordion>
        </div>
      )}
    </>
  );
};
export default LeftSideContent;
