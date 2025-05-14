import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Pagination,
  Rating,
  IconButton,
  Divider,
} from "@mui/material";
import TabContent from "./TabContent";
import SearchContent from "./SearchContent";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// images
import FirstIamge from "../../Images/image1.avif";
import SecondImage from "../../Images/image2.avif";
import ThirdImage from "../../Images/image3.webp";
import FourthImage from "../../Images/images4.jpg";
// product  data
const products = [
  {
    title: "Rucksack Backpack Jeans",
    rating: 4.5,
    orders: 154,
    price: 34.5,
    oldPrice: 49.99,
    shipping: "Free shipping",
    image: FirstIamge,
    description:
      "Short description about the product goes here, for ex its features. Lorem ipsum dolor sit amet with hapti you onter into any new area of science, you almost lorem ipsum is great text consectetur adipisicing",
  },
  {
    title: "Men's Denim Jeans Shorts",
    rating: 3,
    orders: 73,
    price: 34.5,
    oldPrice: 49.99,
    shipping: "Paid shipping",
    image: SecondImage,
    description:
      "Re-engineered Digital Crown with hapti Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua tempor incididunt ut labore et dolore magna [..]",
  },
  {
    title: "T-shirt for Men Blue Cotton Base",
    rating: 3.5,
    orders: 910,
    price: 99.5,
    oldPrice: null,
    shipping: "Free shipping",
    image: ThirdImage,
    description:
      "Short description about the product goes horn, for ex Its features. Lorem ipsum dolor sit amet with hapti you enter into any new area of science, you almost lorem.Ipsum is great text consectetur adipisicing",
  },
  {
    title: "Winter Jacket for Men and Women",
    rating: 4.5,
    orders: 154,
    price: 140,
    oldPrice: 190,
    shipping: "Free shipping",
    image: FourthImage,
    description:
      "Short description about the product goes here, for ex its features. Lorem ipsum dolor sit amet with hapti you enter into any new area of science, you almost lorem ipsum is great text",
  },
  {
    title: "T-shirt for Men Blue Cotton Base",
    rating: 4.5,
    orders: 154,
    price: 99.5,
    oldPrice: 190,
    shipping: "Free shipping",
    image: ThirdImage,
    description:
      "Short description about the product goes here, for ex Its features. Lorem ipsum dolor sit amet with hapti you enter into any new area of science, you almost lorem ipsum is great text",
  },
  {
    title: "T-shirt for Men Blue Cotton Base",
    rating: 4.5,
    orders: 154,
    price: 99.5,
    oldPrice: 190,
    shipping: "Free shipping",
    image: FirstIamge,

    description:
      "Short description about the product goes here, for ex Its features. Lorem ipsum dolor sit amet with hapti you enter into any new area of science, you almost lorem ipsum is great text",
  },
  {
    title: "Rucksack Backpack Jeans",
    rating: 4.5,
    orders: 154,
    price: 34.5,
    oldPrice: 49.99,
    shipping: "Free shipping",
    image: ThirdImage,
    description:
      "Short description about the product goes here, for ex its features. Lorem ipsum dolor sit amet with hapti you onter into any new area of science, you almost lorem ipsum is great text consectetur adipisicing",
  },
  {
    title: "Men's Denim Jeans Shorts",
    rating: 3,
    orders: 73,
    price: 34.5,
    oldPrice: 49.99,
    shipping: "Paid shipping",
    image: SecondImage,
    description:
      "Re-engineered Digital Crown with hapti Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua tempor incididunt ut labore et dolore magna [..]",
  },
  {
    title: "T-shirt for Men Blue Cotton Base",
    rating: 3.5,
    orders: 910,
    price: 99.5,
    oldPrice: null,
    shipping: "Free shipping",
    image: FirstIamge,
    description:
      "Short description about the product goes horn, for ex Its features. Lorem ipsum dolor sit amet with hapti you enter into any new area of science, you almost lorem.Ipsum is great text consectetur adipisicing",
  },
  {
    title: "Winter Jacket for Men and Women",
    rating: 4.5,
    orders: 154,
    price: 140,
    oldPrice: 190,
    shipping: "Free shipping",
    image: FourthImage,
    description:
      "Short description about the product goes here, for ex its features. Lorem ipsum dolor sit amet with hapti you enter into any new area of science, you almost lorem ipsum is great text",
  },
  {
    title: "T-shirt for Men Blue Cotton Base",
    rating: 4.5,
    orders: 154,
    price: 99.5,
    oldPrice: 190,
    shipping: "Free shipping",
    image: FirstIamge,
    description:
      "Short description about the product goes here, for ex Its features. Lorem ipsum dolor sit amet with hapti you enter into any new area of science, you almost lorem ipsum is great text",
  },
  {
    title: "T-shirt for Men Blue Cotton Base",
    rating: 4.5,
    orders: 154,
    price: 99.5,
    oldPrice: 190,
    shipping: "Free shipping",
    image: SecondImage,
    description:
      "Short description about the product goes here, for ex Its features. Lorem ipsum dolor sit amet with hapti you enter into any new area of science, you almost lorem ipsum is great text",
  },
];

const RightSideBodyContent = () => {
  // tabcontent
  const [activeTab, setActiveTab] = useState("tab2");
  const handleflexRow = () => {
    setActiveTab("tab2");
  };
  const handleflexColumn = () => {
    setActiveTab("tab1");
  };
  // Pagination
  const itemsPerPage = 5;
  const [page, setPage] = useState(1);
  const handleChange = (_, value) => setPage(value);

  const paginatedItems = products.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Box sx={{ padding: "0px 50px 0px 25px " }}>
      <Grid container>
        <Grid
          size={{ xs: 12, sm: 12, md: 6 }}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Typography
            variant="h6"
            mb={2}
            sx={{ color: "#858684", fontWeight: 500, fontSize: "16px" }}
          >
            {products.length} Items found
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 12, md: 6 }}
          sx={{ display: "flex", justifyContent: "end", mb: 3 }}
        >
          {/* Search content */}
          <SearchContent />
          {/* tab  content*/}

          <TabContent
            activeTabs={activeTab}
            handleflexRow={handleflexRow}
            handleflexColumn={handleflexColumn}
          />
        </Grid>
      </Grid>
      <Divider />
      {/* list view */}
      <Grid container spacing={2} mt={2}>
        {paginatedItems.map((item, index) => (
          <Grid size={activeTab === "tab2" ? 12 : 4} key={index}>
            <Card
              sx={{
                border: "1px solid #d7cfcf",
                padding: "10px",
                paddingRight: "0px",
                boxShadow: "none",
              }}
            >
              <Grid container>
                <Grid size={activeTab === "tab1" ? 12 : 3}>
                  <CardMedia
                    component="img"
                    sx={{}}
                    image={item.image}
                    alt={item.title}
                  />
                </Grid>
                <Grid size={activeTab === "tab1" ? 12 : 6}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      flexGrow: 1,
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#7B7A6E",
                          fontSize: "16px",
                          fontWeight: 600,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Rating
                          value={item.rating}
                          precision={0.5}
                          readOnly
                          size="small"
                        />
                        <Typography variant="body2" gap={1}>
                          <span
                            style={{ color: "#FFC107", paddingRight: "5px" }}
                          >
                            {item.rating}
                          </span>
                          <span style={{ color: "#ACABB3" }}>
                            {item.orders} orders
                          </span>
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" my={1}>
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Box>
                </Grid>
                <Grid size={activeTab === "tab1" ? 12 : 3}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    pr={2}
                  >
                    <Box gap={1}>
                      <Grid
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Typography variant="h6" color="#ABACAE">
                          ${item.price}
                        </Typography>
                        {item.oldPrice && (
                          <Grid>
                            <Typography
                              variant="body2"
                              sx={{
                                textDecoration: "line-through",
                                color: "#DFACB6",
                                fontSize: "12px",
                              }}
                            >
                              ${item.oldPrice}
                            </Typography>
                          </Grid>
                        )}
                      </Grid>
                      <Grid mt={1}>
                        <Typography
                          variant="body2"
                          color={
                            item.shipping === "Free shipping"
                              ? "green"
                              : "orange"
                          }
                        >
                          {item.shipping}
                        </Typography>
                      </Grid>
                    </Box>
                    <Grid display="flex" mt={2} gap={1}>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        sx={{ width: "100px", borderRadius: "4px" }}
                      >
                        BUY THIS
                      </Button>
                      <IconButton
                        sx={{
                          padding: "2px 8px",
                          border: "1px solid #c0bcbc",
                          borderRadius: "4px",
                        }}
                      >
                        <FavoriteBorderIcon />
                      </IconButton>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box display="flex" justifyContent="center" mt={4}>
        <Pagination
          count={Math.ceil(products.length / itemsPerPage)}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default RightSideBodyContent;
