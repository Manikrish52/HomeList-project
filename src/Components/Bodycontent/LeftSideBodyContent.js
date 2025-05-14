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
  IconButton,
  Rating,
  Slider,
  TextField,
} from "@mui/material";
// icons
import StarIcon from "@mui/icons-material/Star";

const LeftSideBodyContent = () => {
  // slider
  const [price, setPrice] = useState([0, 1000]);
  const [open, setOpen] = useState(true);
  // ratings
  const [expanded, setExpanded] = useState(true);
  const [value, setValue] = React.useState(2);

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
  const ratings = [5, 4, 3, 2]; // Show only 5 to 2 stars
  const [selectedRatings, setSelectedRatings] = useState([]);

  const handleToggle = (rating) => {
    setSelectedRatings((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating]
    );
  };
  return (
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
            sx={{ margin: "0px", padding: "0px 20px" }}
          >
            Related items
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {relatedItems.map((item, index) => (
            <div
              key={index}
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
            sx={{ margin: "0px", padding: "0px 20px" }}
          >
            Brands
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {brandState.map((brand, index) => (
            <div key={index} className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={brand.selected}
                  onChange={() => handleBrandChange(index)}
                />
                <span>{brand.name}</span>
              </label>
              <span className="bg-gray-200 px-2 rounded">{brand.count}</span>
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
            sx={{ margin: "0px", padding: "0px 20px" }}
          >
            Price
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Collapse in={open}>
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
                    value={`$${price[1].toLocaleString()}`}
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
                // onClick={() =>
                //   alert(`Applied price: $${price[0]} - $${price[1]}`)
                // }
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
            sx={{ margin: "0px", padding: "0px 20px" }}
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
            sx={{ margin: "0px", padding: "0px 20px" }}
          >
            Ratings
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Collapse in={expanded}>
            {ratings.map((value) => (
              <Box key={value} display="flex" alignItems="center">
                <Checkbox
                  checked={selectedRatings.includes(value)}
                  onChange={() => handleToggle(value)}
                />
                <Rating value={value} />
              </Box>
            ))}
          </Collapse>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default LeftSideBodyContent;
